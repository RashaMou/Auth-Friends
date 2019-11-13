import axiosWithAuth from "../utils/AxiosWithAuth";
import { LOGIN_SUCCESS, LOGIN_FAIL } from ".";

export const login = (userData, history) => dispatch => {
  axiosWithAuth()
    .post("/api/login", userData)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res });
      history.push("/friendslist");
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }));
};
