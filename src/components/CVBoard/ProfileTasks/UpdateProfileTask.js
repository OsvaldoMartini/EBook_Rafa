import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfileTask } from "../../../actions/profileBacklogActions";
import PropTypes from "prop-types";
import EducationForm from "./TasksForms/EducationForm";
import SkillsForm from "./TasksForms/SkillsForm";
import LanguageForm from "./TasksForms/LanguageForm";
import ClientProjectForm from "./TasksForms/ClientProjectForm";

class UpdateProfileTask extends Component {
  constructor(props) {
    super(props);
    const { profile_backlog_id, pt_id, taskType } = this.props.match.params;

    this.state = {
      taskType: taskType,
      priority: 0,
      profileIdentifier: profile_backlog_id,
      profileSequence: pt_id,
      totalYears: 0,
      profile_task: {},
      errors: {}
    };
  }

  componentDidMount() {
    //const { profile_backlog_id, pt_id } = this.props.match.params;
    this.props.getProfileTask(
      this.state.profileIdentifier,
      this.state.profileSequence,
      this.props.history
    );
  }

  render() {
    const { profile_backlog_id, pt_id, taskType } = this.props.match.params;

    const taskComponent = taskType => {
      if (taskType === "skill") {
        return (
          <SkillsForm
            typeForm="Update"
            taskType={taskType}
            history={this.props.history}
            profileIdentifier={profile_backlog_id}
            profileSequence={pt_id}
          />
        );
      } else if (taskType === "educ") {
        return (
          <EducationForm
            typeForm="Update"
            taskType={taskType}
            history={this.props.history}
            profileIdentifier={profile_backlog_id}
            profileSequence={pt_id}
          />
        );
      } else if (taskType === "lang") {
        return (
          <LanguageForm
            typeForm="Update"
            taskType={taskType}
            history={this.props.history}
            profileIdentifier={profile_backlog_id}
            profileSequence={pt_id}
          />
        );
      } else if (taskType === "cliPrj") {
        return (
          <ClientProjectForm
            typeForm="Update"
            taskType={taskType}
            history={this.props.history}
            profileIdentifier={profile_backlog_id}
            profileSequence={pt_id}
          />
        );
      }
    };

    return <div>{taskComponent(taskType)}</div>;
  }
}

UpdateProfileTask.propTypes = {
  getProfileTask: PropTypes.func.isRequired,
  profile_task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile_task: state.profileBacklog.profile_task,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProfileTask }
)(UpdateProfileTask);
