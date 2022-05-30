import { getMusiciansList } from "../actionCreators/getMusiciansList";

const PORT = 3001;

export const getMusiciansListThunk = (params) => {

  let url = `http://localhost:${PORT}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params) //JSON.stringify({})
  };

  return async function(dispatch){
    try{
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(getMusiciansList(data));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
