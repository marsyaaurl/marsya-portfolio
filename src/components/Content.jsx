import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "../App.css";
import img1 from "../assets/img1.png";
import webPorto from "../assets/webPorto.png";
import Trax from "../assets/Trax.png";
import StepIn from "../assets/StepIn.png";
import PKKMB from "../assets/PKKMB.png";
import pawshop from "../assets/pawshop.png";
import Merch from "../assets/MerchHIMA.png";
import HIMA from "../assets/HIMA.png";
import Andro from "../assets/Andro.png";

function Content() {
  const roles = ["Graphic Designer", "Web Developer", "UI/UX Designer"];

  return (
    <>
      <div className="mt-5 ml-5 flex flex-row mr-5">
        <img src={img1} className="w-1/2 p-12" />
        <div className="p-12 flex flex-col">
          <p className="text-secondgreen font-extrabold text-2xl mb-0">
            Jakarta, Indonesia
          </p>
          <p className="text-mainblue font-black text-7xl mb-3">
            marsya aurelia
          </p>
          <p
            className="text-xl font-extrabold mb-3 px-3 py-2 rounded-full w-fit transition-all duration-700 ease-in-out bg-thirdyellow text-thirdred"
          >
            <Typewriter
              words={roles}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}         
            />
          </p>

          <p className="font-extralight">
            um hi, i’m marsya and i’m an undergraduate compsci student majoring
            in information systems. i mainly work with react.js and always seek
            for opportunities to learn something new.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <p className="text-mainblue font-extrabold text-xl">Languages</p>
            <div className="flex flex-row gap-5 bg-thirdpink w-fit rounded-full px-6 py-2">
                <i class="fa-brands fa-js text-4xl text-secondgreen"></i>
                <i class="fa-brands fa-html5 text-4xl text-secondgreen"></i>
                <i class="fa-brands fa-css3-alt text-4xl text-secondgreen"></i>
                <i class="fa-solid fa-c text-4xl text-secondgreen"></i>
                <i class="fa-brands fa-java text-4xl text-secondgreen"></i>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <p className="text-mainblue font-extrabold text-xl">Frameworks</p>
            <div className="flex flex-row gap-5 bg-thirdpink w-fit rounded-full px-6 py-2">
                <i class="fa-brands fa-react text-4xl text-secondgreen"></i>
                <i class="fa-brands fa-laravel text-4xl text-secondgreen"></i>
                <i class="fa-brands fa-node text-4xl text-secondgreen"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 ml-5 mr-5 p-12 overflow-hidden">
        <p className="text-black text-5xl font-black">projects</p>
        <div className="flex flex-row gap-5 overflow-x-auto mt-20 no-scrollbar ml-32">
          <img src={StepIn} className="h-64 object-contain" />
          <img src={Andro} className="h-64 object-contain" />
          <img src={webPorto} className="h-64 object-contain w-auto" />
          <img src={HIMA} className="h-64 object-contain" />
        </div>
        <div className="flex flex-row gap-5 overflow-x-auto mt-10 no-scrollbar">
          <img src={pawshop} className="h-64 object-contain" />
          <img src={Trax} className="h-64 object-contain" />
          <img src={PKKMB} className="h-64 object-contain w-auto" />
          <img src={Merch} className="h-64 object-contain" />
        </div>
      </div>
    </>
  );
}

export default Content;
