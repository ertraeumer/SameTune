import initState from "../initState";

const GET_FILTER_DATA = 'GET_FILTER_DATA';

const filterDataReducer = (state = initState(), action) => {
  switch (action.type) {
    case GET_FILTER_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default filterDataReducer;
