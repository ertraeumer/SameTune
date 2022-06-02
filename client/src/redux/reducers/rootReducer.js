import { combineReducers } from "redux";
import bandsReducer from "./bandsReducer";
import musiciansReducer from "./musiciansReducer";
import filterDataReducer from "./filterDataReducer";
import userReducer from "./userReducer";
import authStatusReducer from "./authStatusReducer";
import musicianReducer from "./musicianReducer";

const rootReducer = combineReducers({
  filterData: filterDataReducer,
  authUser: userReducer,
  bands: bandsReducer,
  musicians: musiciansReducer,
  authStatus: authStatusReducer,
  musician: musicianReducer,
})

export default rootReducer;
