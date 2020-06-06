import axios from "axios";
import {
  GET_ERRORS,
  GET_PROFILES,
  GET_PROFILE,
  DELETE_PROFILE,
  SET_PROFILE_STAGED
} from "./types";
import { setJWTTokenCandidate } from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createProfile = (profile, history) => async dispatch => {
  try {
    await axios.post("/api/profile", profile);
    history.push("/profiles");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    history.push(`/infoPage/${profile.profileIdentifier}`);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/all");
    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });

    dispatch({
      type: GET_ERRORS,
      payload: {}
    });

    // const jwtToken = localStorage.jwtToken;
    // if (jwtToken) {
    //   const decoded = jwt_decode(jwtToken);

    //   //dispatch to our securityReducer
    //   dispatch({
    //     type: SET_CURRENT_USER,
    //     payload: decoded
    //   });
    // }
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProfile = (linkCv, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/${linkCv}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    //console.log(err);
    history.push(`/infoPage/${linkCv}`);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProfileByLink = (linkCv, history) => async dispatch => {
  try {
    //const res = await axios.post("/api/users/editcv", linkCv);
    //const res = await axios.post("/api/profile/editcv", linkCv);
    //const res = await axios.get(`/api/profile/editcv/${linkCv}`);
    const res = await axios.get(`/api/editcv/${linkCv}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    const { token } = res.data;

    const jwtToken = localStorage.jwtToken;
    // Only Take Care About Candidate Toke If doenst exist Current User
    if (typeof jwtToken === "undefined" && typeof token !== "undefined") {
      const jwtTokenCv = localStorage.jwtTokenCandidate;

      if (!jwtTokenCv) {
        // set our token in header ***
        setJWTTokenCandidate(token);

        // store the token in the localStorage
        localStorage.setItem("jwtTokenCandidate", token);
      }

      // decode token on React
      const decoded_jwtToken = jwt_decode(token);
      console.log(
        "Expire Remaining:",
        decoded_jwtToken.exp - Date.now() / 1000
      );

      const currentTime = Date.now() / 1000;
      if (decoded_jwtToken.exp < currentTime) {
        window.location.href = "/";
      }
    }

    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    //console.log(err);
    history.push(`/infoPage/${linkCv}`);
    if (typeof err.response === "undefined") {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  }
};

export const updateCV = (profile, history) => async dispatch => {
  try {
    const res = await axios.post("/api/editcv", profile);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    const { profileNotfound } = err;
    console.log(profileNotfound);
    if (err.response.data.tokenMessage || err.response.data.profileNotfound) {
      history.push(`/infoPage/${profile.profileIdentifier}`);
    }
    try {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    } catch (error) {
      console.log(err);
    }
  }
};

export const deleteProfile = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the project and all the data related to it"
    )
  ) {
    await axios.delete(`/api/profile/${id}`);
    dispatch({
      type: DELETE_PROFILE,
      payload: id
    });
  }
};

export const setProfileStaged = profileStaged => async dispatch => {
  dispatch({
    type: SET_PROFILE_STAGED,
    payload: profileStaged
  });
};
