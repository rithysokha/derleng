import  React,{ useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
  import menu from "../../menu.svg";
export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return(
        <div className="inline-block text-left z-50">
        <div>
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 font-semibold text-gray-700 mr-5 focus:outline-none focus:ring "
          > <img src={menu} alt='' className="w-[30px] h-[30px] "/>menu </button>
        </div>
  
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-[#014164] ring-black ring-opacity-5 focus:outline-none uppercase z-50 ">
          <ul className="">
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
        )}
      </div>
    )
};
