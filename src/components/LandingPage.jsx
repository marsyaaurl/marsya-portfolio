import "../App.css";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
// import Contacts from "./Contacts";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col gap-y-44">
        <div className="flex flex-col items-center justify-center h-screen gap-y-7">
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h3 className="text-gray-400 text-center font-semibold text-md md:text-xl">👋Hello/Halo!</h3>
            <h1 className="text-whitefont text-center font-bold text-2xl md:text-5xl">My name is Marsya Aurelia</h1>
            <h2 className="text-gray-400 text-center font-bold text-lg md:text-2xl">I am a Front-End Development and UI/UX Design Enthusiast</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <Link to="/About">
              <div className="flex w-[300px] md:w-[600px] border-2 text-thirdpink text-sm md:text-xl font-semibold border-thirdpink rounded-2xl px-5 py-2 md:py-4 items-center hover:border-gray-400 hover:text-gray-400">
                <h2>Marsya, who?</h2>
                <MoveRight className="ml-auto text-thirdpink" />
              </div>
            </Link>
            <Link to="/Projects">
              <div className="flex w-[300px] md:w-[600px] border-2 text-mainblue text-sm md:text-xl font-semibold border-mainblue rounded-2xl px-5 py-2 md:py-4 items-center hover:border-gray-400 hover:text-gray-400">
                <h2>What projects?</h2>
                <MoveRight className="ml-auto text-mainblue" />
              </div>
            </Link>
            <Link to="/Contacts">
              <div className="flex w-[300px] md:w-[600px] border-2 text-secondgreen text-sm md:text-xl font-semibold border-secondgreen rounded-2xl px-5 py-2 md:py-4 items-center hover:border-gray-400 hover:text-gray-400">
                <h2>Can I reach you out by any chance?</h2>
                <MoveRight className="ml-auto text-secondgreen" />
              </div>
            </Link>
          </div>
        </div>
        <About />
        <Projects />
          {/* <Contacts /> */}
      </div>
    </>
  );
}

export default LandingPage;