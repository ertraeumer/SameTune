import { checkAuth } from "../checkAuth";

const PORT = 3001;

export const checkAuthThunk = () => {

  let url = `http://localhost:${PORT}`;

  return async function(dispatch){
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch(checkAuth(data));
    }
    catch(error){
      console.log(error.message)
    }
  }
}
