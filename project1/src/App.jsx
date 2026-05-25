//
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/01_Main";
import Signup from "./pages/02_Signup";
import Signup2 from "./pages/02_Signup2";
import Login from "./pages/03_Login";
import Home from "./pages/04_Home";
import Rental from "./pages/05_Rental";
import Setting from "./pages/06_Setting";
import Admin from "./pages/07_Admin";
import MapPage from "./pages/08_Map";
import Map from "./pages/08_Map";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Main />} />

        <Route path="/signup" element={<Signup />} />
        
        <Route path="/signup2" element={<Signup2 />} />

        <Route path="/login" element={<Login />} />
        
        <Route path="/home" element={<Home />} />

        <Route path="/rental" element={<Rental />} />

        <Route path="/setting" element={<Setting />} />

        <Route path="/admin" element={<Admin />} />
        
        <Route path="/map" element={<Map />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;