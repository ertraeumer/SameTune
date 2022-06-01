import { deleteUser, setUser } from "../actionCreators/userActions";
import * as endPoints from '../../config/endPoints';

export const signUp = (payload, navigate) => {

  return async function(dispatch){
    try{
      const response = await fetch(endPoints.signUp(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const user = await response.json();
        dispatch(setUser(user));
      } else {
        navigate('/bands');
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
};

export const signIn = (payload) => {

  return async function(dispatch){
    try{
      const response = await fetch(endPoints.signIn(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const user = await response.json();
        dispatch(setUser(user));
      } else {
        console.log('error in sign in thunk');
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
};

export const signOut = () => {
  return async function(dispatch){
    try{
      const response = await fetch(endPoints.signOut(), {
        credentials: 'include',
      });
      if (response.ok) {
        dispatch(deleteUser());
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
};

export const getUserFromServer = (id) => {

  return async function(dispatch){
    try{
      const response = await fetch(endPoints.getUser(id), {
        credentials: 'include',
      });
      if (response.ok) {
        const currentUser = await response.json();
        dispatch(setUser(currentUser));
      }
      else{
        console.log('не удалось получить данные')
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
};

export const editUser = (newValues) => {
  return async function(dispatch, getState){
    try{
      const { authUser } = getState();
      const response = await fetch(endPoints.editUser(authUser.id), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(newValues),
      });
      if (response.ok) {
        const userData = await response.json();
        dispatch(setUser(userData));
      } else {
        console.log('error in edit user thunk');
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
};

export const checkAuth = () => {
  return async function(dispatch){
    try{
      const response = await fetch(endPoints.checkAuth(), {
        credentials: 'include',
      });
      if (response.ok) {
        const user = await response.json();
        dispatch(setUser(user));
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
};
