const REGISTER_USER = 'REGISTER_USER';
// const AUTHORIZE_USER = 'AUTHORIZE_USER';

const defaultState = { token: []};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {...state, token: action.payload};

    // case AUTHORIZE_USER:
    //   return null;

    default:
      return state;
  }
};

export default userReducer;
