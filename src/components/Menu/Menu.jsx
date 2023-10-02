import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import Home from "../Home/Home";
import AboutUs from "../About Us/AboutUs";
import PlaceToGo from "../Place to go/PlaceToGo";
import Faq from "../Faq/Faq";
import Logo from "../../logopage.png";

export default function Menu() {
  return (
    <Router>
      <div className="App xl:mx-[2%]">
        <div className="flex justify-between sticky top-0 bg-opacity-95 bg-[#f5f5f7] z-50 xl:mx-[5%] lg:mx-[4%]">
          <div className="xl:my-4 lg:my-1">
            <img src={Logo} alt="Logo page" className="xl:w-44 lg:w-36" />
          </div>
          <ul className="flex items-center">
            <li className="m-2">
              <Link to="/">HOME</Link>
            </li>
            <li className="m-2">
              <Link to="/aboutus">ABOUT US</Link>
            </li>
            <li className="m-2">
              <Link to="/placetogo">PLACE TO GO</Link>
            </li>
            <li className="my-2 ml-2">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/placetogo" element={<PlaceToGo />} />
          
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </Router>
  );
}
