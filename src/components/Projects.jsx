import StepIn from "../assets/StepIn.png";
import Bayicara from "../assets/bayicara.png";
import Trax from "../assets/Trax.png";
import CrisEase from "../assets/CrisEase.png";
import Georgia from "../assets/webPorto.png";
import NutriSee from "../assets/NutriSee.png";
import ShuffleBattle from "../assets/shufflebattle.png";
import PawShop from "../assets/pawshop.png";
import Sahnam from "../assets/Sahnam.png";

function Projects() {
    return(
        <>
            <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-5  overflow-auto no-scrollbar">
                <h1 className="text-whitefont text-xl md:text-4xl font-bold">Projects</h1>
                <div className="flex flex-col md:flex-row gap-x-5">
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-thirdpink rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={StepIn} className="bg-transparent h-72 w-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">StepIn — Inclusive Route-Finding App</h3>
                            <h4 className="bg-transparent font-semibold text-lg bg-pink-500 px-3 rounded-full">UI/UX Designer</h4>
                            <p className="bg-transparent text-md text-justify">This project aimed to address the lack of inclusive route-finding tools for individuals with 
                                disabilities. I designed a mobile-first application by conducting user research, developing 
                                personas, creating user flows, and building a high-fidelity prototype in Figma. The project 
                                won 3rd Place in the MAGE X ITS 2024 UI/UX Competition.</p>
                        </div>
                    </div>
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-secondgreen rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={Bayicara} className="bg-transparent h-auto rounded-xl"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Bayicara – AI-Powered Speech Stimulation Web App</h3>
                                <h4 className="bg-transparent font-semibold text-lg bg-green-600 px-3 rounded-full">Front-End Developer</h4>
                                <p className="bg-transparent text-md text-justify">Bayicara helps parents support early 
                                    speech development in toddlers. I developed the front-end of the web app using Next.js 
                                    and Tailwind CSS, integrated Gemini AI API to generate personalized stories, and deployed 
                                    the app on Vercel. The app also features a milestone-based speech delay detection survey.
                                </p>
                        </div>
                    </div>
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-mainblue rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={Trax} className="bg-transparent h-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Trax – Productivity Web App</h3>
                                <h4 className="bg-transparent font-semibold text-lg bg-blue-600 px-3 rounded-full">Fullstack Developer</h4>
                                <p className="bg-transparent text-md text-justify">Trax is a single-page productivity 
                                    app combining task tracking and note-taking for students. I designed and developed 
                                    the UI using React.js and Tailwind CSS, and built the backend using Express.js to 
                                    handle API routes and data management. I implemented dynamic components and RESTful 
                                    endpoints to help users manage their academic responsibilities more efficiently.
                                </p>
                        </div>
                    </div>
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col h-fit gap-y-2 w-96 bg-thirdyellow rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={NutriSee} className="bg-transparent h-72 w-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">NutriSee – School Nutrition Scan App</h3>
                            <h4 className="bg-transparent font-semibold text-lg bg-yellow-500 px-3 rounded-full">UI/UX Designer</h4>
                            <p className="bg-transparent text-md text-justify">NutriSee is a mobile-first nutrition 
                                monitoring app designed to support the “Makan Bergizi Gratis” (MBG) school meal program. 
                                I designed the UI using Figma through a user-centered approach involving surveys, empathy 
                                mapping, prototyping, and testing with Maze. The app allows students to scan school meals 
                                using image recognition to assess nutritional value (calories, macronutrients) and report 
                                unfit food anonymously. It also features daily consumption history and parental monitoring 
                                to promote transparency and healthier eating habits at school.</p>
                        </div>
                    </div>
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col h-fit gap-y-2 w-96 bg-thirdpink rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={CrisEase} className="bg-transparent h-72 w-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Crisease – Disaster Prediction UI App</h3>
                            <h4 className="bg-transparent font-semibold text-lg bg-pink-500 px-3 rounded-full">UI/UX Designer</h4>
                            <p className="bg-transparent text-md text-justify">Crisease is a conceptual mobile UI for 
                                early disaster detection. I designed its interface and alert features with Figma, 
                                focusing on clarity and accessibility to help users respond quickly and safely to 
                                natural disaster risks.</p>
                        </div>
                    </div>
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-secondgreen rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={Georgia} className="bg-transparent h-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Georgia O'Keeffe Artist Portfolio Website</h3>
                                <h4 className="bg-transparent font-semibold text-lg bg-green-600 px-3 rounded-full">Front-End Developer</h4>
                                <p className="bg-transparent text-md text-justify">I developed a multi-page educational website 
                                    profiling artist Georgia O’Keeffe using Laravel and Blade. The site includes a biography, 
                                    artwork gallery, and exhibition listings, offering an engaging way to explore the artist’s 
                                    legacy.
                                </p>
                        </div>
                    </div>
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-mainblue rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={ShuffleBattle} className="bg-transparent h-auto rounded-xl"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Shuffle Battle – Spotify Playlist Comparator Web App</h3>
                                <h4 className="bg-transparent font-semibold text-lg bg-blue-600 px-3 rounded-full">Front-End Developer</h4>
                                <p className="bg-transparent text-md text-justify">Shuffle Battle is a web application that 
                                    compares two Spotify playlists to determine which one is more “underground,” based on 
                                    average track popularity. I built the app using React.js and integrated the Spotify Web 
                                    API to fetch playlist data and calculate metrics such as popularity scores, track counts, 
                                    and artist overlaps.
                                </p>
                        </div>
                    </div>
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col h-fit gap-y-2 w-96 bg-thirdyellow rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={PawShop} className="bg-transparent h-72 w-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Pawshop – Pet Store UI Design</h3>
                            <h4 className="bg-transparent font-semibold text-lg bg-yellow-500 px-3 rounded-full">UI/UX Designer</h4>
                            <p className="bg-transparent text-md text-justify">I designed an intuitive mobile 
                                e-commerce interface for a fictional pet supply shop. Using Figma, I created 
                                wireframes and high-fidelity designs that emphasized user journey, consistency, 
                                and accessibility.</p>
                        </div>
                    </div>
                    <div className="flex-none flex-col md:flex-row gap-x-5 h-fit">
                        <div className="flex flex-col gap-y-2 w-96 bg-secondgreen rounded-3xl px-5 py-7 items-center justify-center">
                            <img src={Sahnam} className="bg-transparent h-auto"/>
                            <h3 className="bg-transparent font-black text-xl text-center">Sahnam</h3>
                                <h4 className="bg-transparent font-semibold text-lg bg-green-600 px-3 rounded-full">Fullstack Developer</h4>
                                <p className="bg-transparent text-md text-justify">I developed a website 
                                    that allows society to invest in plants to support national food 
                                    stability and improve farmers’ welfare. I built this website using 
                                    Next.js and Supabase.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;