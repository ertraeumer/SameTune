import { getBandsList } from "../actions/getBandsList";

const PORT = 3001;

export const getBandsListThunk = () => {

  let url = `http://localhost:${PORT}`;

  return async function(dispatch){
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getBandsList(data));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
