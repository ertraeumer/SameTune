import { combineReducers } from "redux";
import bandsReducer from "./bandsReducer";
import musiciansReducer from "./musiciansReducer";
import filterDataReducer from "./filterDataReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  filterData: filterDataReducer,
  authUser: userReducer,
  bands: bandsReducer,
  musicians: musiciansReducer
})

export default rootReducer;
