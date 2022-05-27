import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Profile from "../profile/Profile";
import Searchlist from "../searchlist/Searchlist";
import styles from './Main.module.css';

const Main = () => {

  return (
    <div className={styles.mainContainer}>
      <Routes>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/bands" element={<Searchlist searchvalue='Bands'/>}/>
        <Route path="/musicians" element={<Searchlist searchvalue='Musicians'/>}/>
        <Route path="/profile/:id" element={<Profile />}/>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}
 
export default Main;
