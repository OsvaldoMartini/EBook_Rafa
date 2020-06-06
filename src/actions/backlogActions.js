import axios from 'axios';
import {
  GET_ERRORS,
  GET_BACKLOG_PROJECT_TASK,
  GET_BACKLOG_AUTOMATION_TASK,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  GET_AUTOMATION_TASK,
  DELETE_AUTOMATION_TASK,
  DISPUTE_AUTOMATION_TASK,
  DISPUTE_ALL_TASKS,
  GET_AUTOMATION_ALL_OPERATIONS,
  GET_AUTOMATION_BY_OPERATIONS,
  GET_LAST_REQUESTS_BY_OPERATIONS,
  GET_LAST_RESPONSES_BY_OPERATIONS,
  UPDATE_STATUS_RSOCKET,
} from './types';

export const getBacklogProjectTask = (backlog_id) => async (
  dispatch,
) => {
  try {
    const res = await axios.get(
      `/api/backlog/projectTask/${backlog_id}`,
    );
    dispatch({
      type: GET_BACKLOG_PROJECT_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

//Fix bug with priority in Spring Boot Server, needs to check null first
export const addProjectTask = (
  backlog_id,
  project_task,
  history,
) => async (dispatch) => {
  try {
    await axios.post(
      `/api/backlog/projectTask/${backlog_id}`,
      project_task,
    );
    history.push(`/projectBoard/${backlog_id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProjectTask = (backlog_id, pt_id, history) => async (
  dispatch,
) => {
  try {
    const res = await axios.get(
      `/api/backlog/projectTask/${backlog_id}/${pt_id}`,
    );
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data,
    });
  } catch (err) {
    history.push('/dashboard');
  }
};

export const updateProjectTask = (
  backlog_id,
  pt_id,
  project_task,
  history,
) => async (dispatch) => {
  try {
    await axios.patch(
      `/api/backlog/projectTask/${backlog_id}/${pt_id}`,
      project_task,
    );
    history.push(`/projectBoard/${backlog_id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const deleteProjectTask = (backlog_id, pt_id) => async (
  dispatch,
) => {
  if (
    window.confirm(
      `You are deleting project task ${pt_id}, this action cannot be undone`,
    )
  ) {
    await axios.delete(
      `/api/backlog/projectTask/${backlog_id}/${pt_id}`,
    );
    dispatch({
      type: DELETE_PROJECT_TASK,
      payload: pt_id,
    });
  }
};

export const getAllOperationByBackLog = (backlog_id) => async (
  dispatch,
) => {
  try {
    const res = await axios.get(`/api/operations/${backlog_id}`);
    dispatch({
      type: GET_AUTOMATION_ALL_OPERATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    if (err.response && err.response.data) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    }
  }
};

export const getAutomationTaskByOperation = (
  backlog_id,
  operationName,
) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/operations/testCasesByOperation/${backlog_id}/${operationName}`,
    );
    if (res.data) {
      dispatch({
        type: GET_AUTOMATION_BY_OPERATIONS,
        payload: res.data,
      });
    } else {
      res.data = [];
      dispatch({
        type: GET_AUTOMATION_BY_OPERATIONS,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
    if (err.response && err.response.data) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    }
  }
};

export const getBacklogAutomationTask = (backlog_id) => async (
  dispatch,
) => {
  try {
    const res = await axios.get(
      `/api/backlog/automationTask/${backlog_id}`,
    );
    dispatch({
      type: GET_BACKLOG_AUTOMATION_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

//Fix bug with priority in Spring Boot Server, needs to check null first
export const addAutomationTask = (
  backlog_id,
  automation_task,
  history,
) => async (dispatch) => {
  try {
    await axios.post(
      `/api/backlog/automationTask/${backlog_id}`,
      automation_task,
    );
    history.push(`/automationBoard/${backlog_id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getAutomationTask = (
  backlog_id,
  pt_id,
  history,
) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/backlog/automationTask/${backlog_id}/${pt_id}`,
    );
    dispatch({
      type: GET_AUTOMATION_TASK,
      payload: res.data,
    });
  } catch (err) {
    history.push('/dashboard');
  }
};

export const updateAutomationTask = (
  backlog_id,
  pt_id,
  automation_task,
  history,
) => async (dispatch) => {
  try {
    await axios.patch(
      `/api/backlog/automationTask/${backlog_id}/${pt_id}`,
      automation_task,
    );
    history.push(`/automationBoard/${backlog_id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const deleteAutomationTask = (backlog_id, pt_id) => async (
  dispatch,
) => {
  if (
    window.confirm(
      `You are deleting automation task ${pt_id}, this action cannot be undone`,
    )
  ) {
    await axios.delete(
      `/api/backlog/automationTask/${backlog_id}/${pt_id}`,
    );
    dispatch({
      type: DELETE_AUTOMATION_TASK,
      payload: pt_id,
    });
  }
};

export const disputeAutomationTask = (
  backlog_id,
  pt_id,
  operation_name,
  tokenTag,
  fieldName,
  valueResponse,
) => async (dispatch) => {
  // if (
  //   window.confirm(
  //     `You are deleting automation task ${pt_id}, this action cannot be undone`
  //   )
  // ) {

  const disputeObj = {};
  let axiosConfig = {
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
    },
  };
  disputeObj[
    `#ExpectedToken#.${tokenTag}`
  ] = `${fieldName}.${valueResponse}`;

  await axios
    .post(
      `/v1/gathering/${operation_name}?executeDataBinarioTask=false`,
      JSON.stringify(disputeObj),
      axiosConfig,
    )
    .then((res) => console.log(res))
    .catch((err) => console.log('Login: ', err));

  await axios.get(
    `/api/backlog/disputeAutomationTask/${backlog_id}/${pt_id}`,
  );

  dispatch({
    type: DISPUTE_AUTOMATION_TASK,
    payload: pt_id,
  });

  // }
};

export const disputeAll_Tasks = (
  backlog_id,
  projectSequence,
  operation_name,
  objToDispute,
) => async (dispatch) => {
  let axiosConfig = {
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
    },
  };

  let res;
  let objDisputeAll = {};
  let prjSeqToUpdate = [];

  if (!objToDispute) {
    try {
      res = await axios.get(
        `/api/backlog/mountAllDispute/${backlog_id}/${operation_name}`,
      );

      if (res.data && res.data.length > 0) {
        res.data.forEach((item, i) => {
          let values = item.split(',');
          prjSeqToUpdate[i] = values[0];
          objDisputeAll[
            `#ExpectedToken#.${values[1]}`
          ] = `${values[2]}.${values[3]}`;
        });
      }
      // dispatch({
      //   type: DISPUTE_ALL_TASKS,
      //   payload: res.data,
      // });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  } else {
    objDisputeAll = objToDispute;
    if (projectSequence) {
      prjSeqToUpdate[0] = projectSequence;
    }
  }

  if (
    window.confirm(
      `You are Dispting All ${
        (objDisputeAll && objDisputeAll.length) || 0
      } results, this action cannot be undone`,
    )
  ) {
    res = await axios
      .post(
        `/v1/gathering/${operation_name}?executeDataBinarioTask=false&disputeAll=true`,
        JSON.stringify(objDisputeAll),
        axiosConfig,
      )
      .then((res) => console.log(res))
      .catch((err) => console.log('gathering: ', err));

    // // Updates the
    // await axios.get(
    //   `/api/backlog/disputeExpectedValue/${backlog_id}`,
    // );

    if (prjSeqToUpdate && prjSeqToUpdate.length > 0) {
      res = await axios
        .post(
          `/api/backlog/disputeExpectedValue/${backlog_id}`,
          JSON.stringify(prjSeqToUpdate),
          axiosConfig,
        )
        .then((res) => console.log(res))
        .catch((err) => console.log('disputeExpectedValue: ', err));
    }
  }
};

// export const resetExpectedField = (
//   operation_name,
//   expectedObject,
// ) => async (dispatch) => {
//   // if (
//   //   window.confirm(
//   //     `You are deleting automation task ${pt_id}, this action cannot be undone`
//   //   )
//   // ) {

//   let axiosConfig = {
//     headers: {
//       //'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Type': 'application/json; charset=UTF-8',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Headers': 'Content-Type',
//       'Access-Control-Allow-Methods': 'POST',
//     },
//   };

//   // Format
//   // expectedObject[`#ExpectedToken#.${tokenTag}`] = `${fieldName}.${valueResponse}`;
//   // This It Create and Calls RabbitMQ Tasks
//   await axios
//     .post(
//       `/v1/gathering/${operation_name}?executeDataBinarioTask=false&disputeAll=true`,
//       JSON.stringify(expectedObject),
//       axiosConfig,
//     )
//     .then((res) => console.log(res))
//     .catch((err) => console.log('Login: ', err));
//   // }
// };

export const updateRSocketAutomationTask = (data) => async (
  dispatch,
) => {
  dispatch({
    type: UPDATE_STATUS_RSOCKET,
    payload: data,
  });
};

export const getLastRequestsExecByOper = (
  backlog_id,
  operationName,
) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/operations/lastRequestsExec/${backlog_id}/${operationName}`,
    );
    if (res.data) {
      dispatch({
        type: GET_LAST_REQUESTS_BY_OPERATIONS,
        payload: res.data,
      });
    } else {
      res.data = [];
      dispatch({
        type: GET_LAST_REQUESTS_BY_OPERATIONS,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
    if (err.response && err.response.data) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    }
  }
};

export const getLastResponsesExecByOper = (
  backlog_id,
  operationName,
) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/operations/lastResponsesExec/${backlog_id}/${operationName}`,
    );
    if (res.data) {
      dispatch({
        type: GET_LAST_RESPONSES_BY_OPERATIONS,
        payload: res.data,
      });
    } else {
      res.data = [];
      dispatch({
        type: GET_LAST_RESPONSES_BY_OPERATIONS,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
    if (err.response && err.response.data) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    }
  }
};
