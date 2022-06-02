import initState from "../initState";

const SET_MUSICIAN = 'SET_MUSICIAN';

const musicianReducer = (state = initState(), action) => {
  switch (action.type) {

    case SET_MUSICIAN:
      return action.payload;

    default:
      return state;
  }
};

export default musicianReducer;
