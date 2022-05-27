const GET_MUSICIANS_LIST = 'GET_MUSICIANS_LIST';
const GET_MUSICIAN_CARD = 'GET_MUSICIAN_CARD';

const defaultState = { bandsList: []};

const bandsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MUSICIANS_LIST:
      return {...state, musiciansList: action.payload};

    case GET_MUSICIAN_CARD:
      return {...state, musiciansCard: action.payload};

    default:
      return state;
  }
};

export default bandsReducer;
