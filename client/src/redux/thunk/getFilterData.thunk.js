import { getFilterData } from "../actionCreators/getFilterData";
import * as endPoints from '../../config/endPoints';

export const getFilterDataThunk = () => {

  return async function(dispatch){
    try{
      const response = await fetch(endPoints.getFilterDataThunk());
      const data = await response.json();
      dispatch(getFilterData(data));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
