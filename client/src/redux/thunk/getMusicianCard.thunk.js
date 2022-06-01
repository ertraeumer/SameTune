import { getMusicianCard } from "../actions/getMusicianCard";

const PORT = 3001;

export const getMusicianCardThunk = () => {

  let url = `http://localhost:${PORT}`;

  return async function(dispatch){
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getMusicianCard(data));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
