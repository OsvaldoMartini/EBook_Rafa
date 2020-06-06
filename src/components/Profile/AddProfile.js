import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profileActions";
import classnames from "classnames";
import requireAuth from "../hocs/requireAuth";

class AddProfile extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      candidateEmail: "",
      profileIdentifier: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const newProfile = {
      fullName: this.state.fullName,
      candidateEmail: this.state.candidateEmail
    };

    this.props.createProfile(newProfile, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register New Candidate</h1>
              <p className="lead text-center">Create a Profile</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.fullName
                    })}
                    placeholder="Full Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.onChange}
                    autoFocus={true}
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.candidateEmail
                    })}
                    placeholder="Email Address (Candidate Email)"
                    name="candidateEmail"
                    value={this.state.candidateEmail}
                    onChange={this.onChange}
                  />
                  {errors.candidateEmail && (
                    <div className="invalid-feedback">
                      {errors.candidateEmail}
                    </div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Constraint
AddProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(requireAuth(AddProfile));
