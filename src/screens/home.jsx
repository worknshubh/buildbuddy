import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/button";
import Particles from "../components/particles";
import SplitText from "../components/spilltext";
import TiltedCard from "../components/tiltedcard";
import "../global.css";
function HomePage() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{ width: "100%", height: "900px", position: "relative" }}
        className="bg-[#1a1a1a]"
      >
        <div className="flex flex-row justify-center">
          <div className="absolute z-1 top-85">
            <SplitText
              text="Build More"
              className="text-8xl font-semibold text-center text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          <div className="absolute z-1 top-109">
            <SplitText
              text="Stress Less"
              className="text-5xl text-center text-[#FFD93D]"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          <div className="absolute z-1 top-125 w-[15%]">
            <div className="flex flex-row w-[100%] justify-around">
              <div
                onClick={() => {
                  navigate("/register");
                }}
              >
                <PrimaryBtn btnname="Sign Up" colour="#EFA61F" />
              </div>
              <div>
                <PrimaryBtn btnname="Download" colour="#3a3a3a" />
              </div>
            </div>
          </div>
        </div>

        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        <div className="bg-[#1a1a1a]">
          <div className=" px-10 py-0 flex flex-row items-center w-[70%]">
            <div className="m-4">
              <TiltedCard
                imageSrc="public/images/buildbuddyapp.png"
                //   altText="Kendrick Lamar - GNX Album Cover"
                //   captionText="Kendrick Lamar - GNX"
                containerHeight="600px"
                containerWidth="600px"
                imageHeight="450px"
                imageWidth="450px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                //   overlayContent={
                //     <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
                //   }
              />
            </div>

            <div className="flex flex-col">
              <h4 className="text-[#FFD93D] text-4xl mb-2 font-semibold">
                Where Ideas Meet the Right Developers
              </h4>
              <p className="text-white">
                BuildBuddy helps you instantly discover developers who match
                your project’s exact tech requirements. From React to Machine
                Learning, explore real profiles, check skill tags, and connect
                with the right builder effortlessly.
              </p>
            </div>
          </div>
          {/* SECOND BOX */}
          <div className="flex flex-row justify-end">
            <div className=" px-10 py-0 flex flex-row items-center w-[70%]">
              <div className="flex flex-col">
                <h4 className="text-[#FFD93D] text-4xl mb-2 font-semibold">
                  Your Perfect Developer Match, Powered by Skills
                </h4>
                <p className="text-white">
                  Say goodbye to endless scrolling and uncertainty. With
                  BuildBuddy, instantly explore developer profiles, verify their
                  strengths, and connect with the best fit for your product in
                  minutes.
                </p>
              </div>
              <div className="m-4">
                <TiltedCard
                  imageSrc="public/images/buildbuddylap.png"
                  //   altText="Kendrick Lamar - GNX Album Cover"
                  //   captionText="Kendrick Lamar - GNX"
                  containerHeight="600px"
                  containerWidth="600px"
                  imageHeight="450px"
                  imageWidth="450px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  //   overlayContent={
                  //     <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
                  //   }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a]">
          <div className="flex flex-row justify-center">
            <div className="bg-[#f3f3f3] w-[70%] h-[600px] rounded-3xl mt-50">
              <div className="flex flex-row p-5 items-center w-full justify-around">
                <div className="w-[30%] flex flex-row items-center justify-center">
                  <img
                    src="public/images/groupimg.png"
                    alt=""
                    className="mt-5"
                  />
                </div>

                <div className="flex flex-col w-[60%]">
                  <h4 className="text-6xl font-semibold mb-3">
                    Be the first to collaborate smarter
                  </h4>
                  <p className="font-extralight text-xl">
                    BuildBuddy is transforming how founders and developers
                    connect. Want a first look at what’s coming next? Sign up to
                    get updates, new feature drops, and smarter ways to match
                    with the right developer delivered straight to your inbox.
                    <br></br>
                    <br></br>
                    Whether it's tools that help you understand a developer’s
                    skills better, AI-powered matching, or workflow updates that
                    make collaboration smoother, you’ll be the first to know how
                    we’re making building easier for everyone.
                  </p>

                  <div className="flex mt-6">
                    <PrimaryBtn btnname="Join Now" colour="#3a3a3a" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100px]"></div>
        </div>
        <div className="bg-[#1a1a1a] h-[350px] p-20 ">
          <div className="flex flex-row">
            <h2 className="text-5xl text-white">Build</h2>
            <h2 className="text-5xl text-[#EFA61F]">Buddy</h2>
          </div>

          <div className="flex flex-row mt-3">
            <img
              src="public/images/fb.png"
              alt=""
              className="w-[30px] mx-2  hover:brightness-200"
            />
            <img
              src="public/images/ins.png"
              alt=""
              className="w-[30px] mx-2 hover:brightness-200"
            />
            <img
              src="public/images/x.png"
              alt=""
              className="w-[30px] mx-2 hover:brightness-200"
            />
            <img
              src="public/images/ln.png"
              alt=""
              className="w-[30px] mx-2 hover:brightness-200"
            />
          </div>
          <div className="flex flex-row justify-end">
            <div className="flex flex-col mx-8">
              <h4 className="text-white font-light mb-2">Our Apps</h4>
              <p className="text-white my-1">SumoMom</p>
              <p className="text-white my-1">Salonify</p>
              <p className="text-white my-1">Festify</p>
            </div>
            <div className="flex flex-col mx-8">
              <h4 className="text-white mb-2 font-light">Company</h4>
              <p className="text-white my-1">About</p>
              <p className="text-white my-1">Contact Us</p>
              <p className="text-white my-1">Carrers</p>
              <p className="text-white my-1">Support</p>
            </div>
            <div className="flex flex-col mx-8">
              <h4 className="text-white mb-2 font-light">Legal</h4>
              <p className="text-white my-1">Guidelines</p>
              <p className="text-white my-1">Manage Cookies</p>
              <p className="text-white my-1">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
