import "../App.css";
import { MoveRight } from "lucide-react";
import StepIn from "../assets/StepIn.png";
import Bayicara from "../assets/bayicara.png";
import Trax from "../assets/Trax.png";
import CrisEase from "../assets/CrisEase.png";
import Georgia from "../assets/webPorto.png";
import NutriSee from "../assets/NutriSee.png";
import ShuffleBattle from "../assets/shufflebattle.png";
import PawShop from "../assets/pawshop.png";
import SertifMage from "../assets/SertifMage.png";
import SertifWeb from "../assets/SertifWeb.png";
import SertifArkav from "../assets/SertifArkav.png";
import SertifTFS from "../assets/SertifTFS.png";
import SeaCatering from "../assets/SeaCatering.png";

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
            <a href="#about">
              <div className="flex w-[300px] md:w-[600px] border-2 text-thirdpink text-sm md:text-xl font-semibold border-thirdpink rounded-2xl px-5 py-2 md:py-4 items-center hover:border-gray-400 hover:text-gray-400">
                <h2>Marsya, who?</h2>
                <MoveRight className="ml-auto text-thirdpink" />
              </div>
            </a>
            <a href="#projects">
              <div className="flex w-[300px] md:w-[600px] border-2 text-mainblue text-sm md:text-xl font-semibold border-mainblue rounded-2xl px-5 py-2 md:py-4 items-center hover:border-gray-400 hover:text-gray-400">
                <h2>What projects?</h2>
                <MoveRight className="ml-auto text-mainblue" />
              </div>
            </a>
            <a href="#certifications">
              <div className="flex w-[300px] md:w-[600px] border-2 text-secondgreen text-sm md:text-xl font-semibold border-secondgreen rounded-2xl px-5 py-2 md:py-4 items-center hover:border-gray-400 hover:text-gray-400">
                <h2>Any certifications?</h2>
                <MoveRight className="ml-auto text-secondgreen" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-7" id="about">
            <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-5 md:w-1/2">
                <h1 className="text-whitefont text-xl md:text-4xl font-bold">About me</h1>
                <p className="text-whitefont text-lg md:text-xl font-medium">
                    I'm an Information Systems undergraduate student with a strong passion for front-end development 
                    and UI/UX design. I enjoy building responsive web applications using React.js and Next.js, and 
                    love translating ideas into user-friendly interfaces with Figma. I'm always eager to learn, 
                    collaborate, and grow through real-world projects.
                </p>
                <div className="flex flex-row gap-x-3 w-full" id="contacts">
                    <a href="https://github.com/marsyaaurl" target="_blank">
                        <div className="flex flex-row gap-x-2 items-center rounded-full px-3 py-1 bg-whitefont hover:bg-gray-400">
                            <i className="fa-brands fa-github text-background text-2xl bg-transparent"></i>
                            <p className="text-background text-md font-semibold bg-transparent">Github</p>
                        </div>
                    </a>
                    <a href="www.linkedin.com/in/marsyaaurl" target="_blank">
                        <div className="flex flex-row gap-x-2 items-center rounded-full px-3 py-1 bg-whitefont hover:bg-gray-400">
                            <i className="fa-brands fa-linkedin text-background text-2xl bg-transparent"></i>
                            <p className="text-background text-md font-semibold bg-transparent">Linkedin</p>
                        </div>
                    </a>
                    <a href="https://instagram.com/marsyaaurl" target="_blank">
                        <div className="flex flex-row gap-x-2 items-center rounded-full px-3 py-1 bg-whitefont hover:bg-gray-400">
                            <i className="fa-brands fa-instagram text-background text-2xl bg-transparent"></i>
                            <p className="text-background text-md font-semibold bg-transparent">Instagram</p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1-qVIfq2VNj1VzvlMkqgQHvdXSqsNQzKE/view?usp=sharing" target="_blank" download>
                        <button className="bg-mainblue text-whitefont hidden md:block font-bold hover:bg-gray-400 rounded-full px-5 py-2 text-md w-fit">Download CV</button>
                    </a>
                </div>
                <a href="https://drive.google.com/file/d/1-qVIfq2VNj1VzvlMkqgQHvdXSqsNQzKE/view?usp=sharing" target="_blank" download>
                    <button className="bg-mainblue text-whitefont font-bold hover:bg-gray-400 rounded-full px-5 py-2 text-md w-fit md:hidden">Download CV</button>
                </a>
            </div>
            <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-3 md:w-1/2">
                <h1 className="text-whitefont md:text-4xl font-bold">Skills</h1>
                <div className="bg-[#2e2e2e] rounded-2xl">
                    <div className="bg-thirdpink text-background font-bold rounded-2xl w-[90%] px-5 py-2">
                        <h1 className="bg-transparent text-xl">React.js</h1>
                    </div>
                </div>
                <div className="bg-[#2e2e2e] rounded-2xl">
                    <div className="bg-secondgreen text-background font-bold rounded-2xl w-[80%] px-5 py-2">
                        <h1 className="bg-transparent text-xl">Next.js</h1>
                    </div>
                </div>
                <div className="bg-[#2e2e2e] rounded-2xl">
                    <div className="bg-mainblue text-background font-bold rounded-2xl w-[97%] px-5 py-2">
                        <h1 className="bg-transparent text-xl">Tailwind CSS</h1>
                    </div>
                </div>
                <div className="bg-[#2e2e2e] rounded-2xl">
                    <div className="bg-thirdyellow text-background font-bold rounded-2xl w-[97%] px-5 py-2">
                        <h1 className="bg-transparent text-xl">Figma</h1>
                    </div>
                </div>
            </div>
          </div>
        <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-5 overflow-x-auto" id="projects">
            <h1 className="text-whitefont text-xl md:text-4xl font-bold">Projects</h1>
            <div className="flex md:flex-row gap-x-5">
                <a href="https://www.figma.com/proto/eIcHyzZMf6uemWAMeNf4h1?node-id=1-3&t=ToIK8zJolOowd7UC-6">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-thirdpink rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={StepIn} className="bg-transparent h-72 w-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">StepIn — Inclusive Route-Finding App</h3>
                            <h4 className="font-semibold text-lg bg-pink-500 px-3 rounded-full text-whitefont">UI/UX Designer</h4>
                            <p className="bg-transparent text-md text-justify">This project aimed to address the lack of inclusive route-finding tools for individuals with 
                                disabilities. I designed a mobile-first application by conducting user research, developing 
                                personas, creating user flows, and building a high-fidelity prototype in Figma. The project 
                                won 3rd Place in the MAGE X ITS 2024 UI/UX Competition.</p>
                            <a href="https://www.figma.com/proto/eIcHyzZMf6uemWAMeNf4h1?node-id=1-3&t=ToIK8zJolOowd7UC-6" className="bg-transparent w-full">
                                <button className="bg-pink-500 px-3 py-1 rounded-xl font-semibold text-xl text-center text-whitefont w-full hover:bg-pink-400">See Details</button>
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://bayicara.vercel.app/">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-secondgreen rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={Bayicara} className="bg-transparent h-auto rounded-xl"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Bayicara – AI-Powered Speech Stimulation Web App</h3>
                            <h4 className="font-semibold text-lg bg-green-600 px-3 rounded-full">Front-End Developer</h4>
                            <p className="bg-transparent text-md text-justify">Bayicara helps parents support early 
                                speech development in toddlers. I developed the front-end of the web app using Next.js 
                                and Tailwind CSS, integrated Gemini AI API to generate personalized stories, and deployed 
                                the app on Vercel. The app also features a milestone-based speech delay detection survey.
                            </p>
                            <a href="https://bayicara.vercel.app/" className="bg-transparent w-full">
                                <button className="bg-green-600 px-3 py-1 rounded-xl font-semibold text-xl text-center text-whitefont w-full hover:bg-green-500">See Details</button>
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/marsyaaurl/Traxhttps://github.com/marsyaaurl/Trax">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-mainblue rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={SeaCatering} className="bg-transparent rounded-lg h-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Sea - Catering Web App</h3>
                            <h4 className="font-semibold text-lg bg-blue-600 px-3 rounded-full">Fullstack Developer</h4>
                            <p className="bg-transparent text-md text-justify">SEA Catering is a healthy meal 
                                subscription service that provides nutritious and balanced daily meals tailored to 
                                different lifestyle needs. With options like diet plans, protein plans, and royal 
                                plans, SEA Catering helps customers maintain a healthy eating routine without the 
                                hassle of cooking. Meals are delivered straight to their door, making it a 
                                convenient choice for those seeking both health and simplicity in their daily diet.
                            </p>
                            <a href="https://github.com/marsyaaurl/Trax" className="bg-transparent w-full">
                                <button className="bg-blue-600 px-3 py-1 rounded-xl font-semibold text-xl text-center text-whitefont w-full hover:bg-blue-500">See Details</button>
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://www.figma.com/proto/v10afGJelWMBymkp1Yp6rr/Workspace?node-id=758-6655&p=f&t=4gIjphUjTcuRisP6-1&scaling=scale-down&content-scaling=fixed&page-id=605%3A7461&starting-point-node-id=609%3A7546&show-proto-sidebar=1">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col h-fit gap-y-2 w-96 bg-thirdyellow rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={NutriSee} className="bg-transparent h-72 w-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">NutriSee – School Nutrition Scan App</h3>
                            <h4 className="font-semibold text-lg bg-yellow-500 px-3 rounded-full">UI/UX Designer</h4>
                            <p className="bg-transparent text-md text-justify">NutriSee is a mobile-first nutrition 
                                monitoring app designed to support the “Makan Bergizi Gratis” (MBG) school meal program. 
                                I designed the UI using Figma through a user-centered approach involving surveys, empathy 
                                mapping, prototyping, and testing with Maze. The app allows students to scan school meals 
                                using image recognition to assess nutritional value (calories, macronutrients) and report 
                                unfit food anonymously. It also features daily consumption history and parental monitoring 
                                to promote transparency and healthier eating habits at school.</p>
                            <a href="https://www.figma.com/proto/v10afGJelWMBymkp1Yp6rr/Workspace?node-id=758-6655&p=f&t=4gIjphUjTcuRisP6-1&scaling=scale-down&content-scaling=fixed&page-id=605%3A7461&starting-point-node-id=609%3A7546&show-proto-sidebar=1" className="bg-transparent w-full">
                                <button className="bg-yellow-500 px-3 py-1 rounded-xl font-semibold text-xl text-center text-whitefont w-full hover:bg-yellow-400">See Details</button>
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://www.figma.com/proto/1zQV617Tn81PvlYRxe3Och/Workspace?node-id=242-136&starting-point-node-id=241%3A910&t=flnDJBFqYL4pHPbJ-1">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col h-fit gap-y-2 w-96 bg-thirdpink rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={CrisEase} className="bg-transparent h-72 w-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Crisease – Disaster Prediction UI App</h3>
                            <h4 className="font-semibold text-lg bg-pink-500 px-3 rounded-full">UI/UX Designer</h4>
                            <p className="bg-transparent text-md text-justify">Crisease is a conceptual mobile UI for 
                                early disaster detection. I designed its interface and alert features with Figma, 
                                focusing on clarity and accessibility to help users respond quickly and safely to 
                                natural disaster risks.</p>
                            <a href="https://www.figma.com/proto/1zQV617Tn81PvlYRxe3Och/Workspace?node-id=242-136&starting-point-node-id=241%3A910&t=flnDJBFqYL4pHPbJ-1" className="bg-transparent w-full">
                                <button className="bg-pink-500 px-3 py-1 rounded-xl font-semibold text-xl text-center text-whitefont w-full hover:bg-pink-400">See Details</button>
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/marsyaaurl/Georgia_OKeeffe">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-secondgreen rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={Georgia} className="bg-transparent h-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Georgia O'Keeffe Artist Portfolio Website</h3>
                            <h4 className="font-semibold text-lg bg-green-600 px-3 rounded-full">Front-End Developer</h4>
                            <p className="bg-transparent text-md text-justify">I developed a multi-page educational website 
                                profiling artist Georgia O’Keeffe using Laravel and Blade. The site includes a biography, 
                                artwork gallery, and exhibition listings, offering an engaging way to explore the artist’s 
                                legacy.
                            </p>
                            <a href="https://github.com/marsyaaurl/Georgia_OKeeffe" className="bg-transparent w-full">
                                <button className="bg-green-600 px-3 py-1 rounded-xl font-semibold text-xl text-center text-whitefont w-full hover:bg-green-500">See Details</button>
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://shuffle-battle.vercel.app/">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-mainblue rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={ShuffleBattle} className="bg-transparent h-auto rounded-xl"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Shuffle Battle – Spotify Playlist Comparator Web App</h3>
                            <h4 className="font-semibold text-lg bg-blue-600 px-3 rounded-full">Front-End Developer</h4>
                            <p className="bg-transparent text-md text-justify">Shuffle Battle is a web application that 
                                compares two Spotify playlists to determine which one is more “underground,” based on 
                                average track popularity. I built the app using React.js and integrated the Spotify Web 
                                API to fetch playlist data and calculate metrics such as popularity scores, track counts, 
                                and artist overlaps.
                            </p>
                            <a href="https://shuffle-battle.vercel.app/" className="bg-transparent w-full">
                                <button className="bg-blue-600 px-3 py-1 rounded-xl font-semibold text-xl text-center text-whitefont w-full hover:bg-blue-500">See Details</button>
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/marsyaaurl/Traxhttps://github.com/marsyaaurl/Trax">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-thirdyellow rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={Trax} className="bg-transparent h-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Trax – Productivity Web App</h3>
                            <h4 className="font-semibold text-lg bg-yellow-500 px-3 rounded-full">Fullstack Developer</h4>
                            <p className="bg-transparent text-md text-justify">Trax is a single-page productivity 
                                app combining task tracking and note-taking for students. I designed and developed 
                                the UI using React.js and Tailwind CSS, and built the backend using Express.js to 
                                handle API routes and data management. I implemented dynamic components and RESTful 
                                endpoints to help users manage their academic responsibilities more efficiently.
                            </p>
                            <a href="https://github.com/marsyaaurl/Trax" className="bg-transparent w-full">
                                <button className="bg-yellow-500 px-3 py-1 rounded-xl font-semibold text-xl text-center text-whitefont w-full hover:bg-blue-500">See Details</button>
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://www.figma.com/proto/Z9TBxDA9MS63Wrhi66n8Vl/Prototype-Paw-Shop?node-id=19-4&starting-point-node-id=1%3A4&t=EHbZpyPycIb1N3Rd-1">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col h-fit gap-y-2 w-96 bg-thirdpink rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={PawShop} className="bg-transparent h-72 w-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Pawshop – Pet Store UI Design</h3>
                            <h4 className="font-semibold text-lg bg-pink-500 px-3 rounded-full">UI/UX Designer</h4>
                            <p className="bg-transparent text-md text-justify">I designed an intuitive mobile 
                                e-commerce interface for a fictional pet supply shop. Using Figma, I created 
                                wireframes and high-fidelity designs that emphasized user journey, consistency, 
                                and accessibility.</p>
                            <a href="https://www.figma.com/proto/Z9TBxDA9MS63Wrhi66n8Vl/Prototype-Paw-Shop?node-id=19-4&starting-point-node-id=1%3A4&t=EHbZpyPycIb1N3Rd-1" className="bg-transparent w-full">
                                <button className="bg-pink-500 px-3 py-1 rounded-xl font-semibold text-xl text-center text-whitefont w-full hover:bg-yellow-400">See Details</button>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-5" id="certifications">
            <h1 className="text-whitefont text-xl md:text-4xl font-bold">Certifications</h1>
            <div className="flex flex-row gap-x-6 overflow-x-auto scrollbar-thin pb-4">
                <div className="flex flex-row w-fit min-w-[600px] bg-thirdpink rounded-3xl px-5 py-7 items-center justify-start">
                    <img src={SertifMage} className="rounded-xl h-56 w-auto" />
                    <div className="bg-transparent flex flex-col gap-y-2 ml-5 max-w-sm">
                        <h3 className="bg-transparent font-black text-xl text-background">MAGE X ITS 2024 UI/UX Competition</h3>
                        <p className="bg-transparent text-md text-background text-justify">
                            Designed an inclusive route-finding mobile interface for individuals with disabilities. Focused on accessibility, clarity, and seamless navigation experience using Figma prototypes and user-centered design principles.
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-fit min-w-[600px] bg-secondgreen rounded-3xl px-5 py-7 items-center justify-start">
                <img src={SertifWeb} className="rounded-xl h-56 w-auto" />
                <div className="bg-transparent flex flex-col gap-y-2 ml-5 max-w-sm">
                    <h3 className="bg-transparent font-black text-xl text-background">Front-End Development Study Club 2024</h3>
                    <p className="bg-transparent text-md text-background text-justify">
                    Learned front-end fundamentals with React.js. Developed a portfolio website using React and Tailwind CSS.
                    </p>
                </div>
                </div>

                <div className="flex flex-row w-fit min-w-[600px] bg-mainblue rounded-3xl px-5 py-7 items-center justify-start">
                <img src={SertifArkav} className="rounded-xl h-56 w-auto" />
                <div className="bg-transparent flex flex-col gap-y-2 ml-5 max-w-sm">
                    <h3 className="bg-transparent font-black text-xl text-background">Arkavidia UX Design Competition</h3>
                    <p className="bg-transparent text-md text-background text-justify">
                    Designed a mobile UI concept for early disaster detection. Emphasized accessible alert systems and clear interfaces to support fast and safe user response.
                    </p>
                </div>
                </div>

                <div className="flex flex-row w-fit min-w-[600px] bg-thirdyellow rounded-3xl px-5 py-7 items-center justify-start">
                <img src={SertifTFS} className="rounded-xl h-56 w-auto" />
                <div className="bg-transparent flex flex-col gap-y-2 ml-5 max-w-sm">
                    <h3 className="bg-transparent font-black text-xl text-background">Tech For Society 2025</h3>
                    <p className="bg-transparent text-md text-background text-justify">
                    Delivered an introductory session on UI/UX design for 10th-grade high school students. Covered basic principles of user-centered design and guided students through simple hands-on prototyping with Figma.
                    </p>
                </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;