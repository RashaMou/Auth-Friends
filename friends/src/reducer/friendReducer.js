import {
  START_FETCHING_FRIENDS,
  FETCH_SUCCESS,
  FETCH_FAIL
} from "./../actions";

const initialState = {
  friends: [],
  isFetching: false,
  error: null
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_FRIENDS:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: action.payload
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: "ERROR FETCHING FRIENDS"
      };
    default:
      return state;
  }
};

export default friendReducer;
