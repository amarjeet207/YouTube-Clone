import React, { useEffect, useState } from "react";
import logo from "../assets/Youtube-Logo.png";
import menu from "../assets/menu.svg";
import searchicon from "../assets/search.svg";
import mic from "../assets/mic.svg";
import vert from "../assets/more_vert.svg";
import customer from "../assets/customer.png";
import plus from "../assets/plus.png";
import signin from "../assets/account.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import axios from "axios";

const NavBar = () => {
  const { toggleMenu, setToggleMenu } = useAppContext();
  const { isSignIn, setIsSignIn } = useAppContext();
  const { allVideos, setAllVideos } = useAppContext();
  const [profileClicked, setProfileClicked] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setIsSignIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/videos");
        let result = response.data;

        if (search) {
          console.log(search);
          result = result.filter((v) =>
            v.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        setAllVideos(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);

  function handleSignOut() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setIsSignIn(false);
  }

  return (
    <div className="bg-white top-0 fixed z-20 w-full font-sans box-border flex items-center justify-between pt-2 pb-2">
      <div className="xs:12 md:w-24 object-cover flex items-center gap-5 md:ml-8 ">
        {/* menu */}
        <img
          src={menu}
          className="cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {/* Logo */}
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/230px-YouTube_2024.svg.png"
            alt="logo"
            className="w-24 md:w-28"
          />
        </Link>
      </div>

      {/* Search , mic */}
      <div className="flex items-center gap-5 ">
        <div className="shadow-inner flex justify-between xs:w-[10rem] lg:w-[38rem]  items-center border-1 pl-2 rounded-3xl h-10 border-zinc-300 object-cover">
          <input
            type="text"
            placeholder="Search"
            className="border-0 outline-0 ml-2 text-[18px]"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className=" bg-[#f8f8f8] border-l-1 border-zinc-300 h-full rounded-br-3xl rounded-tr-3xl pl-4 pr-4 flex items-center justify-center">
            <img src={searchicon} className="w-7 cursor-pointer " />
          </div>
        </div>
        <div className="p-2 rounded-full bg-zinc-100 xs:hidden md:block">
          <img src={mic} className="cursor-pointer" />
        </div>
      </div>

      {/* Signin */}
      <div className="flex items-center gap-5 mr-8">
        {isSignIn ? (
          <div className=" flex items-center gap-2 bg-zinc-100 rounded-3xl py-2 px-4 cursor-pointer  xs:hidden md:inline-flex">
            <img src={plus} className="w-6" />
            <p className="text-zinc-900  ">Create</p>
          </div>
        ) : (
          <img src={vert} className="cursor-pointer xs:hidden md:block" />
        )}

        {isSignIn ? (
          <div>
            <div
              className="relative"
              onClick={() => setProfileClicked(!profileClicked)}
            >
              <img src={customer} className="cursor-pointer  w-5" />
            </div>

            {profileClicked && (
              <div className="absolute -ml-25 -mt-5 text-zinc-800 text-md p-4 rounded-md bg-amber-200 shadow-md">
                <Link to="/channel" className="hover:underline mb-5">
                  Profile
                </Link>
                <div
                  className="hover:underline cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign Out
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signin">
            <div className="flex items-center gap-2 border-1 border-zinc-200 rounded-3xl py-1 px-2  cursor-pointer">
              <img src={signin} className="w-6" />
              <p className="text-[#065fd4] font-medium ">Sign in</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
