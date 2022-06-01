import initState from "../initState";

const SET_STATUS = 'SET_STATUS';

const authStatusReducer = (state = initState(), action) => {
  switch (action.type) {
    case SET_STATUS:
      return action.payload;

    default:
      return state;
  }
};

export default authStatusReducer;
