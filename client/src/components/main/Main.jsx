import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />}/>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}
 
export default Main;
