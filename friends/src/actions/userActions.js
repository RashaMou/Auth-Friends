import axiosWithAuth from "./../utils/AxiosWithAuth";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./../actions";

export const login = userData => dispatch => {
  console.log(userData);
  axiosWithAuth()
    .post("/api/login", userData)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res });
    })
    .catch(res => dispatch({ type: LOGIN_FAIL, payload: res.json }));
};
