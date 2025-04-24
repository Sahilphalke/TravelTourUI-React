import React from "react";
import logo from "../assets/HomeImage/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center top-0 sticky">
        <div className="w-6xl mt-5 flex justify-between align-middle items-center p-0.5">
          <img src={logo} alt="Logo" className="w-25" />
          <div>
            <ul className="flex gap-15 text-amber-50">
              <li className="hover:text-indigo-950">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-indigo-950">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-indigo-950">services</li>
              <li className="animate-pulse hover:text-indigo-950">
                <Link to="/package">Upcoming Packages</Link>
              </li>
            </ul>
          </div>
          <button className="bg-amber-500 text-lime-50  p-5 pt-2.5 pb-2.5 rounded-xl hover:border-slate-800">
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
