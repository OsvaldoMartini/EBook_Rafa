import React, { Component } from "react";
import ProfileTask from "./ProfileTasks/ProfileTask";

class CVBacklog extends Component {
  render() {
    const { profile_tasks_prop, task_type_prop } = this.props;

    const tasks = profile_tasks_prop.map(profile_task => (
      <ProfileTask key={profile_task.id} profile_task={profile_task} />
    ));

    let listTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.profile_task.taskType === task_type_prop) {
        listTasks.push(tasks[i]);
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card text-center mb-2">
              {/* <div className="card-header bg-secondary text-white">
                <div>Years of experiences</div>
              </div> */}
            </div>
            {listTasks}
            {
              // insert tasks here
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CVBacklog;
