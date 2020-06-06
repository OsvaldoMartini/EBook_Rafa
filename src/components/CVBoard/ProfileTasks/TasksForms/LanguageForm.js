import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  addProfileTask,
  updateProfileTask
} from "../../../../actions/profileBacklogActions";

class LanguagesForm extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      title: "",
      profileSequence: "",
      profileIdentifier: "",
      levelLanguage: "",
      language: "",
      create_At: "",
      profile: {},
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.typeForm === "Add") {
      const newTask = {
        ...this.props,
        //profileStaged: action.payload
        profile: {
          ...this.props.profile,
          levelLanguage: this.state.levelLanguage,
          language: this.state.language,
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
        levelLanguage: this.state.levelLanguage,
        language: this.state.language
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
              <h4 className="display-4 text-center">{typeForm} Language</h4>
              <div className="lead text-center">
                <hr />
                {this.props.profile.profileSequence && (
                  <span>
                    Language ID: {this.props.profile.profileSequence}{" "}
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
                      "is-invalid": errors.language
                    })}
                    name="language"
                    placeholder="Language"
                    value={this.state.language}
                    onChange={this.onChange}
                  />
                  {errors.language && (
                    <div className="invalid-feedback">{errors.language}</div>
                  )}
                </div>
                <div className="form-group">
                  <h6>Qualification Awarded :</h6>
                  <select
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.levelLanguage
                    })}
                    name="levelLanguage"
                    value={this.state.levelLanguage}
                    onChange={this.onChange}
                  >
                    <option value="">Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Medium">Medium</option>
                    <option value="Fluent">Fluent</option>
                    <option value="Mother Tongue">Mother Tongue</option>
                  </select>
                  {errors.levelLanguage && (
                    <div
                      style={{
                        width: "100%",
                        marginTop: ".25rem",
                        fontSize: "80%",
                        color: "#dc3545"
                      }}
                    >
                      {errors.levelLanguage}
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

LanguagesForm.propTypes = {
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
)(LanguagesForm);
