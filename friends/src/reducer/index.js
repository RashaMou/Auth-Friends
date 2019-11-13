import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const combinedReducer = combineReducers({
  auth: authReducer,
  error: errorReducer
});

export default combinedReducer;
