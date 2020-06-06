import React from "react";
import { Link } from "react-router-dom";

const SaveTaskButton = (id, field) => {
  return (
    <React.Fragment>
      <Link
        to={`/editcv/${id}`}
        //onClick={this.props.updateProfile.bind(this)}
        className=""
        style={field ? null : { pointerEvents: "none" }}
      >
        <i
          className="fas fa-plus-circle"
          style={field ? null : { color: "#dddddd" }}
        >
          {" "}
          Save
        </i>
      </Link>
    </React.Fragment>
  );
};

export default SaveTaskButton;
