import { getBandCard } from "../actions/getBandCard";

const PORT = 3001;

export const getBandCardThunk = () => {

  let url = `http://localhost:${PORT}/`;

  return async function(dispatch){
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getBandCard(data));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
