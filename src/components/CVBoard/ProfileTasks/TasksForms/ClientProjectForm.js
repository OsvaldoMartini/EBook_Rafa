import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  addProfileTask,
  updateProfileTask
} from "../../../../actions/profileBacklogActions";
import { FormControl, ControlLabel, Button } from "react-bootstrap";

class ClientProjectForm extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      profileSequence: "",
      profileIdentifier: "",
      start_date: "",
      end_date: "",
      months: "",
      position: "",
      company: "",
      generalContext: "",
      responsibility: [],
      technicalEnviroment: "",
      create_At: "",
      profile_task: {},
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   //const { profile_backlog_id, pt_id } = this.props.match.params;
  //   this.props.getProfileTask(
  //     this.props.profileIdentifier,
  //     this.props.profileSequence,
  //     this.props.history
  //   );
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (
      this.props.typeForm === "Update" &&
      nextProps.profile_task !== this.state.profile_task
    ) {
      if (nextProps.profile_task) {
        this.setState({ profile_task: nextProps.profile_task });
      }

      const {
        id,
        profileSequence,
        profileIdentifier,
        start_date,
        end_date,
        months,
        position,
        company,
        generalContext,
        responsibility,
        technicalEnviroment,
        create_At
      } = nextProps.profile_task;

      if (responsibility){
          this.setState({responsibility: responsibility.sort((a,b) => a.respOrder - b.respOrder)});
      }
      
      this.setState({
        id,
        profileSequence,
        profileIdentifier,
        start_date,
        end_date,
        months,
        position,
        company,
        generalContext,
        responsibility,
        technicalEnviroment,
        create_At
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeText(value) {
    // if (/^\d+$/.test(e.toString())) {
    //   this.setState({ educYear: e });
    // }
    if (value) {
      if (!/^[0-9]+$/.test(value.toString())) {
        this.setState({ educYear: "" });
      } else {
        this.setState({ educYear: value.toString() });
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.typeForm === "Add") {
      // const newTask = {
      //   educYear: this.state.educYear,
      //   educAwarded: this.state.educAwarded,
      //   educOrganization: this.state.educOrganization
      // };
      const newTask = {
        ...this.props,
        //profileStaged: action.payload
        profile: {
          ...this.props.profile,
          start_date: this.state.start_date,
          end_date: this.state.end_date,
          months: this.state.months,
          position: this.state.position,
          company: this.state.company,
          generalContext: this.state.generalContext,
          responsibility: this.state.responsibility,
          technicalEnviroment: this.state.technicalEnviroment,
          taskType: this.props.taskType
        }
      };

      this.props.addProfileTask(
        this.props.profileIdentifier,
        newTask.profile,
        this.props.history
      );
    } else {
      const UpdateProfileTask = {
        id: this.state.id,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        months: this.state.months,
        position: this.state.position,
        company: this.state.company,
        generalContext: this.state.generalContext,
        responsibility: this.state.responsibility,
        technicalEnviroment: this.state.technicalEnviroment
      };

      // console.log(UpdateProfileTask);
      this.props.updateProfileTask(
        this.state.profileIdentifier,
        this.state.profileSequence,
        UpdateProfileTask,
        this.props.history
      );
    }
  }

  addResponsability() {
    const { responsibility } = this.state;
    // if (this.props.typeForm === "Update") {
    //   responsibility = this.props.profile_task.responsibility;
    // }

    // responsibility.push({
    //   id: responsibility.length,
    //   prompt: "",
    //   answer: ""
    // });
    //const newResp = { id: responsibility.length, prompt: "", answer: "" };
    this.setState({
      responsibility: [
        ...responsibility,
        { id: responsibility.length, prompt: "", answer: "" }
      ]
    });
  }

  updateResponsabilityPart(event, index, part) {
    const { responsibility } = this.state;

    responsibility[index][part] = event.target.value;

    this.setState({ responsibility });
  }

  addStack() {
    this.props.addStack(this.state);
  }

  render() {
    const { errors, typeForm, responsibility } = this.props;
    //console.log("responsibility", responsibility);

    const boardAlgorithm = (errors, responsibility, typeForm) => {
      if (typeof responsibility === "undefined" || responsibility.length < 1) {
        return (
          <div>
            {" "}
            <div className="alert alert-danger text-center" role="alert">
              Please add Responsibility (max caracteres: 100)
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <hr />
            <div className="container">
              <div className="row">
                <div className="form-group col">
                  <div className="col-6 text-left">
                    <ControlLabel>Role/function:</ControlLabel>
                  </div>
                </div>
                <div className="form-group col">
                  <div className="col-6 text-left">
                    <ControlLabel>Activities/Tasks:</ControlLabel>
                  </div>
                </div>
              </div>
              {this.state.responsibility.map((responsability, index) => {
                return (
                  <div key={responsability.respOrder}>
                    <div className="row">
                      <div className="form-group col">
                        <div className="col-12 text-left">
                          <textarea
                            placeholder="e.g: Functional & technical analyst"
                            name="respFunction"
                            value={responsability.respFunction}
                            onChange={event =>
                              this.updateResponsabilityPart(
                                event,
                                index,
                                "respFunction"
                              )
                            }
                            className={classnames(
                              "form-control form-control-lg",
                              {
                                "is-invalid": errors.reponsibility
                              }
                            )}
                          />
                        </div>
                      </div>
                      <div className="form-group col">
                        <div className="col-12 text-right">
                          <textarea
                            placeholder="Exc.: Write technical analysis for..."
                            name="respTask"
                            value={responsability.respTask}
                            onChange={event =>
                              this.updateResponsabilityPart(
                                event,
                                index,
                                "respTask"
                              )
                            }
                            className={classnames(
                              "form-control form-control-lg",
                              {
                                "is-invalid": errors.reponsibility
                              }
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="text-center">
                {errors.reponsibility && (
                  <div
                    className="alert alert-danger"
                    role="alert"
                    style={{
                      width: "100%",
                      marginTop: ".25rem",
                      fontSize: "80%",
                      color: "#dc3545"
                    }}
                  >
                    {errors.reponsibility}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }
    };

    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link
                to={`/editcv/${this.props.profileIdentifier}`}
                className="btn btn-light"
              >
                Back to Edit CV
              </Link>
              <h4 className="display-4 text-center">
                {typeForm} Client/Project
              </h4>
              <div className="lead text-center">
                <hr />
                {this.props.profileSequence && (
                  <span>Client/Project ID: {this.props.profileSequence} </span>
                )}
                {errors.profileNotFound && (
                  <div
                    style={{
                      width: "100%",
                      marginTop: ".25rem",
                      fontSize: "80%",
                      color: "#dc3545"
                    }}
                  >
                    {"Please Check the fields above:"}
                    <hr />
                    {errors.profileNotFound}
                  </div>
                )}
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="form-group col">
                      <h6>Start Date</h6>
                      <input
                        type="date"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.datesProject
                        })}
                        name="start_date"
                        value={this.state.start_date}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group col">
                      <h6>End Date</h6>
                      <input
                        type="date"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.datesProject
                        })}
                        name="end_date"
                        value={this.state.end_date}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-12 text-center">
                      {errors.datesProject && (
                        <div
                          style={{
                            width: "100%",
                            marginTop: ".25rem",
                            fontSize: "80%",
                            color: "#dc3545"
                          }}
                        >
                          {errors.datesProject}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <h6>Position:</h6>
                <div className="form-group">
                  <textarea
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.position
                    })}
                    placeholder="Position"
                    name="position"
                    value={this.state.position}
                    // onChange={this.onChange.bind(this)}
                    onChange={this.onChange}
                    style={{
                      marginTop: "0px",
                      marginBottom: "0px",
                      height: "100px"
                    }}
                  />
                  {errors.position && (
                    <div className="invalid-feedback">{errors.position}</div>
                  )}
                </div>
                <h6>Company:</h6>
                <div className="form-group">
                  <textarea
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.company
                    })}
                    placeholder="Company"
                    name="company"
                    value={this.state.company}
                    // onChange={this.onChange.bind(this)}
                    onChange={this.onChange}
                    style={{
                      marginTop: "0px",
                      marginBottom: "0px",
                      height: "100px"
                    }}
                  />
                  {errors.company && (
                    <div className="invalid-feedback">{errors.company}</div>
                  )}
                </div>
                <h6>General Context:</h6>
                <div className="form-group">
                  <textarea
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.generalContext
                    })}
                    placeholder="General Context"
                    name="generalContext"
                    value={this.state.generalContext}
                    // onChange={this.onChange.bind(this)}
                    onChange={this.onChange}
                    style={{
                      marginTop: "0px",
                      marginBottom: "0px",
                      height: "100px"
                    }}
                  />
                  {errors.generalContext && (
                    <div className="invalid-feedback">
                      {errors.generalContext}
                    </div>
                  )}
                </div>

                <h6>Responsibility:</h6>
                {boardAlgorithm(errors, this.state.responsibility, typeForm)}
                <hr />

                <Button
                  caption="Add Responsability"
                  className="btn btn-light"
                  onClick={() => this.addResponsability()}
                >
                  Add Responsability
                </Button>
                <hr />
                <h6>Technical Enviroment:</h6>
                <div className="form-group">
                  <textarea
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.technicalEnviroment
                    })}
                    placeholder="Technical Enviroment"
                    name="technicalEnviroment"
                    value={this.state.technicalEnviroment}
                    // onChange={this.onChange.bind(this)}
                    onChange={this.onChange}
                    style={{
                      marginTop: "0px",
                      marginBottom: "0px",
                      height: "100px"
                    }}
                  />
                  {errors.technicalEnviroment && (
                    <div className="invalid-feedback">
                      {errors.technicalEnviroment}
                    </div>
                  )}
                </div>
                <input
                  type="submit"
                  value="Save"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ClientProjectForm.propTypes = {
  //getProfileTask: PropTypes.func.isRequired,
  addProfileTask: PropTypes.func.isRequired,
  updateProfileTask: PropTypes.func.isRequired,
  profile_task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile_task: state.profileBacklog.profile_task,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addProfileTask, updateProfileTask }
)(ClientProjectForm);
