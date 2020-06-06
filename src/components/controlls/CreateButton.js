import React from "react";
import { Link } from "react-router-dom";

class CreateButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to={this.props.link} className={this.props.cssClass}>
          {this.props.caption}
        </Link>
      </React.Fragment>
    );
  }
}

export default CreateButton;
