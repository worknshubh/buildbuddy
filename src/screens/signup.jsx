import "../global.css";
import TextType from "../components/typingtext";
import PrimaryBtn from "../components/button";
import { useState } from "react";
function SignUpPage() {
  const [nextCheck, setNextCheck] = useState(false);
  return (
    <>
      <div className="bg-[#1a1a1a] h-lvh flex flex-col">
        <div className="flex flex-row justify-center pt-20">
          <h2 className="text-4xl text-white">Build</h2>
          <h2 className="text-4xl text-[#EFA61F]">Buddy</h2>
        </div>
        <div className="flex justify-center mt-6">
          <TextType
            text={[
              "Welcome to BuildBuddy",
              "Build More, Stress Less",
              "Join BuildBuddy",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-white text-6xl"
          />
        </div>

        <div className="w-[30%] m-auto bg-[#2b2b2b] h-[600px] rounded-3xl shadow-sm flex justify-around flex-col">
          <h2 className="text-3xl text-white font-semibold mx-10 text-center">
            {nextCheck === false ? "Basic Info" : "A Bit More"}
          </h2>
          <div className="w-[100%]">
            <div
              className="w-[70%] m-auto my-3 "
              style={
                nextCheck === true
                  ? { display: "none" }
                  : { visibility: "visible" }
              }
            >
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Your Name"
                className="focus:outline-none border-b border-white w-[100%] text-white mt-6 p-1 focus:border-[#efa61f] transition-all ease-in-out duration-300"
              />
            </div>
            <div
              className="w-[70%] m-auto my-3 "
              style={
                nextCheck === true
                  ? { display: "none" }
                  : { visibility: "visible" }
              }
            >
              <input
                type="email"
                name="userEmail"
                id="userName"
                placeholder="Enter Your Email"
                className="focus:outline-none border-b border-white w-[100%] text-white mt-6 p-1 focus:border-[#efa61f] transition-all ease-in-out duration-300"
              />
            </div>

            <div
              className="w-[70%] m-auto my-3 "
              style={
                nextCheck === true
                  ? { display: "none" }
                  : { visibility: "visible" }
              }
            >
              <input
                type="password"
                name="userPass"
                id="userPass"
                placeholder="Enter Your Password"
                className="focus:outline-none border-b border-white w-[100%] text-white mt-6 p-1 focus:border-[#efa61f] transition-all ease-in-out duration-300"
              />
            </div>

            <div
              className="w-[70%] m-auto my-3 "
              style={
                nextCheck === true
                  ? { display: "none" }
                  : { visibility: "visible" }
              }
            >
              <input
                type="password"
                name="userPass"
                id="userPass"
                placeholder="Confirm Your Password"
                className="focus:outline-none border-b border-white w-[100%] text-white mt-6 p-1 focus:border-[#efa61f] transition-all ease-in-out duration-300"
              />
            </div>

            <div className="w-[80%] m-auto">
              <h2 className="text-white text-2xl font-light">Experience</h2>
              <div className="flex flex-row justify-around mt-5">
                <div className="border border-white py-2 px-8 rounded-2xl hover:bg-[#efa61f] hover:border-0">
                  <h2 className="text-white">Basic</h2>
                </div>
                <div className="border border-white py-2 px-8 rounded-2xl hover:bg-[#efa61f] hover:border-0">
                  <h2 className="text-white">Intermediate</h2>
                </div>
                <div className="border border-white py-2 px-8 rounded-2xl hover:bg-[#efa61f] hover:border-0">
                  <h2 className="text-white">Expert</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%]">
            <div
              className="flex justify-center items-center"
              onClick={() => {
                setNextCheck(true);
              }}
            >
              <PrimaryBtn
                btnname={nextCheck === false ? "Next" : "Submit"}
                colour="#efa61f"
              />
            </div>
          </div>
        </div>

        <div className="mt-auto mb-4 text-center">
          <p className="text-white font-light">
            By signing up, you agree to our Terms. See how we use your data in
            our Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
