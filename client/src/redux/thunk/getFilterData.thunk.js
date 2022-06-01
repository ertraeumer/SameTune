import { getFilterData } from "../actionCreators/getFilterData";

const PORT = 3001;

export const getFilterDataThunk = () => {

  let url = `http://localhost:${PORT}/api/filter`;

  return async function(dispatch){
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getFilterData(data));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
