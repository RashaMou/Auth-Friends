import { combineReducers } from "redux";
import authReducer from "./authReducer";
import friendReducer from "./friendReducer";

const combinedReducer = combineReducers({
  auth: authReducer,
  friend: friendReducer
});

export default combinedReducer;
