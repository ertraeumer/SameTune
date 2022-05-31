import initState from "../initState";

const GET_BANDS_LIST = 'GET_BANDS_LIST';
const GET_BAND_CARD = 'GET_BAND_CARD';

const bandsReducer = (state = initState(), action) => {
  switch (action.type) {
    case GET_BANDS_LIST:
      return action.payload;

    case GET_BAND_CARD:
      return action.payload;

    default:
      return state;
  }
};

export default bandsReducer;
