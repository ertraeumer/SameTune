import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Searchlist from "../searchlist/Searchlist";
import styles from './Main.module.css';

const Main = () => {

  return (
    <div className={styles.mainContainer}>
      <Routes>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/bands" element={<Searchlist searchvalue='bands'/>}/>
        <Route path="/musicians" element={<Searchlist searchvalue='musicians'/>}/>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}
 
export default Main;
