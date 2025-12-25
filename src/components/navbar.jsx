import { NavLink, useNavigate } from "react-router-dom";
import "../global.css";
import PrimaryBtn from "./button";

function NavigationBar() {
  const navigate = useNavigate();
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
          >
            <PrimaryBtn btnname="Login" colour="#3a3a3a" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
