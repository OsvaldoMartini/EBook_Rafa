import axios from "axios";
import {
  GET_ERRORS,
  GET_PROFILE_BACKLOG,
  GET_PROFILE_TASK,
  DELETE_PROFILE_TASK
} from "./types";

//Fix bug with priority in Spring Boot Server, needs to check null first
export const addProfileTask = (
  profile_backlog_id,
  profile_task,
  history
) => async dispatch => {
  try {
    await axios.post(`/api/cvbacklog/${profile_backlog_id}`, profile_task);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    history.push(`/editcv/${profile_backlog_id}`);
  } catch (err) {
    if (err.response.data.tokenMessage || err.response.data.profileNotfound) {
      history.push(`/infoPage/${profile_backlog_id}`);
    }
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProfileBacklog = (
  profile_backlog_id,
  history
) => async dispatch => {
  try {
    const res = await axios.get(`/api/cvbacklog/${profile_backlog_id}`);
    dispatch({
      type: GET_PROFILE_BACKLOG,
      payload: res.data
    });
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    if (err.response && err.response.data){
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }else{
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    }
  }
};

export const getProfileTask = (
  profile_backlog_id,
  pt_id,
  history
) => async dispatch => {
  try {
    const res = await axios.get(
      `/api/cvbacklog/${profile_backlog_id}/${pt_id}`
    );
    dispatch({
      type: GET_PROFILE_TASK,
      payload: res.data
    });
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const updateProfileTask = (
  profile_backlog_id,
  pt_id,
  profile_task,
  history
) => async dispatch => {
  try {
    await axios.patch(
      `/api/cvbacklog/${profile_backlog_id}/${pt_id}`,
      profile_task
    );
    dispatch({
      type: GET_PROFILE_TASK,
      payload: {}
    });
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    history.push(`/editcv/${profile_backlog_id}`);
  } catch (err) {
    if (err.response && err.response.data){
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }else{
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    }
    
  }
};

export const deleteProfileTask = (
  profile_backlog_id,
  pt_id
) => async dispatch => {
  if (
    window.confirm(
      `You are deleting profile task ${pt_id}, this action cannot be undone`
    )
  ) {
    await axios.delete(`/api/cvbacklog/${profile_backlog_id}/${pt_id}`);
    dispatch({
      type: DELETE_PROFILE_TASK,
      payload: pt_id
    });
  }
};
