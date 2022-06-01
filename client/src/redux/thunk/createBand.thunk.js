import * as endPoints from '../../config/endPoints';
import { getUserFromServer } from './userActions.thunk';

export const createBand = (name, description, location, genre, instrument) => {
  return async function(dispatch, getState){
    try{
      const { authUser } = getState();
      const response = await fetch(endPoints.createBand(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, description, genre, location, instrument }),
      });
      if (response.ok) {
        dispatch(getUserFromServer(authUser.id));
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
}
