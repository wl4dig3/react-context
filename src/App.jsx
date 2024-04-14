import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css'
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { MyContext } from "./MyContext";
import { useState } from "react";


const App = () => {
const [data, setData] = useState([]);
const sharedState = { data, setData };

  return (
    <MyContext.Provider value={sharedState}>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
};
export default App;
