import React from "react";
import { Link } from "react-router-dom";

const DeleteTaskButton = profile_backlog_id => {
  return (
    <React.Fragment>
      <Link
        to={`/editcv/${profile_backlog_id}`}
        className="btn btn-danger ml-4"
      >
        Delete
      </Link>
    </React.Fragment>
  );
};

export default DeleteTaskButton;
