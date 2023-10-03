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
import DropDown from "./dropdown";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp"

export default function Menu() {
  return (
    <Router>
      <div className="App">
        <div className="flex justify-between sticky top-0  h-20 items-center bg-opacity-95 bg-[#f5f5f7] z-50">
          <div className="p-5">
            <img src={Logo} width={150} height={100}/>
          </div>
          <div className="sm:hidden">
            <DropDown/>
          </div>
          
          <ul className=" items-center justify-end p-5 w-full hidden sm:flex ">
            <li className="m-2 hover:text-white hover:bg-gray-700 p-2 rounded-xl">
              <Link to="/">HOME</Link>
            </li>
            <li className="m-2 hover:text-white hover:bg-gray-700 p-2 rounded-xl">
              <Link to="/aboutus">ABOUT US</Link>
            </li>
            <li className="m-2 hover:text-white hover:bg-gray-700 p-2 rounded-xl">
              <Link to="/placetogo">PLACE TO GO</Link>
            </li>
            <li className="m-2 hover:text-white hover:bg-gray-700 p-2 rounded-xl">
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
