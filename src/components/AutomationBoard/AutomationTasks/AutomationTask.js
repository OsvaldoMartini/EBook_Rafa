import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteAutomationTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./automation_task.css";

class AutomationTask extends Component {
  onDeleteClick(backlog_id, pt_id) {
    this.props.deleteAutomationTask(backlog_id, pt_id);
  }
  render() {
    const { automation_task } = this.props;
    let priorityString;
    let priorityClass;

    if (automation_task.priority === 1) {
      priorityClass = "bg-high text-light";
      priorityString = "HIGH";
    }

    if (automation_task.priority === 2) {
      priorityClass = "bg-medium text-light";
      priorityString = "MEDIUM";
    }

    if (automation_task.priority === 3) {
      priorityClass = "bg-low text-light";
      priorityString = "LOW";
    }

    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${priorityClass}`}>
          ID: {automation_task.projectSequence} -- Priority: {priorityString}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{automation_task.summary}</h5>
          <p className="card-text text-truncate ">
            {automation_task.acceptanceCriteria}
          </p>
          <Link
            to={`/updateAutomationTask/${automation_task.projectIdentifier}/${
              automation_task.projectSequence
            }`}
            className="btn btn-primary"
          >
            View / Update
          </Link>

          <button
            className="btn btn-info ml-4"
            onClick={this.onDeleteClick.bind(
              this,
              automation_task.projectIdentifier,
              automation_task.projectSequence
            )}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

AutomationTask.propTypes = {
  deleteAutomationTask: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteAutomationTask }
)(AutomationTask);
