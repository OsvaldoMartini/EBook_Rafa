import React, { Component } from 'react';
import AutomationTask from './AutomationTasks/AutomationTask';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateRSocketAutomationTask } from '../../actions/backlogActions';

import {
  RSocketClient,
  JsonSerializer,
  IdentitySerializer,
} from 'rsocket-core';
import RSocketWebSocketClient from 'rsocket-websocket-client';
import { Flowable, Single } from 'rsocket-flowable';
import Message from '../controlls/Message';

let clientControl = {};

class AutomationBacklog extends Component {
  //constructor to handle errors
  constructor() {
    super();
    this.state = {
      errors: {},
      projectIdentifier: '',
      projectSequence: '',
      automation_tasks: {},
      isOpen: false,
      client: null,
    };
    //var intervalLoop = null;
    this.initRsocketWebSocket = this.initRsocketWebSocket.bind(this);
    this.addErrorMessage = this.addErrorMessage.bind(this);
    this.reloadMessages = this.reloadMessages.bind(this);
    this.toggle = this.toggle.bind(this);
    this.CloseOpenRSockets = this.CloseOpenRSockets.bind(this);
  }

  toggle() {
    //console.log('toggle', this.state.isOpen);
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  reloadMessages(data) {
    // console.log('data', data);
    //this.state.automation_tasks.forEach((element) => {
    //if (element.projectSequence === data.projectSequence) {
    //this.toggle();
    //if (data.status == 'FAILLED') {
    //  console.log('data', data);
    //  data.status = 'IN_HOLD';
    this.props.automation_tasks_prop.map((automation_task, i) =>
      automation_task.projectSequence === data.projectSequence &&
      automation_task.status !== data.status
        ? this.props.updateRSocketAutomationTask(data)
        : null,
    );

    // //console.log('spread', ...this.state.automation_tasks.status);
    // this.setState({
    //   automation_tasks: [...this.state.automation_tasks, data],
    //   //automation_tasks[1]: data,
    // });
    //}

    // this.setState((nextProps) => ({
    //   automation_tasks: !nextProps.automation_task.props,
    // }));

    //console.log('Props', this.props);

    //}
    //});
  }

  CloseOpenRSockets(automation_tasks_prop) {
    automation_tasks_prop.map((automation_task) =>
      this.initRsocketWebSocket(automation_task.projectSequence),
    );
  }

  componentDidUpdate(prevState, nextProps) {
    //console.log('DidUpdate', prevState, nextProps);
    if (
      prevState.automation_tasks_prop &&
      this.state.automation_tasks &&
      prevState.automation_tasks_prop.length > 0 &&
      this.state.automation_tasks.length > 0
    ) {
      if (
        prevState.automation_tasks_prop[0].operationName !==
        this.state.automation_tasks[0].operationName
      ) {
        if (clientControl !== undefined) {
          prevState.automation_tasks_prop.forEach((item, i) => {
            if (clientControl[item.projectSequence]) {
              clientControl[item.projectSequence].close();
            }
          });
          clientControl = {};
          console.log('CloseOpenRSockets');
          this.CloseOpenRSockets(this.state.automation_tasks);
        }
      }
    }
  }

  componentDidMount() {
    //this.handleStartRefresh();
    const { automation_tasks_prop } = this.props;
    this.CloseOpenRSockets(automation_tasks_prop);
  }

  // componentWillUpdate() {
  //   //this.handleStartRefresh();
  //   const { automation_tasks_prop } = this.props;

  //   this.CloseOpenRSockets(automation_tasks_prop);
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log(
    //  'getDerived',
    //  nextProps.automation_tasks_prop !== prevState.automation_tasks,
    //);

    return {
      errors: nextProps.errors,
      projectIdentifier: prevState.projectIdentifier,
      automation_tasks:
        nextProps.automation_tasks_prop !== prevState.automation_tasks
          ? nextProps.automation_tasks_prop
          : prevState.automation_tasks,
    };
  }

  //use websocket wrapped by rsocket
  initRsocketWebSocket(nameOper) {
    if (clientControl[nameOper] !== undefined) {
      clientControl[nameOper].close();
      //   document.getElementById("messages").innerHTML = "";
    }
    // Create an instance of a client
    //nameOper = nameOper.toLowerCase();
    let client = new RSocketClient({
      serializers: {
        data: JsonSerializer,
        metadata: IdentitySerializer,
      },
      setup: {
        // ms btw sending keepalive to server
        keepAlive: 60000,
        // ms timeout if no keepalive response
        lifetime: 180000,
        // format of `data`
        dataMimeType: 'application/json',
        // format of `metadata`
        metadataMimeType: 'message/x.rsocket.routing.v0',
      },
      transport: new RSocketWebSocketClient({
        url: 'ws://localhost:8995/tweetsocket',
      }),
    });

    clientControl[nameOper] = client;
    //this.setState({ client });

    // Open the connection
    clientControl[nameOper].connect().subscribe({
      onComplete: (socket) => {
        // socket provides the rsocket interactions fire/forget, request/response,
        // request/stream, etc as well as methods to close the socket.
        // document.getElementById("author-filter").value
        socket
          .requestStream({
            data: {
              projectSequence: nameOper,
            },
            metadata:
              String.fromCharCode('tweets.by.author'.length) +
              'tweets.by.author',
          })
          .subscribe({
            onComplete: () => console.log('complete'),
            onError: (error) => {
              //console.log(error);
              this.addErrorMessage(
                nameOper,
                'Connection has been closed due to ',
                error,
              );
            },
            onNext: (payload) => {
              //console.log(payload.data);
              this.reloadMessages(payload.data);
            },
            onSubscribe: (subscription) => {
              subscription.request(2147483647);
            },
          });
      },
      onError: (error) => {
        //console.log(error);
        this.addErrorMessage(
          nameOper,
          'Connection has been refused due to ',
          error,
        );
      },
      onSubscribe: (cancel) => {
        /* call cancel() to abort */
      },
    });

    // setInterval(() => {
    //     let that = this;
    //     this.socket && this.socket.requestResponse({
    //         data: '' + (++index),
    //         metadata: 'org.mvnsearch.account.AccountService.findById',
    //     }).subscribe({
    //         onComplete(payload) {
    //             let account = JSON.parse(payload.data);
    //             that.setState({
    //                 nick: account.nick
    //             })
    //         },
    //         onError: (e) => {
    //             console.log('onError', e)
    //         }
    //     });
    // }, 2000)
  }

  addErrorMessage(nameOper, prefix, error) {
    //console.log(nameOper, prefix);
  }

  render() {
    // const { automation_tasks_prop } = this.props;

    const tasks = this.state.automation_tasks.map(
      (automation_task) => (
        <AutomationTask
          key={automation_task.id}
          automation_task={automation_task}
        />
      ),
    );

    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.automation_task.status === 'IN_HOLD') {
        todoItems.push(tasks[i]);
      }

      if (tasks[i].props.automation_task.status === 'FAILLED') {
        inProgressItems.push(tasks[i]);
      }

      if (tasks[i].props.automation_task.status === 'SUCCESS') {
        doneItems.push(tasks[i]);
      }
    }

    return (
      <>
        <Message />
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-in-hold text-white">
                  <h3>In Hold</h3>
                </div>
              </div>
              {todoItems}
              {
                // insert tasks here
              }
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-failled text-white">
                  <h3>Failled</h3>
                </div>
              </div>
              {inProgressItems}
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-success text-white">
                  <h3>Success</h3>
                </div>
              </div>
              {doneItems}
            </div>
          </div>
        </div>
      </>
    );
  }
}

AutomationBacklog.propTypes = {
  backlog: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  updateRSocketAutomationTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  updateRSocketAutomationTask,
})(AutomationBacklog);
