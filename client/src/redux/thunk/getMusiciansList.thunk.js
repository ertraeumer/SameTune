import { getMusiciansList } from "../actions/getMusiciansList";

const PORT = 3001;

export const getMusiciansListThunk = () => {

  let url = `http://localhost:${PORT}`;

  return async function(dispatch){
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getMusiciansList(data));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
