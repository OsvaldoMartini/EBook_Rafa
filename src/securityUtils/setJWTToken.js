import axios from "axios";

export const setJWTToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const setJWTTokenCandidate = token => {
  if (token) {
    axios.defaults.headers.common["Candidate"] = token;
  } else {
    delete axios.defaults.headers.common["Candidate"];
  }
};
