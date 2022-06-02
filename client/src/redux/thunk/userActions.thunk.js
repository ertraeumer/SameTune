import { deleteUser, setUser } from "../actionCreators/userActions";
import { setStatus } from "../actionCreators/authStatus";
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
    dispatch(setStatus(''));
    try{
      console.log(endPoints.signIn());
      const response = await fetch(endPoints.signIn(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const result = await response.json();
        if (result.status === 'EmptyEmailFieldFailure'){
          dispatch(setStatus('Поле e-mail пустое'));
        }
        else if (result.status === 'EmptyPassFieldFailure') {
          dispatch(setStatus('Поле пароля пустое'));
        }
        else {
          const user = result;
          dispatch(setStatus('Вход выполнен успешно'));
          dispatch(setUser(user));
        }
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
        dispatch(setStatus(''));
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
