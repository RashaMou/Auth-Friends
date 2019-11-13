import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./../actions";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: false,
  isLoading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
        isLoading: false
      };

    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        isLoading: false
      };

    case LOGOUT:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        isLoading: false
      };

    default:
      return state;
  }
};

export default authReducer;
