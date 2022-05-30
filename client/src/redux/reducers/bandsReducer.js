const GET_BANDS_LIST = 'GET_BANDS_LIST';
const GET_BAND_CARD = 'GET_BAND_CARD';

const defaultState = { bandsList: []};

const bandsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BANDS_LIST:
      return {...state, bandsList: action.payload};

    case GET_BAND_CARD:
      return {...state, bandCard: action.payload};

    default:
      return state;
  }
};

export default bandsReducer;
