import { authUser } from "../authUser";

export const checkAuth = () => {

  let url = '';

  return async function(dispatch){
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch(authUser(data));
    }
    catch(error){
      console.log(error.message)
    }
  }
}
