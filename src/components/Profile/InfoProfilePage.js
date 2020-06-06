import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class InfoProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;

    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Automation Tests Management</h1>
                <hr />
                <div className="alert alert-info text-center" role="alert">
                  The Link {id} is Inactive
                </div>
                <hr />
                {errors.candidateEmail && (
                  <div
                    style={{
                      width: "100%",
                      marginTop: ".25rem",
                      fontSize: "80%",
                      color: "#dc3545"
                    }}
                  >
                    {errors.candidateEmail}
                    <hr />
                  </div>
                )}
                {errors.tokenMessage && (
                  <div
                    style={{
                      width: "100%",
                      marginTop: ".25rem",
                      fontSize: "80%",
                      color: "#dc3545"
                    }}
                  >
                    {errors.tokenMessage}
                    <hr />
                  </div>
                )}
                {errors.profileNotfound && (
                  <div
                    style={{
                      width: "100%",
                      marginTop: ".25rem",
                      fontSize: "80%",
                      color: "#dc3545"
                    }}
                  >
                    {errors.profileNotfound}
                    <hr />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

InfoProfilePage.propTypes = {
  //security: PropTypes.object.isRequired
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  //security: state.security
  errors: state.errors
});

export default connect(mapStateToProps)(InfoProfilePage);
