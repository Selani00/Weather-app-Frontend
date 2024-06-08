import React from "react";
import { useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice";
import { IoMdHome, IoMdLogOut } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

const Header = () => {
  const { theme } = useSelector((state) => state.theme);

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/signout", {
        method: "POST",
      });

      if (!response.ok) {
        console.log("error signing out");
      } else {
        dispatch(signoutSuccess());
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="m-0 fixed top-0 z-[999] w-full bg-white dark:bg-[rgb(16,23,42)] text-black dark:text-gray-200 ">
      <div className="md:px-5 p-2 flex items-center justify-between">
        {/* left */}
        <div className="flex items-center justify-center gap-2 md:gap-10">
          <a
            href="/"
            className="border p-2 rounded-full dark:hover:text-yellow-300 dark:hover:border-yellow-300 hover:text-[rgb(198,0,179)] hover:border-[rgb(198,0,179)] hover:scale-110 transition duration-300 ease-in-out"
          >
            {" "}
            <IoMdHome className="w-6 h-6" />
          </a>

          <div className="flex items-center justify-center gap-2 underline">
            <IoPerson className="w-6 h-6 hidden lg:inline" />
            <h1 className="font-bold text-lg">Hello, {currentUser.username}</h1>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <button
            className="border p-2 animate-spin-slow rounded-full dark:hover:text-yellow-300 dark:hover:border-yellow-300 hover:text-[rgb(198,0,179)] hover:border-[rgb(198,0,179)]"
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? (
              <FaMoon className="w-6 h-6" />
            ) : (
              <FaSun className="w-6 h-6" />
            )}
          </button>

          <div
            className="flex items-center justify-center gap-2 font-semibold cursor-pointer border p-2 rounded-xl dark:hover:text-yellow-300 dark:hover:border-yellow-300 hover:text-[rgb(198,0,179)] hover:border-[rgb(198,0,179)]"
            onClick={handleSignOut}
          >
            <p className="hidden lg:inline">Signout</p>
            <IoMdLogOut className="w-6 h-6  hover:scale-110 transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
