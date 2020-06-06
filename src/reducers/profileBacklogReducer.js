import {
  GET_PROFILE_BACKLOG,
  GET_PROFILE_TASK,
  DELETE_PROFILE_TASK
} from "../actions/types";

const initialState = {
  profile_tasks: [],
  profile_task: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_BACKLOG:
      return {
        ...state,
        profile_tasks: action.payload
      };

    case GET_PROFILE_TASK:
      return {
        ...state,
        profile_task: action.payload
      };

    case DELETE_PROFILE_TASK:
      return {
        ...state,
        profile_tasks: state.profile_tasks.filter(
          profile_task => profile_task.profileSequence !== action.payload
        )
      };

    default:
      return state;
  }
}
