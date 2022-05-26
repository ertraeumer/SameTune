import Header from "./components/header/Header";
import Main from "./components/main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";

function App() {

  // const [token, setToken] = useState();

  // if (!token) return (
    
  // );

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
