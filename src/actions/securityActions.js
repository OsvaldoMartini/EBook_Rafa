import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import {
  setJWTToken,
  setJWTTokenCandidate
} from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async dispatch => {
  try {
    await axios.post("/api/users/register", newUser);
    const loginRequest = {
      username: newUser.username,
      password: newUser.password
    };
    //history.push("/login");

    dispatch({
      type: SET_CURRENT_USER,
      payload: loginRequest
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

export const login = (LoginRequest, history) => async dispatch => {
  // post => Login Request
  // extract token from res.data
  // store the token in the localstorage
  // set our token in header ***
  // decode token onn React
  // dispatch to our securityReducer

  try {
    // post => Login Request
    const res = await axios.post("/api/users/login", LoginRequest);
    // extract token from res.data
    const { token } = res.data;

    if (token && typeof token !== "undefined") {
      localStorage.removeItem("jwtTokenCandidate");

      // store the token in the localStorage
      localStorage.setItem("jwtToken", token);
      // set our token in header ***
      setJWTToken(token);
      // decode token on React
      const decoded = jwt_decode(token);
      console.log(decoded);

      //dispatch to our securityReducer
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });

      if (decoded.profileIdentifier) {
        // history.push(`/editcv/${decoded.profileIdentifier}`);
        history.push("/dashboard");
      }

      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } else {
      const err = {
        username: "Invalid Username",
        password: "Invalid Password"
      };
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    }
  } catch (err) {
    const { username } = err.response.data;
    if (username) {
      //history.push(`/infoPage/${LoginRequest.username}`);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    } else if (err.message && LoginRequest.username) {
      //err.response.data.push({ message: err.message });
      window.location.href = `/infoPage/${LoginRequest.username}`;
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    } else if (err.message) {
      //err.response.data.push({ message: err.message });
      window.location.href = `/infoPage/${err.message}`;
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    }
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("jwtTokenCandidate");
  setJWTToken(false);
  setJWTTokenCandidate(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};
