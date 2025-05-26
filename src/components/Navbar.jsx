import React from "react";
import camera from "../assets/camera.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-3 lg:px-16 md:px-10 sm:px-4 px-2">
      <div className="left">
        <Link to={"/"}>
          <h1 className="flex items-end gap-1 text-2xl font-bold">
            <img src={camera} alt="logo" className="w-9" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] bg-clip-text text-transparent">
              Pixisphere
            </span>
          </h1>
        </Link>
      </div>
      <div className="right">
        <img src={menu} alt="hamburger" className="w-9 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
