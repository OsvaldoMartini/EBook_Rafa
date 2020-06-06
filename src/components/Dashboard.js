import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateButton from "../components/controlls/CreateButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.getProjects();
    } else {
      this.props.history.push(`/`);
    }
    localStorage.removeItem("selectedOption");
  }

  render() {
    const { projects } = this.props.project;

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateButton
                link="/addProject"
                caption="Create a Project"
                cssClass="btn btn-lg btn-info"
              />
              <br />
              <hr />
              {projects &&
                projects.map(project => (
                  <ProjectItem key={project.id} project={project} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
  security: state.security
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);
