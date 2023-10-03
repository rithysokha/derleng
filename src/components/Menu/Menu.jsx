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
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp"

export default function Menu() {
  return (
    <Router>
      <div className="App mx-[2%]">
        <div className="flex justify-between sticky top-0 bg-opacity-95 bg-[#f5f5f7] z-50">
          <div className="my-4">
            <img src={Logo} alt="Logo page" className="w-44" />
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
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/placetogo" element={<PlaceToGo />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </Router>
  );
}
