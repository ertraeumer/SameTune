import { setMusician } from "../actionCreators/setMusician";

export const getMusicianThunk = (id) => {

  return async function(dispatch){
    try{
      const response = await fetch(`http://localhost:3001/api/musicians/${id}`);
      const result = await response.json();
      dispatch(setMusician(result));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
