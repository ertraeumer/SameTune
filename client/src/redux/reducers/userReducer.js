const DELETE_USER = 'DELETE_USER';
const SET_USER = 'SET_USER';

const defaultState = { authUser: null };

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, authUser: action.payload};

    case DELETE_USER:
      return {...state, authUser: null};

    default:
      return state;
  }
};

export default userReducer;
