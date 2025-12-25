import { NavLink, useNavigate } from "react-router-dom";
import "../global.css";
import PrimaryBtn from "./button";
import { useEffect, useState } from "react";

function NavigationBar() {
  const navigate = useNavigate();
  const [hasCookie, sethasCookie] = useState(false);
  function checkCookie() {
    if (document.cookie) {
      sethasCookie(true);
    } else {
      sethasCookie(false);
    }
  }

  useEffect(() => {
    checkCookie();
  }, []);
  return (
    <>
      <div className="absolute w-full top-0 left-0 z-50 fixed">
        <div className="flex flex-row justify-between bg-[#1a1a1a] items-center p-3 px-6">
          <div
            className="flex flex-row cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <h2 className="text-3xl text-white">Build</h2>
            <h2 className="text-3xl text-[#EFA61F]">Buddy</h2>
          </div>
          <div>
            <ul className="flex flex-row ">
              <li className="mx-5 text-white cursor-pointer hover:border-b-2 hover:border-[#efa61f] transition-all ease-in-out duration-300 hover:mb-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mx-5 text-white cursor-pointer hover:border-b-2 hover:border-[#efa61f] transition-all ease-in-out duration-300 hover:mb-2">
                <NavLink to="/match">Match</NavLink>
              </li>
              <li className="mx-5 text-white cursor-pointer hover:border-b-2 hover:border-[#efa61f] transition-all ease-in-out duration-300 hover:mb-2">
                Chats
              </li>
              <li className="mx-5 text-white cursor-pointer hover:border-b-2 hover:border-[#efa61f] transition-all ease-in-out duration-300 hover:mb-2">
                Contact
              </li>
            </ul>
          </div>

          <div
            onClick={() => {
              navigate("/login");
            }}
            style={
              hasCookie === true ? { display: "none" } : { display: "block" }
            }
          >
            <PrimaryBtn btnname="Login" colour="#3a3a3a" />
          </div>

          <div
            style={
              hasCookie === false ? { display: "none" } : { display: "block" }
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 16 16"
            >
              <path
                fill="#3a3a3a"
                d="M11 7c0 1.66-1.34 3-3 3S5 8.66 5 7s1.34-3 3-3s3 1.34 3 3"
              />
              <path
                fill="#3a3a3a"
                fill-rule="evenodd"
                d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M4 13.75C4.16 13.484 5.71 11 7.99 11c2.27 0 3.83 2.49 3.99 2.75A6.98 6.98 0 0 0 14.99 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.38 1.19 4.49 3.01 5.75"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
