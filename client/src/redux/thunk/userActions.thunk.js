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

export const signIn = (payload, navigate) => {

  return async function(dispatch){
    dispatch(setStatus(''));
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
        const result = await response.json();
        console.log(result);
        if (result.status === 'EmptyEmailFieldFailure'){
          dispatch(setStatus('Поле e-mail пустое'));
        }
        else if (result.status === 'EmptyPassFieldFailure') {
          dispatch(setStatus('Поле пароля пустое'));
        }
        else {
          const user = result;
          dispatch(setStatus('Успешно'));
          dispatch(setUser(user));
        }
      } else {
        navigate('/bands');
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

export const editUser = (user, navigate) => {
  return async function(dispatch, getState){
    try{
      const { user: { id: userId }, } = getState();
      const response = await fetch(endPoints.editUser(userId), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const userData = await response.json();
        dispatch(setUser(userData));
      } else {
        navigate.replace('/');
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
