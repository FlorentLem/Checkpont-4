import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthToken from "../services/setAuthToken";

import { SET_CURRENT_USER } from "./type";

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("http://localhost:8000/api/admin/login", userData)
    .then((res) => {
      const { accessToken } = res.data;
      localStorage.setItem("jwtToken", accessToken);

      setAuthToken(accessToken);

      const decoded = jwtDecode(accessToken);

      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  window.location.href = "/admin/login";
};
