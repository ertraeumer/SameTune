import { combineReducers } from "redux";
import filterDataReducer from "./filterDataReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  filterData: filterDataReducer,
})

export default rootReducer;
