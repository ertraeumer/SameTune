import { combineReducers } from "redux";
import bandsReducer from "./bandsReducer";
import musiciansReducer from "./musiciansReducer";
import filterDataReducer from "./filterDataReducer";
import userReducer from "./userReducer";
import authStatusReducer from "./authStatusReducer";

const rootReducer = combineReducers({
  filterData: filterDataReducer,
  authUser: userReducer,
  bands: bandsReducer,
  musicians: musiciansReducer,
  authStatus: authStatusReducer,
})

export default rootReducer;
