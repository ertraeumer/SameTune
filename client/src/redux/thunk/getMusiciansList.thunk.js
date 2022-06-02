import { getMusiciansList } from "../actionCreators/getMusiciansList";

export const getMusiciansListThunk = (genre, location, instrument) => {

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      userGenre: genre,
      userLocation: location,
      userInstrument: instrument,
    }),
  };

  return async function(dispatch){
    try{
      const response = await fetch('http://localhost:3001/api/musicians', options);
      const { filteredUsers } = await response.json();
      dispatch(getMusiciansList(filteredUsers));
    }
    catch(error){
      console.log(error.message);
    }
  }
}
