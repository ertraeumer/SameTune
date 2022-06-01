import * as endPoints from '../../config/endPoints';
import { getBandsList } from "../actionCreators/getBandsList";

export const getBandsListThunk = (groupGenre, groupLocation, groupInstrument) => {
  return async function(dispatch){
    try{
      const response = await fetch('http://localhost:3001/api/bands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ groupGenre, groupLocation, groupInstrument }),
      });
      const data = await response.json();
      dispatch(getBandsList(data));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
