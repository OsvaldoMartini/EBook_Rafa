import React, { Component } from "react";
import ProfileItem from "./ProfileItem";
import CreateButton from "../controlls/CreateButton";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profileActions";
import PropTypes from "prop-types";

class AllProfiles extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.getProfiles();
    } else {
      this.props.history.push(`/`);
    }
  }

  render() {
    const { profiles } = this.props.profile;

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Profiles CV/Resume</h1>
              <br />
              <CreateButton
                link="/addProfile"
                caption="Create a Profile"
                cssClass="btn btn-lg btn-info"
              />
              <br />
              <hr />
              {profiles.map(profile => (
                <ProfileItem key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AllProfiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  security: state.security
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(AllProfiles);
