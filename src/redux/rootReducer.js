import { combineReducers } from "redux";
import counterReducer from "./modules/counter/counter";
import userReducer from "./modules/user/users";

const rootReducer = combineReducers({
  counterReducer,
  userReducer
});

export default rootReducer;
