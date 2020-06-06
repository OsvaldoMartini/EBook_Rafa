import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NumericInput from "react-numeric-input";
import {
  addProfileTask,
  updateProfileTask
} from "../../../../actions/profileBacklogActions";

class EducationForm extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      title: "",
      profileSequence: "",
      profileIdentifier: "",
      educYear: "",
      educAwarded: "",
      educOrganization: "",
      create_At: "",
      profile: {},
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }

  //   const {
  //     id,
  //     profileSequence,
  //     profileIdentifier,
  //     title,
  //     summary,
  //     educYear,
  //     educAwarded,
  //     educOrganization,
  //     create_At
  //   } = nextProps.profile_task;

  //   this.setState({
  //     id,
  //     profileSequence,
  //     profileIdentifier,
  //     title,
  //     educYear,
  //     educAwarded,
  //     educOrganization,
  //     create_At
  //   });
  // }

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
          educYear: this.state.educYear,
          educAwarded: this.state.educAwarded,
          educOrganization: this.state.educOrganization,
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
        educYear: this.state.educYear,
        educAwarded: this.state.educAwarded,
        educOrganization: this.state.educOrganization
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

  render() {
    const { errors, typeForm } = this.props;

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
              <h4 className="display-4 text-center">{typeForm} Education</h4>
              <div className="lead text-center">
                <hr />
                {this.props.profile.profileSequence && (
                  <span>
                    Education ID: {this.props.profile.profileSequence}{" "}
                  </span>
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
                <h6>Organization:</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.educOrganization
                    })}
                    name="educOrganization"
                    placeholder="Organization"
                    value={this.state.educOrganization}
                    onChange={this.onChange}
                  />
                  {errors.educOrganization && (
                    <div className="invalid-feedback">
                      {errors.educOrganization}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <h6>Qualification Awarded :</h6>
                  <select
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.educAwarded
                    })}
                    name="educAwarded"
                    value={this.state.educAwarded}
                    onChange={this.onChange}
                  >
                    <option value="">Awarded</option>
                    <option value="Diplom">Diplom</option>
                    <option value="Bsc">Bsc</option>
                    <option value="Msc">Msc</option>
                    <option value="Mag">Mag</option>
                    <option value="Dipl.Ing">Dipl.Ing</option>
                    <option value="Phd">Phd</option>
                    <option value="Dr">Dr</option>
                  </select>
                  {errors.educAwarded && (
                    <div
                      style={{
                        width: "100%",
                        marginTop: ".25rem",
                        fontSize: "80%",
                        color: "#dc3545"
                      }}
                    >
                      {errors.educAwarded}
                    </div>
                  )}
                </div>
                <h6>Year Concluded:</h6>
                <NumericInput
                  mobile
                  min={1900}
                  max={new Date().getFullYear()}
                  className="form-control"
                  name="educYear"
                  onChange={this.onChangeText}
                  value={this.state.educYear}
                />
                {errors.educYear && (
                  <div
                    style={{
                      width: "100%",
                      marginTop: ".25rem",
                      fontSize: "80%",
                      color: "#dc3545"
                    }}
                  >
                    {errors.educYear}
                  </div>
                )}
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

EducationForm.propTypes = {
  addProfileTask: PropTypes.func.isRequired,
  updateProfileTask: PropTypes.func.isRequired,
  title: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  title: state.title,
  profile: state.profile.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addProfileTask, updateProfileTask }
)(EducationForm);
