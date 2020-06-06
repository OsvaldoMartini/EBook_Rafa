import React, { Component } from "react";
import { getProfile, createProfile } from "../../actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import requireAuth from "../hocs/requireAuth";

class UpdateProfile extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      fullName: "",
      candidateEmail: "",
      profileIdentifier: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    const {
      id,
      fullName,
      candidateEmail,
      profileIdentifier
    } = nextProps.profile;

    this.setState({
      id,
      fullName,
      candidateEmail,
      profileIdentifier
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProfile(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateProfile = {
      id: this.state.id,
      fullName: this.state.fullName,
      candidateEmail: this.state.candidateEmail,
      profileIdentifier: this.state.profileIdentifier
    };

    this.props.createProfile(updateProfile, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/profiles" className="btn btn-light">
                Back to Profiles
              </Link>
              <h5 className="display-4 text-center">
                Generates the Candidate Link
              </h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.fullName
                    })}
                    placeholder="Full Name"
                    name="fullName"
                    onChange={this.onChange}
                    value={this.state.fullName}
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Candidate e-mail"
                    name="candidateEmail"
                    onChange={this.onChange}
                    value={this.state.candidateEmail}
                    disabled
                  />
                </div>
                <input
                  type="submit"
                  value={
                    this.state.token
                      ? "The Token was genarated already"
                      : "Gen Token"
                  }
                  className="btn btn-primary btn-block mt-4"
                  style={
                    this.state.token
                      ? {
                          color: "#dddddd",
                          pointerEvents: "none"
                        }
                      : null
                  }
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProfile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProfile, createProfile }
)(requireAuth(UpdateProfile));
