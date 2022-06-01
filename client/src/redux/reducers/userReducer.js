import initState from "../initState";

const DELETE_USER = 'DELETE_USER';
const SET_USER = 'SET_USER';

const userReducer = (state = initState(), action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    case DELETE_USER:
      return null;

    default:
      return state;
  }
};

export default userReducer;
