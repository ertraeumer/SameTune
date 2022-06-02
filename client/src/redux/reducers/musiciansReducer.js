import initState from "../initState";

const GET_MUSICIANS_LIST = 'GET_MUSICIANS_LIST';
const SET_MUSICIAN_CARD = 'SET_MUSICIAN_CARD';

const musiciansReducer = (state = initState(), action) => {
  switch (action.type) {
    case GET_MUSICIANS_LIST:
      return {...state, musiciansList: action.payload};

    case SET_MUSICIAN_CARD:
      return action.payload;

    default:
      return state;
  }
};

export default musiciansReducer;
