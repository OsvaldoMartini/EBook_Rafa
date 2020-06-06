import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProfileTask } from "../../../actions/profileBacklogActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import DeleteTaskButton from "./DeleteTasksButton";
//import { FormControl } from "react-bootstrap";
import './profile-task.css';

class ProfileTask extends Component {
  onDeleteClick(backlog_id, pt_id) {
    this.props.deleteProfileTask(backlog_id, pt_id);
  }
  render() {
    const { profile_task } = this.props;
    let { responsibility } = profile_task;

    if (responsibility){
      responsibility = responsibility.sort((a,b) => a.respOrder - b.respOrder);
    }
    
    let priorityClass;

    if (profile_task.priority === 1) {
      priorityClass = "bg-danger text-light";
    }

    if (profile_task.priority === 2) {
      priorityClass = "bg-warning text-light";
    }

    if (profile_task.priority === 3) {
      priorityClass = "bg-info text-light";
    }

    const field_Top = profile_task => {
      if (profile_task.taskType === "skill") {
        return <div>Years of Experience: {profile_task.skillYears}</div>;
      } else if (profile_task.taskType === "educ") {
        return <div>Year Concluded: {profile_task.educYear}</div>;
      } else if (profile_task.taskType === "lang") {
        return <div>Language: {profile_task.levelLanguage}</div>;
      } else if (profile_task.taskType === "cliPrj") {
        return (
          <div>
            <div className="form-group">Company: {profile_task.company}</div>
            <div className="container">
              <div className="row">
                <div className="form-group col">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                    value={profile_task.start_date}
                    onChange={this.onChange}
                    readOnly={true}
                  />
                </div>
                <div className="form-group col">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
                    value={profile_task.end_date}
                    onChange={this.onChange}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
    };

    const field_Header = profile_task => {
      if (profile_task.taskType === "skill") {
        return <div>{profile_task.skillCompetence}</div>;
      } else if (profile_task.taskType === "educ") {
        return <div>{profile_task.educOrganization}</div>;
      } else if (profile_task.taskType === "lang") {
        return <div>{profile_task.language}</div>;
      } else if (profile_task.taskType === "cliPrj") {
        return (
          <div>
            <div className="form-group">
              <h6>Position:</h6>
              <textarea
                type="text"
                className="form-control form-control-lg"
                name="position"
                value={profile_task.position || ""}
                readOnly={true}
              />
            </div>
            <div className="form-group">
              <h6>General Context:</h6>
              <textarea
                type="text"
                className="form-control form-control-lg"
                name="generalContext"
                onChange={this.onChange}
                value={profile_task.generalContext || ""}
                readOnly={true}
              />
            </div>
          </div>
        );
      }
    };

    const field_Body = profile_task => {
      if (profile_task.taskType === "skill") {
        return <div>{profile_task.skillDescription}</div>;
      } else if (profile_task.taskType === "educ") {
        return <div>{profile_task.educAwarded}</div>;
      } else if (profile_task.taskType === "lang") {
        return <div>{profile_task.levelLanguage}</div>;
      } else if (profile_task.taskType === "cliPrj") {
        return (
          <div>
            <div className="form-group">
              <h6>Responsabilities:</h6>
              <div>
                {responsibility && (responsibility.map((responsability, index) => {
                  return (
                    <div key={index}>
                      <div className="row">
                        <div className="form-group col">
                          <div className="col-12 text-left">
                          <textarea
                            type="text"
                            className="form-control form-control-lg"
                            name="technicalEnviroment"
                            onChange={this.onChange}
                            value={responsability.respFunction || ""}
                            readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="form-group col">
                          <div className="col-12 text-right">
                          <textarea
                            type="text"
                            className="form-control form-control-lg"
                            name="technicalEnviroment"
                            onChange={this.onChange}
                            value={responsability.respTask || ""}
                            readOnly={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                 })) || "No Responsibilites Added"}
                </div>
            </div>
            <div className="form-group">
              <h6>Technical Enviroment:</h6>
              <textarea
                type="text"
                className="form-control form-control-lg"
                name="technicalEnviroment"
                onChange={this.onChange}
                value={profile_task.technicalEnviroment || ""}
                readOnly={true}
              />
            </div>
          </div>
        );
      }
    };

    const updateAlgorithm = profile_task => {
      if (profile_task.taskType === "cliPrj") {
        return (
          <div>
            {" "}
            <Link
              to={`/updateProfileTask/${profile_task.profileIdentifier}/${
                profile_task.profileSequence
              }/${profile_task.taskType}`}
              className="btn btn-primary"
            >
              View / Update
            </Link>
          </div>
        );
      }
    };

    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${priorityClass}`}>
          {field_Top(profile_task)}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{field_Header(profile_task)}</h5>
          <div className="card-text text-truncate ">
            {field_Body(profile_task)}
          </div>
          <div className="container">
            <div className="row">
              <div className="form-group col">
                <div className="col-12 text-left">
                  {updateAlgorithm(profile_task)}
                </div>
              </div>
              <div className="form-group col">
                <div className="col-12 text-right">
                  <button
                    className="btn btn-danger ml-4"
                    onClick={this.onDeleteClick.bind(
                      this,
                      profile_task.profileIdentifier,
                      profile_task.profileSequence
                    )}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileTask.propTypes = {
  deleteProfileTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProfileTask }
)(ProfileTask);
