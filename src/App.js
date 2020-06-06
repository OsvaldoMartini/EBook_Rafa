import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AddProject from './components/Project/AddProject';
import { Provider } from 'react-redux';
import store from './store';
import UpdateProject from './components/Project/UpdateProject';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import AddProjectTask from './components/ProjectBoard/ProjectTasks/AddProjectTask';
import UpdateProjectTask from './components/ProjectBoard/ProjectTasks/UpdateProjectTask';
import Landing from './components/Layout/Landing';
import Register from './components/UserManagement/Register';
import Login from './components/UserManagement/Login';
import jwt_decode from 'jwt-decode';
import {
  setJWTToken,
  setJWTTokenCandidate,
} from './securityUtils/setJWTToken';
import { SET_CURRENT_USER } from './actions/types';
import { logout } from './actions/securityActions';
import SecuredRoute from './securityUtils/SecureRoute';
import AllProfiles from './components/Profile/AllProfiles';
import AddProfile from './components/Profile/AddProfile';
import UpdateProfile from './components/Profile/UpdateProfile';
import CVBoard from './components/CVBoard/CVBoard';
import AddProfileTask from './components/CVBoard/ProfileTasks/AddProfileTask';
import UpdateProfileTask from './components/CVBoard/ProfileTasks/UpdateProfileTask';
import Home from './components/Layout/Home';
import InfoProfilePage from './components/Profile/InfoProfilePage';
//import AutomationTests  from "./components/AutomationTests/AutomationTests";
import AutomationBoard from './components/AutomationBoard/AutomationBoard';
import AutomationGridBoard from './components/AutomationBoard/AutomationGridBoard';
import AutomationReqRespBoard from './components/AutomationBoard/AutomationReqRespBoard';
import AddAutomationTask from './components/AutomationBoard/AutomationTasks/AddAutomationTask';
import UpdateAutomationTask from './components/AutomationBoard/AutomationTasks/UpdateAutomationTask';
// Chat with Socket io
import Chat from './components/ChatBoard/Chat/Chat';
import Join from './components/ChatBoard/Join/Join';

//import QuoteChanger from "./components/TimerTest/QuoteChanger";
//import Timer from './components/TimerTest/Timer';
//import Pomodoro from './components/TimerTest/Pomodoro';
import DraggableSamples from './components/controlls/DraggableSamples';

const jwtToken = localStorage.jwtToken;
const jwtTokenCandidate = localStorage.jwtTokenCandidate;

if (jwtToken && typeof jwtToken !== 'undefined') {
  setJWTToken(jwtToken);
}

if (jwtTokenCandidate && typeof jwtTokenCandidate !== 'undefined') {
  setJWTTokenCandidate(jwtTokenCandidate);
}

if (
  typeof jwtToken !== 'undefined' ||
  typeof jwtTokenCandidate !== 'undefined'
) {
  const token = jwtToken || jwtTokenCandidate;
  const decoded_jwtToken = jwt_decode(token);

  //Only for Normal jwtToken
  if (jwtToken) {
    store.dispatch({
      type: SET_CURRENT_USER,
      payload: decoded_jwtToken,
    });
  }

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = '/';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              //Public Routes
            }

            <Route exact path="/chat" component={Chat} />
            <Route exact path="/joinChat" component={Join} />
            <Route
              exact
              path="/draggable"
              component={DraggableSamples}
            />
            {/* <Route exact path="/timer" component={Timer} /> */}
            {/* <Route exact path="/pomodoro" component={Pomodoro} /> */}
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/infoPage/:id"
              component={InfoProfilePage}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/editcv/:id" component={CVBoard} />
            <Route
              exact
              path="/addProfileTask/:id/:taskType"
              component={AddProfileTask}
            />
            <Route
              exact
              path="/updateProfileTask/:profile_backlog_id/:pt_id/:taskType"
              component={UpdateProfileTask}
            />

            <Route
              exact
              path="/automationBoard/:id"
              component={AutomationBoard}
            />
            <Route
              exact
              path="/automationGridBoard/:id"
              component={AutomationGridBoard}
            />
            <Route
              exact
              path="/automationReqRespBoard/:id"
              component={AutomationReqRespBoard}
            />
            <Route
              exact
              path="/addAutomationTask/:id"
              component={AddAutomationTask}
            />
            <Route
              exact
              path="/updateAutomationTask/:backlog_id/:pt_id"
              component={UpdateAutomationTask}
            />

            {
              //Private Routes
            }
            <Switch>
              <SecuredRoute
                exact
                path="/dashboard"
                component={Dashboard}
              />
              <SecuredRoute
                exact
                path="/addProject"
                component={AddProject}
              />
              <SecuredRoute
                exact
                path="/profiles"
                component={AllProfiles}
              />
              <SecuredRoute
                exact
                path="/addProfile"
                component={AddProfile}
              />
              <SecuredRoute exact path="/home" component={Home} />
              <SecuredRoute
                exact
                path="/updateProfile/:id"
                component={UpdateProfile}
              />
              <SecuredRoute
                exact
                path="/updateProject/:id"
                component={UpdateProject}
              />
              <SecuredRoute
                exact
                path="/projectBoard/:id"
                component={ProjectBoard}
              />
              <SecuredRoute
                exact
                path="/addProjectTask/:id"
                component={AddProjectTask}
              />
              <SecuredRoute
                exact
                path="/updateProjectTask/:backlog_id/:pt_id"
                component={UpdateProjectTask}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
