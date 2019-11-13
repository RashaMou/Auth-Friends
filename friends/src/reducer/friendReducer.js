import {
  START_FETCHING_FRIENDS,
  FETCH_SUCCESS,
  FETCH_FAIL,
  DISPLAY_ADD_FRIEND_FORM,
  ADD_FRIEND
} from "./../actions";

const initialState = {
  friends: [],
  isFetching: false,
  error: null,
  isAdding: false,
  newFriend: {
    name: "",
    age: "",
    email: ""
  }
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

    case DISPLAY_ADD_FRIEND_FORM:
      return {
        ...state,
        isAdding: true
      };

    // case ADD_FRIEND:
    //   return {
    //     ...state,
    //     isAdding: false,
    //     newFriend: {
    //       name: action.payload.name,
    //       age: action.payload.age,
    //       email: action.payload.email
    //     }
    //   };

    default:
      return state;
  }
};

export default friendReducer;
