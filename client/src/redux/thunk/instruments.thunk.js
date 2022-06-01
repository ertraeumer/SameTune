import * as endPoints from '../../config/endPoints';
import { getUserFromServer } from './userActions.thunk';

export const addInstrument = (instrument) => {
  return async function(dispatch, getState) {
    try{
      const { authUser } = getState();
      const response = await fetch(endPoints.addInstrument(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ userId: authUser.id, instrument }),
      });
      if (response.ok) {
        dispatch(getUserFromServer(authUser.id));
      }
      else {
        console.log('error in addInstrument thunk');
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
};
