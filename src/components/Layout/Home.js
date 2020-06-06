import React from "react";

const Home = () => {
  return (
    <div className="landing">
      <div className="light-overlay landing-inner text-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
			  {/* <h1 className="display-3 mb-4">CV Creator</h1> */}
        {/* <p className="lead">Create your CV</p> */}
			  <h1 className="display-3 mb-4">
                Automation Tests Projects Management Tool
              </h1>
              <p className="lead">
                Create your account to join active projects / automation tests or start
                your own
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
