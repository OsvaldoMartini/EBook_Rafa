import React, { Component } from "react";
import { getProfileByLink, updateCV } from "../../actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import requireAuth from "../hocs/requireAuth";
import { getProfileBacklog } from "../../actions/profileBacklogActions";
import CVBacklog from "./CVBacklog";
import {
  TASK_TYPE_SKILSS,
  TASK_TYPE_EDUC,
  TASK_TYPE_LANG,
  TASK_TYPE_CLI_PRJ
} from "../../actions/types";
//import { SET_PROFILE_STAGED } from "../../actions/types";
//import * as fs from "fs";
//import { Document, Packer, Paragraph, TextRun } from "docx";
import { Packer } from "docx";
import { saveAs } from "file-saver";
//import createReport from "docx-templates";
import GenerateCV from "./templates/TemplateDossie";
import CreateButton from "../controlls/CreateButton";

class CVBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      fullName: "",
      candidateEmail: "",
      profileIdentifier: "",
      token: "",
      summary: "",
      typeProfile: "",
      otherProfile: "",
      technologyArea: "",
      domains: "",
      certifications: "",
      tools: "",
      trainings: "",
      methodologies: "",
      others: "",
      faseProfile: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    //this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  onGenerateCv(document) {
    // createReport({
    //   template: "templates/myTemplate.docx",
    //   output: "reports/myReport.docx",
    //   data: {
    //     name: "John",
    //     surname: "Appleseed"
    //   }
    // });

    const doc = GenerateCV(this.props.profile);

    const packer = new Packer();
    packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, `Dossie-${this.state.fullName}.docx`);
      console.log("Document created successfully");
    });

    // const doc = new Document();

    // const paragraph = new Paragraph("Hello World");
    // const institutionText = new TextRun("Foo Bar").bold();
    // const dateText = new TextRun("Github is the best").tab().bold();
    // paragraph.addRun(institutionText);
    // paragraph.addRun(dateText);

    // doc.addParagraph(paragraph);

    // const packer = new Packer();

    // packer.toBlob(doc).then(blob => {
    //   console.log(blob);
    //   saveAs(blob, `Dossie-${this.state.fullName}.docx`);
    //   console.log("Document created successfully");
    // });
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  componentDidMount() {
    // for (let x in this.refs) {
    //   this.refs[x].onkeypress = e => this._handleKeyPress(e, this.refs[x]);
    // }
    // this.refs.focus();

    const { id } = this.props.match.params;
    //console.log("DidMount: ", this.props);

    if (this.props.security.validToken) {
      this.props.getProfileByLink(id, this.props.history);

      this.props.getProfileBacklog(id, this.props.history);
    } else {
      this.props.history.push(`/`);
    }
  }

  // componentWillUpdate(prevProps, prevState, snapshot) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  //   console.log("snapshot", snapshot);
  // }

  componentWillReceiveProps(nextProps, prevProps) {
    //console.log("WillReceiveProps: ", this.nextProps);
    if (nextProps.errors && nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile && nextProps.profile !== this.state.profile) {
      const {
        id,
        fullName,
        candidateEmail,
        profileIdentifier,
        token,
        summary,
        typeProfile,
        otherProfile,
        technologyArea,
        domains,
        certifications,
        tools,
        trainings,
        methodologies,
        others,
        faseProfile
      } = nextProps.profile;

      this.setState({
        id,
        fullName,
        candidateEmail,
        profileIdentifier,
        token,
        summary,
        typeProfile,
        otherProfile,
        technologyArea,
        domains,
        certifications,
        tools,
        trainings,
        methodologies,
        others,
        faseProfile
      });
    }
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    // if (e.target.name === "summary") {
    //   const profileStaged = {
    //     summary:
    //       e.target.name === "summary" ? e.target.value : this.state.summary
    //   };
    //   //console.log(profileStaged);
    //   this.props.dispatch({
    //     type: SET_PROFILE_STAGED,
    //     payload: profileStaged
    //   });
    // } else {
    //   if (e.target.name === "typeProfile") {
    //     const profileStaged = {
    //       typeProfile:
    //         e.target.name === "typeProfile"
    //           ? e.target.value
    //           : this.state.typeProfile
    //     };
    //     //console.log(profileStaged);
    //     this.props.dispatch({
    //       type: SET_PROFILE_STAGED,
    //       payload: profileStaged
    //     });
    //   }
    // }
  }

  onSubmit(e) {
    e.preventDefault();

    this.updateProfile();
  }

  updateProfile() {
    const updateProfile = {
      id: this.state.id,
      fullName: this.state.fullName,
      candidateEmail: this.state.candidateEmail,
      profileIdentifier: this.state.profileIdentifier,
      summary: this.state.summary,
      typeProfile: this.state.typeProfile,
      otherProfile: this.state.otherProfile,
      technologyArea: this.state.technologyArea,
      domains: this.state.domains,
      certifications: this.state.certifications,
      tools: this.state.tools,
      trainings: this.state.trainings,
      methodologies: this.state.methodologies,
      others: this.state.others,
      faseProfile: this.state.faseProfile
    };

    //console.log(updateProfile);

    this.props.updateCV(updateProfile, this.props.history);
    //window.location.href = "/";
  }

  render() {
    const { errors } = this.state;
    const { id } = this.props.match.params;
    const { profile_tasks } = this.props.profileBacklog;

    const algorithmTask = taskType_To_Filter => {
      if (taskType_To_Filter === TASK_TYPE_SKILSS) {
        return "Competences";
      } else if (taskType_To_Filter === TASK_TYPE_EDUC) {
        return "Educations";
      } else if (taskType_To_Filter === TASK_TYPE_LANG) {
        return "Languages";
      } else if (taskType_To_Filter === TASK_TYPE_CLI_PRJ) {
        return "Client/Projects";
      }
    };

    const boardAlgorithm = (errors, profile_tasks, taskType_To_Filter) => {
      if (profile_tasks.length < 1) {
        //PROJECT IDENTIFIER CHECK
        if (errors.profileNotFound) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.profileNotFound}
            </div>
          );
        } else if (errors.profileIdentifier) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.profileIdentifier}
            </div>
          );
        } else {
          // if (taskType_To_Filter === TASK_TYPE_SKILSS) {
          return (
            <Link
              to={`/addProfileTask/${id}/${taskType_To_Filter}`}
              className="btn alert-info btn-block mt-4"
              role="alert"
              style={
                this.state.typeProfile !== "Select" &&
                this.state.faseProfile === 1
                  ? null
                  : { pointerEvents: "none" }
              }
            >
              No {algorithmTask(taskType_To_Filter)} Added
            </Link>
          );
          //
        }
      } else {
        return (
          <CVBacklog
            profile_tasks_prop={profile_tasks}
            task_type_prop={taskType_To_Filter}
          />
        );
      }
    };
    return (
      <div className="profile">
        <div className="form-group col">
          <div className="col-12 text-right">
            <button
              style={{
                position: "fixed",
                bottom: "0",
                right: "0",
                width: "200px",
                zIndex: "9999"
              }}
              className="btn btn-danger ml-4"
              onClick={this.onGenerateCv.bind(this, "obabba")}
            >
              Generate Cv
            </button>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="form-group col">
              <div className="col-md-8 m-auto">
                {this.props.security.admin && (
                  <CreateButton
                    link="/profiles"
                    caption="Back to Profiles"
                    cssClass="btn btn-light"
                  />
                )}
                <div className="display-4 text-center">Edit CV form</div>
                <hr />
                {this.props.security.admin && (
                  <div>
                    <div className="text-center">Session expire in 2 days</div>
                    <hr />
                  </div>
                )}
                <form onSubmit={this.onSubmit}>
                  <div
                    role="grid"
                    onBlur={this._onBlur}
                    onFocus={this._onFocus}
                  >
                    {this.props.children}
                  </div>
                  <h6>Full name :</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.fullName
                      })}
                      placeholder="Full Name"
                      name="fullName"
                      onChange={this.onChange}
                      value={this.state.fullName || ""}
                      autoFocus={true}
                      onKeyDown={this.handleEnter}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <h6>Profile Area :</h6>
                    <select
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.typeProfile
                      })}
                      name="typeProfile"
                      value={this.state.typeProfile}
                      onChange={this.onChange}
                      ref="fullName"
                    >
                      <option value="">Select</option>
                      <option value="Software">Software</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Lead Team">Lead Team</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.typeProfile && (
                      <div
                        style={{
                          width: "100%",
                          marginTop: ".25rem",
                          fontSize: "80%",
                          color: "#dc3545"
                        }}
                      >
                        {errors.typeProfile}
                      </div>
                    )}
                  </div>
                  {this.state.typeProfile === "Other" && (
                    <div>
                      <h6>Other :</h6>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames(
                            "form-control form-control-lg ",
                            {
                              "is-invalid": errors.otherProfile
                            }
                          )}
                          placeholder="Please specify"
                          name="otherProfile"
                          onChange={this.onChange}
                          value={this.state.otherProfile}
                          autoFocus={true}
                        />
                        {errors.otherProfile && (
                          <div className="invalid-feedback">
                            {errors.otherProfile}
                          </div>
                        )}
                      </div>
                      <hr />
                    </div>
                  )}
                  <h6>Technoly Area :</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.technologyArea
                      })}
                      placeholder="Technology Area"
                      name="technologyArea"
                      onChange={this.onChange}
                      value={this.state.technologyArea || ""}
                    />
                    {errors.technologyArea && (
                      <div className="invalid-feedback">
                        {errors.technologyArea}
                      </div>
                    )}
                  </div>

                  <h6>Experiences:</h6>
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.summary
                      })}
                      placeholder="Summary of profile"
                      name="summary"
                      value={this.state.summary}
                      onChange={this.onChange}
                      ref="fullName"
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        height: "251px"
                      }}
                    />
                    {errors.summary && (
                      <div className="invalid-feedback">{errors.summary}</div>
                    )}
                  </div>
                  <div className="col-12 text-right">
                    <Link
                      to={`/editcv/${id}`}
                      onClick={this.updateProfile.bind(this)}
                      className=""
                      style={
                        this.state.summary ? null : { pointerEvents: "none" }
                      }
                    >
                      <i
                        className="fas fa-plus-circle"
                        style={this.state.summary ? null : { color: "#dddddd" }}
                      >
                        {" "}
                        Save
                      </i>
                    </Link>
                  </div>
                  <hr />
                  <h6>Years of Experiences:</h6>
                  <div className="card">
                    <div className="card-body">
                      <div className="col-12 text-right">
                        <Link
                          to={`/addProfileTask/${id}/${"skill"}`}
                          className=""
                          style={
                            this.state.typeProfile !== "Select" &&
                            this.state.faseProfile === 1
                              ? null
                              : { pointerEvents: "none" }
                          }
                        >
                          <i
                            className="fas fa-plus-circle"
                            style={
                              this.state.typeProfile !== "Select" &&
                              this.state.faseProfile === 1
                                ? null
                                : { color: "#dddddd" }
                            }
                          >
                            {" "}
                            Add Competences
                          </i>
                        </Link>
                      </div>
                      {boardAlgorithm(
                        errors,
                        profile_tasks.filter(
                          profile_tasks =>
                            profile_tasks.taskType === TASK_TYPE_SKILSS
                        ),
                        "skill"
                      )}
                    </div>
                  </div>
                  <hr />
                  <h6>Domains:</h6>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.domains
                      })}
                      placeholder="Domains"
                      name="domains"
                      value={this.state.domains || ""}
                      // onChange={this.onChange.bind(this)}
                      onChange={this.onChange}
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        height: "251px"
                      }}
                    />
                    {errors.domains && (
                      <div className="invalid-feedback">{errors.domains}</div>
                    )}
                  </div>
                  <div className="col-12 text-right">
                    <Link
                      to={`/editcv/${id}`}
                      onClick={this.updateProfile.bind(this)}
                      className=""
                      style={
                        this.state.domains ? null : { pointerEvents: "none" }
                      }
                    >
                      <i
                        className="fas fa-plus-circle"
                        style={this.state.domains ? null : { color: "#dddddd" }}
                      >
                        {" "}
                        Save
                      </i>
                    </Link>
                  </div>

                  <h6>Certifications:</h6>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.certifications
                      })}
                      placeholder="Certifications"
                      name="certifications"
                      value={this.state.certifications || ""}
                      // onChange={this.onChange.bind(this)}
                      onChange={this.onChange}
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        height: "251px"
                      }}
                    />
                    {errors.certifications && (
                      <div className="invalid-feedback">
                        {errors.certifications}
                      </div>
                    )}
                  </div>

                  <div className="col-12 text-right">
                    <Link
                      to={`/editcv/${id}`}
                      onClick={this.updateProfile.bind(this)}
                      className=""
                      style={
                        this.state.certifications
                          ? null
                          : { pointerEvents: "none" }
                      }
                    >
                      <i
                        className="fas fa-plus-circle"
                        style={
                          this.state.certifications
                            ? null
                            : { color: "#dddddd" }
                        }
                      >
                        {" "}
                        Save
                      </i>
                    </Link>
                  </div>

                  <h6>Tools:</h6>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.tools
                      })}
                      placeholder="Tools"
                      name="tools"
                      value={this.state.tools || ""}
                      // onChange={this.onChange.bind(this)}
                      onChange={this.onChange}
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        height: "251px"
                      }}
                    />
                    {errors.tools && (
                      <div className="invalid-feedback">{errors.tools}</div>
                    )}
                  </div>
                  <div className="col-12 text-right">
                    <Link
                      to={`/editcv/${id}`}
                      onClick={this.updateProfile.bind(this)}
                      className=""
                      style={
                        this.state.tools ? null : { pointerEvents: "none" }
                      }
                    >
                      <i
                        className="fas fa-plus-circle"
                        style={this.state.tools ? null : { color: "#dddddd" }}
                      >
                        {" "}
                        Save
                      </i>
                    </Link>
                  </div>

                  <h6>Trainings:</h6>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.trainings
                      })}
                      placeholder="Trainings"
                      name="trainings"
                      value={this.state.trainings || ""}
                      // onChange={this.onChange.bind(this)}
                      onChange={this.onChange}
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        height: "251px"
                      }}
                    />
                    {errors.trainings && (
                      <div className="invalid-feedback">{errors.trainings}</div>
                    )}
                  </div>
                  <div className="col-12 text-right">
                    <Link
                      to={`/editcv/${id}`}
                      onClick={this.updateProfile.bind(this)}
                      className=""
                      style={
                        this.state.trainings ? null : { pointerEvents: "none" }
                      }
                    >
                      <i
                        className="fas fa-plus-circle"
                        style={
                          this.state.trainings ? null : { color: "#dddddd" }
                        }
                      >
                        {" "}
                        Save
                      </i>
                    </Link>
                  </div>

                  <h6>Methodologies:</h6>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.methodologies
                      })}
                      placeholder="Methodologies"
                      name="methodologies"
                      value={this.state.methodologies || ""}
                      // onChange={this.onChange.bind(this)}
                      onChange={this.onChange}
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        height: "251px"
                      }}
                    />
                    {errors.methodologies && (
                      <div className="invalid-feedback">
                        {errors.methodologies}
                      </div>
                    )}
                  </div>
                  <div className="col-12 text-right">
                    <Link
                      to={`/editcv/${id}`}
                      onClick={this.updateProfile.bind(this)}
                      className=""
                      style={
                        this.state.methodologies
                          ? null
                          : { pointerEvents: "none" }
                      }
                    >
                      <i
                        className="fas fa-plus-circle"
                        style={
                          this.state.methodologies ? null : { color: "#dddddd" }
                        }
                      >
                        {" "}
                        Save
                      </i>
                    </Link>
                  </div>

                  <h6>Others:</h6>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.others
                      })}
                      placeholder="Others"
                      name="others"
                      value={this.state.others || ""}
                      // onChange={this.onChange.bind(this)}
                      onChange={this.onChange}
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        height: "251px"
                      }}
                    />
                    {errors.others && (
                      <div className="invalid-feedback">{errors.others}</div>
                    )}
                  </div>
                  <div className="col-12 text-right">
                    <Link
                      to={`/editcv/${id}`}
                      onClick={this.updateProfile.bind(this)}
                      className=""
                      style={
                        this.state.others ? null : { pointerEvents: "none" }
                      }
                    >
                      <i
                        className="fas fa-plus-circle"
                        style={this.state.others ? null : { color: "#dddddd" }}
                      >
                        {" "}
                        Save
                      </i>
                    </Link>
                  </div>
                  <hr />
                  <h6>Education - Languages:</h6>
                  <div className="card">
                    <div className="card-body">
                      <div className="col-12 text-right">
                        <Link
                          to={`/addProfileTask/${id}/${"educ"}`}
                          className=""
                          style={
                            this.state.typeProfile !== "Select" &&
                            this.state.faseProfile === 1
                              ? null
                              : { pointerEvents: "none" }
                          }
                        >
                          <i
                            className="fas fa-plus-circle"
                            style={
                              this.state.typeProfile !== "Select" &&
                              this.state.faseProfile === 1
                                ? null
                                : { color: "#dddddd" }
                            }
                          >
                            {" "}
                            Add Educations
                          </i>
                        </Link>
                      </div>
                      {boardAlgorithm(
                        errors,
                        profile_tasks.filter(
                          profile_tasks =>
                            profile_tasks.taskType === TASK_TYPE_EDUC
                        ),
                        "educ"
                      )}
                    </div>
                    <div className="card-body">
                      <div className="col-12 text-right">
                        <Link
                          to={`/addProfileTask/${id}/${"lang"}`}
                          className=""
                          style={
                            this.state.typeProfile !== "Select" &&
                            this.state.faseProfile === 1
                              ? null
                              : { pointerEvents: "none" }
                          }
                        >
                          <i
                            className="fas fa-plus-circle"
                            style={
                              this.state.typeProfile !== "Select" &&
                              this.state.faseProfile === 1
                                ? null
                                : { color: "#dddddd" }
                            }
                          >
                            {" "}
                            Add Languages
                          </i>
                        </Link>
                      </div>
                      {boardAlgorithm(
                        errors,
                        profile_tasks.filter(
                          profile_tasks =>
                            profile_tasks.taskType === TASK_TYPE_LANG
                        ),
                        "lang"
                      )}
                    </div>
                  </div>
                  <hr />
                  <h6>Projects:</h6>
                  <div className="card">
                    <div className="card-body">
                      <div className="col-12 text-right">
                        <Link
                          to={`/addProfileTask/${id}/${"cliPrj"}`}
                          className=""
                          style={
                            this.state.typeProfile !== "Select" &&
                            this.state.faseProfile === 1
                              ? null
                              : { pointerEvents: "none" }
                          }
                        >
                          <i
                            className="fas fa-plus-circle"
                            style={
                              this.state.typeProfile !== "Select" &&
                              this.state.faseProfile === 1
                                ? null
                                : { color: "#dddddd" }
                            }
                          >
                            {" "}
                            Add Client/Projects
                          </i>
                        </Link>
                      </div>
                      {boardAlgorithm(
                        errors,
                        profile_tasks.filter(
                          profile_tasks =>
                            profile_tasks.taskType === TASK_TYPE_CLI_PRJ
                        ),
                        "cliPrj"
                      )}
                    </div>
                  </div>

                  <hr />
                  {errors.technologyArea && (
                    <div
                      style={{
                        width: "100%",
                        marginTop: ".25rem",
                        fontSize: "80%",
                        color: "#dc3545"
                      }}
                    >
                      {"Please Check the fields above:"}
                    </div>
                  )}
                  <input
                    // style={{
                    //   position: "absolute",
                    //   right: "0",
                    //   bottom: "0"
                    // }}
                    onClick={this._handleButtonClick}
                    type="submit"
                    value="Save"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CVBoard.propTypes = {
  profileBacklog: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getProfileByLink: PropTypes.func.isRequired,
  updateCV: PropTypes.func.isRequired,
  getProfileBacklog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  profileBacklog: state.profileBacklog,
  errors: state.errors,
  //profileBacklog: state.profile.profileBacklog,
  getProfileByLink: state.getProfileByLink,
  getProfileBacklog: state.getProfileBacklog
});

export default connect(
  mapStateToProps,
  { getProfileByLink, updateCV, getProfileBacklog }
)(requireAuth(CVBoard));
