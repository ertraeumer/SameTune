const GET_FILTER_DATA = 'GET_FILTER_DATA';

const defaultState = { filterData: {filter: [[], [], []]}};

const filterDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_FILTER_DATA:
      return {...state, filterData: action.payload};

    default:
      return state;
  }
};

export default filterDataReducer;
