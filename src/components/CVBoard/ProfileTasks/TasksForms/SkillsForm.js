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

class SkillsForm extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      title: "",
      profileSequence: "",
      profileIdentifier: "",
      skillYears: "",
      skillCompetence: "",
      create_At: "",
      profile: {},
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeText(value) {
    // if (/^\d+$/.test(e.toString())) {
    //   this.setState({ skillYears: e });
    // }
    if (value) {
      if (!/^[0-9]+$/.test(value.toString())) {
        this.setState({ skillYears: "" });
      } else {
        this.setState({ skillYears: value.toString() });
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.typeForm === "Add") {
      const newTask = {
        ...this.props,
        //profileStaged: action.payload
        profile: {
          ...this.props.profile,
          skillYears: this.state.skillYears,
          skillCompetence: this.state.skillCompetence,
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
        skillYears: this.state.skillYears,
        skillCompetence: this.state.skillCompetence
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
              <h4 className="display-4 text-center">{typeForm} Competences</h4>
              <div className="lead text-center">
                <hr />
                {this.props.profile.profileSequence && (
                  <span>
                    Competence ID: {this.props.profile.profileSequence}{" "}
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
                <div className="form-group">
                  <h6>Compentence:</h6>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.skillCompetence
                    })}
                    name="skillCompetence"
                    placeholder="Competences"
                    value={this.state.skillCompetence}
                    onChange={this.onChange}
                  />
                  {errors.skillCompetence && (
                    <div className="invalid-feedback">
                      {errors.skillCompetence}
                    </div>
                  )}
                </div>

                <h6>Years:</h6>
                <NumericInput
                  mobile
                  min={1}
                  max={50}
                  className="form-control"
                  name="skillYears"
                  onChange={this.onChangeText}
                  value={this.state.skillYears}
                />
                {errors.skillYears && (
                  <div
                    style={{
                      width: "100%",
                      marginTop: ".25rem",
                      fontSize: "80%",
                      color: "#dc3545"
                    }}
                  >
                    {errors.skillYears}
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

SkillsForm.propTypes = {
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
)(SkillsForm);
