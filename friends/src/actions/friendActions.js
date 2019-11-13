import axiosWithAuth from "../utils/AxiosWithAuth";
import { START_FETCHING_FRIENDS, FETCH_SUCCESS } from "./../actions";

export const fetchFriends = () => dispatch => {
  dispatch({ type: START_FETCHING_FRIENDS });
  axiosWithAuth()
    .get("/api/friends")
    .then(res => {
      console.log("res.data", res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
