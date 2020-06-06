import {
  GET_PROFILES,
  GET_PROFILE,
  DELETE_PROFILE,
  SET_PROFILE_STAGED
} from "../actions/types";

const initialState = {
  profiles: [],
  profile: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload
      };

    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };

    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          profile => profile.profileIdentifier !== action.payload
        )
      };

    case SET_PROFILE_STAGED:
      console.log(action.payload);

      return {
        ...state,
        //profileStaged: action.payload
        profile: {
          ...state.profile,
          summary: action.payload.summary,
          typeProfile: action.payload.typeProfile
    	  //technologyArea: action.payload.technologyArea
        }
      };
    default:
      return state;
  }
}
