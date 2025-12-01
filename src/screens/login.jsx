import "../global.css";
import TextType from "../components/typingtext";
import PrimaryBtn from "../components/button";
function LoginPage() {
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
              "Welcome Back",
              "Good to see you again!",
              "Ready to continue Builder?",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-white text-6xl"
          />
        </div>
        <div className="flex justify-center mt-20">
          <div className="bg-white h-[400px] w-[30%] rounded-3xl">
            <div className="bg-[#1a1a1a] h-[400px] blur-sm opacity-95 rounded-3xl flex flex-col"></div>
          </div>
          <div className="absolute mt-30 w-[20%]">
            <input
              type="text"
              name="devID"
              id="devID"
              placeholder=" Enter Your Developer ID"
              className="text-white border-b p-2 w-[100%] focus:outline-none focus:pb-3 transition-all ease-in-out focus:border-[#a3a3a3]"
            />

            <input
              type="password"
              name="devPass"
              id="devPass"
              placeholder="Enter Your Password"
              className="text-white border-b p-2 w-[100%] focus:outline-none focus:pb-3 transition-all ease-in-out focus:border-[#a3a3a3] mt-5"
            />
            <div className="flex mt-8 justify-center">
              <PrimaryBtn btnname="Login Now" colour="#EFA61F" />
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

export default LoginPage;
