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
import CrisEase from "../assets/CrisEase.png";

function Content() {
  const roles = ["Graphic Designer", "Web Developer", "UI/UX Designer"];

  return (
    <>
      <div className="mt-5 mx-5 flex flex-col items-center md:flex-row md:items-center">
        <img src={img1} className="w-3/4 xs:w-full md:w-1/2 p-6 md:p-12 mx-auto" />
        <div className="p-6 md:p-12 flex flex-col text-center xs:text-center md:text-left">
          <p className="text-secondgreen font-extrabold text-lg md:text-2xl mb-1">
            Jakarta, Indonesia
          </p>
          <p className="text-mainblue font-black text-3xl xs:text-4xl md:text-6xl mb-3">
            marsya aurelia
          </p>
          <p className="text-lg xs:text-xl md:text-xl font-extrabold mb-3 px-3 py-2 rounded-full w-fit mx-auto md:mx-0 bg-thirdyellow text-thirdred">
            <Typewriter words={roles} loop={0} cursor cursorStyle="_" typeSpeed={80} deleteSpeed={50} delaySpeed={1000} />
          </p>
          <p className="font-extralight text-sm xs:text-base md:text-base">
            um hi, i’m marsya and i’m an undergraduate compsci student majoring
            in information systems. i mainly work with react.js and always seek
            for opportunities to learn something new.
          </p>
          <div className="mt-3">
            <p className="text-mainblue font-extrabold text-lg xs:text-xl md:text-xl md:text-left">Languages</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 bg-thirdpink w-fit rounded-full px-4 py-2 mx-auto md:mx-0">
              <i className="fa-brands fa-js text-xl xs:text-2xl md:text-3xl text-secondgreen"></i>
              <i className="fa-brands fa-html5 text-xl xs:text-2xl md:text-3xl text-secondgreen"></i>
              <i className="fa-brands fa-css3-alt text-xl xs:text-2xl md:text-3xl text-secondgreen"></i>
              <i className="fa-solid fa-c text-xl xs:text-2xl md:text-3xl text-secondgreen"></i>
              <i className="fa-brands fa-java text-xl xs:text-2xl md:text-3xl text-secondgreen"></i>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-mainblue font-extrabold text-lg xs:text-xl md:text-xl md:text-left">Frameworks</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 bg-thirdpink w-fit rounded-full px-4 py-2 mx-auto md:mx-0">
              <i className="fa-brands fa-react text-xl xs:text-2xl md:text-3xl text-secondgreen"></i>
              <i className="fa-brands fa-laravel text-xl xs:text-2xl md:text-3xl text-secondgreen"></i>
              <i className="fa-brands fa-node text-xl xs:text-2xl md:text-3xl text-secondgreen"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mx-5 p-6 md:p-12S overflow-hidden">
        <p className="text-black text-2xl xs:text-5xl md:text-4xl font-black">projects</p>
        <div className="flex flex-row gap-4 overflow-x-auto mt-12 no-scrollbar pl-8 pr-0">
          <a href="https://www.figma.com/proto/eIcHyzZMf6uemWAMeNf4h1?node-id=1-3&t=aTIL2ZUAT5dLRG61-6" target="_blank"><img src={StepIn} className="h-32 xs:h-40 md:h-56 object-contain" /></a>
          <a href="https://www.instagram.com/androidupnvj/" target="_blank"><img src={Andro} className="h-32 xs:h-40 md:h-56 object-contain" /></a>
          <a href="https://github.com/marsyaaurl/Georgia_OKeeffe" target="_blank"><img src={webPorto} className="h-32 xs:h-40 md:h-56 object-contain" /></a>
          <a href="https://www.instagram.com/himas1siupnvj/" target="_blank"><img src={HIMA} className="h-32 xs:h-40 md:h-56 object-contain" /></a>
        </div>

        <div className="flex flex-row gap-4 overflow-x-auto mt-0 no-scrollbar pl-8 pr-0">
          <a href="https://www.figma.com/proto/Z9TBxDA9MS63Wrhi66n8Vl?node-id=0-1&t=aTIL2ZUAT5dLRG61-6" target="_blank"><img src={pawshop} className="h-32 xs:h-40 md:h-56 object-contain" /></a>
          <a href="https://github.com/marsyaaurl/Trax" target="_blank"><img src={Trax} className="h-32 xs:h-40 md:h-56 object-contain" /></a>
          <a href="https://www.instagram.com/pkkmbfikupnvj/" target="_blank"><img src={PKKMB} className="h-32 xs:h-40 md:h-56 object-contain" /></a>
          <a href=""><img src={Merch} className="h-32 xs:h-40 md:h-56 object-contain" /></a>
          <a href="https://www.figma.com/proto/1zQV617Tn81PvlYRxe3Och/Workspace?node-id=70-720&t=KuN5xzhNkwvUh9G2-1sss" target="_blank"s><img src={CrisEase} className="h-32 xs:h-40 md:h-56 object-contain" /></a>
        </div>
      </div>
    </>
  );
}

export default Content;