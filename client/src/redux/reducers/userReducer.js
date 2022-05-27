const CHECK_AUTH = 'CHECK_AUTH';
// const AUTHORIZE_USER = 'AUTHORIZE_USER';

const defaultState = { authUser: []};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_AUTH:
      return {...state, authUser: action.payload};

    // case AUTHORIZE_USER:
    //   return null;

    default:
      return state;
  }
};

export default userReducer;
