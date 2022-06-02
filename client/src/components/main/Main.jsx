import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getBandsListThunk } from "../../redux/thunk/getbandsList.thunk";
import { getFilterDataThunk } from "../../redux/thunk/getFilterData.thunk";
import { getMusiciansListThunk } from "../../redux/thunk/getMusiciansList.thunk";
import BandProfile from "../bandProfile/BandProfile";
import Homepage from "../homepage/Homepage";
import NewBandForm from "../newBandForm/NewBandForm";
import PersonalProfile from "../personalProfile/PersonalProfile";
import Profile from "../profile/Profile";
import Searchlist from "../searchlist/Searchlist";
import styles from './Main.module.css';

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilterDataThunk());
  }, []);

  useEffect(() => {
    dispatch(getBandsListThunk());
  }, []);

  useEffect(() => {
    dispatch(getMusiciansListThunk());
  }, []);

  return (
    <div style={{marginTop:'0px'}} className={styles.mainContainer}>
      <Routes>
        <Route path='/newband' element={<NewBandForm />} />
        <Route path="/home" element={<Homepage />}/>
        <Route path="/bands" element={<Searchlist searchvalue='Bands'/>}/>
        <Route path="/band/:id" element={<BandProfile />}/>
        <Route path="/musicians" element={<Searchlist searchvalue='Musicians'/>}/>
        <Route path="/profile" element={<PersonalProfile />}/>
        <Route path="/profile/:id" element={<Profile />}/>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}
 
export default Main;
