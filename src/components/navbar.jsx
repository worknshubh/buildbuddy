import { useNavigate } from "react-router-dom";
import "../global.css";
import PrimaryBtn from "./button";

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row justify-between bg-[#1a1a1a] items-center p-3 px-6">
        <div className="flex flex-row">
          <h2 className="text-3xl text-white">Build</h2>
          <h2 className="text-3xl text-[#EFA61F]">Buddy</h2>
        </div>
        <div>
          <ul className="flex flex-row ">
            <li className="mx-5 text-white">Home</li>
            <li className="mx-5 text-white">Match</li>
            <li className="mx-5 text-white">Chats</li>
            <li className="mx-5 text-white">Contact</li>
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
    </>
  );
}

export default NavigationBar;
