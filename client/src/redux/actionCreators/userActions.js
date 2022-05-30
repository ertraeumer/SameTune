const DELETE_USER = 'DELETE_USER';
const SET_USER = 'SET_USER';

export const setUser = (payload) => ({type: SET_USER, payload: payload});

export const deleteUser = () => ({type: DELETE_USER, });

