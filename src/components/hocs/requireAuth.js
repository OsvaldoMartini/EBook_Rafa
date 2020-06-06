import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      // In Case to Have any Id
      // Return to the Caller
      const { id } = this.props.match.params || false;
      if (id) {
        return <ChildComponent {...this.props} />;
      }

      const { validToken } = this.props.security || false;
      switch (validToken) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading... </div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = state => ({
    security: state.security
  });

  // We are recording the user's authentication status on the auth piece of state
  return connect(mapStateToProps)(RequireAuth);
};
