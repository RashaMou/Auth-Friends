import axiosWithAuth from "../utils/AxiosWithAuth";
import {
  START_FETCHING_FRIENDS,
  FETCH_SUCCESS,
  DISPLAY_ADD_FRIEND_FORM,
  ADD_FRIEND
} from "./../actions";

export const fetchFriends = () => dispatch => {
  dispatch({ type: START_FETCHING_FRIENDS });
  axiosWithAuth()
    .get("/api/friends")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const displayAddFriendForm = () => dispatch => {
  dispatch({ type: DISPLAY_ADD_FRIEND_FORM });
};

export const addFriend = newFriend => dispatch => {
  axiosWithAuth()
    .post("/api/friends", newFriend)
    .then(res => {
      dispatch({ type: ADD_FRIEND, payload: newFriend });
    });
};
