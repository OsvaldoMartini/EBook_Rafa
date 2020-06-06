import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProfile } from "../../actions/profileActions";

class ProfileItem extends Component {
  onDeleteClick = id => {
    this.props.deleteProfile(id);
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.security != this.state.security) {
  //     this.setState({ security: nextProps.security });
  //   } else {
  //     alert("ddd");
  //   }
  // }

  render() {
    const { profile } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{profile.fullName}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{profile.fullName}</h3>
              <p>{profile.candidateEmail}</p>
            </div>
            <div>
              <ul className="list-group">
                <Link
                  to={`/editcv/${profile.profileIdentifier}`}
                  style={profile.token ? null : { pointerEvents: "none" }}
                >
                  <li className="list-group-item board">
                    <i
                      className="fa fa-flag-checkered pr-1"
                      style={profile.token ? null : { color: "#dddddd" }}
                    >
                      {" "}
                      Open CV
                    </i>
                  </li>
                </Link>
                {this.props.security.admin && (
                  <Link
                    to={`/updateProfile/${profile.profileIdentifier}`}
                    style={profile.token ? { pointerEvents: "none" } : null}
                  >
                    <li className="list-group-item update">
                      <i
                        className="fa fa-edit pr-1"
                        style={profile.token ? { color: "#dddddd" } : null}
                      >
                        {" "}
                        Token
                      </i>
                    </li>
                  </Link>
                )}
                {/* <Link to={`/updateProfile/${profile.profileIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1"> Token</i>
                  </li>
                </Link> */}

                <li
                  className="list-group-item delete"
                  onClick={this.onDeleteClick.bind(
                    this,
                    profile.profileIdentifier
                  )}
                >
                  <i className="fa fa-minus-circle pr-1"> Delete</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  deleteProfile: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(
  mapStateToProps,
  { deleteProfile }
)(ProfileItem);
