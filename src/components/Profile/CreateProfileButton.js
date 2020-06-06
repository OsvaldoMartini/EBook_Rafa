import React from "react";
import { Link } from "react-router-dom";

const CreateProfileButton = () => {
  return (
    <React.Fragment>
      <Link to="/addProfile" className="btn btn-lg btn-info">
        Create a Profile
      </Link>
    </React.Fragment>
  );
};

export default CreateProfileButton;
