import React, { Component } from "react";
import { connect } from "react-redux";
import { addProfileTask } from "../../../actions/profileBacklogActions";
import PropTypes from "prop-types";
import EducationForm from "./TasksForms/EducationForm";
import SkillsForm from "./TasksForms/SkillsForm";
import LanguageForm from "./TasksForms/LanguageForm";
import ClientProjectForm from "./TasksForms/ClientProjectForm";

class AddProfileTask extends Component {
  constructor(props) {
    super(props);
    const { id, taskType } = this.props.match.params;

    this.state = {
      taskType: taskType,
      priority: 0,
      profileIdentifier: id,
      errors: {}
    };
  }

  render() {
    const { id, taskType } = this.props.match.params;
    //const { errors } = this.state;

    const taskComponent = taskType => {
      if (taskType === "skill") {
        return (
          <SkillsForm
            typeForm="Add"
            taskType={taskType}
            history={this.props.history}
            profileIdentifier={id}
          />
        );
      } else if (taskType === "educ") {
        return (
          <EducationForm
            typeForm="Add"
            taskType={taskType}
            history={this.props.history}
            profileIdentifier={id}
          />
        );
      } else if (taskType === "lang") {
        return (
          <LanguageForm
            typeForm="Add"
            taskType={taskType}
            history={this.props.history}
            profileIdentifier={id}
          />
        );
      } else if (taskType === "cliPrj") {
        return (
          <ClientProjectForm
            typeForm="Add"
            taskType={taskType}
            history={this.props.history}
            profileIdentifier={id}
          />
        );
      }
    };

    return <div>{taskComponent(taskType)}</div>;
  }
}

AddProfileTask.propTypes = {
  addProfileTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { addProfileTask }
)(AddProfileTask);
