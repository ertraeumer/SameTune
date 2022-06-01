import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getFilterDataThunk } from "../../redux/thunk/getFilterData.thunk";
import Homepage from "../homepage/Homepage";
import PersonalProfile from "../personalProfile/PersonalProfile";
import Profile from "../profile/Profile";
import Searchlist from "../searchlist/Searchlist";
import styles from './Main.module.css';

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilterDataThunk());
  }, [])

  return (
    <div className={styles.mainContainer}>
      <Routes>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/bands" element={<Searchlist searchvalue='Bands'/>}/>
        <Route path="/musicians" element={<Searchlist searchvalue='Musicians'/>}/>
        <Route path="/profile/:type/:id" element={<Profile />}/>
        <Route path="/profile" element={<PersonalProfile />}/>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}
 
export default Main;
