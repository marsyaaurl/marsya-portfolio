import StepIn from "../StepIn.png";
import Bayicara from "../bayicara.png";
import Trax from "../Trax.png";
import CrisEase from "../CrisEase.png";
import Georgia from "../webPorto.png";
import NutriSee from "../NutriSee.png";
import ShuffleBattle from "../shufflebattle.png";
import PawShop from "../pawshop.png";
import SeaCatering from "../SeaCatering.png";
import Next from "../next-js.svg";
import Figma from "../figma.png";
import Gemini from "../gemini.webp";
import Supabase from "../supabase.png";
import React from "../React.webp";
import Laravel from "../laravel.png";
import PHP from "../php.png";
import mysql from "../mysql.png";
import Spotify from "../spotify.png";
import Express from "../express-js.png";
import Sahnam from "../Sahnam.png";
import OpenAI from "../openai.svg";
import Kelana from "../Kelana.png";
import GetJudged from "../GetJudged.png";

export const projects = [
  {
    title: "StepIn — Inclusive Route-Finding App",
    role: "UI/UX Designer",
    roleColor: "bg-pink-600",
    cardColor: "bg-thirdpink",
    image: StepIn,
    link: "https://www.figma.com/proto/eIcHyzZMf6uemWAMeNf4h1",
    description:
      "This project aimed to address the lack of inclusive route-finding tools for individuals with disabilities. I designed a mobile-first application by conducting use reaserch, developing personas, creating user flows, and building a high-fidelity prototype in Figma. The project won 3rd Place in the MAGE X ITS 2024 UI/UX Competition.",
    tech: [{ name: "Figma", icon: Figma }],
  },
  {
    title: "Bayicara – AI Speech Stimulation App",
    role: "Front-End Developer",
    roleColor: "bg-green-700",
    cardColor: "bg-secondgreen",
    image: Bayicara,
    link: "https://bayicara.vercel.app/",
    description:
      "Bayicara helps parents support early speech development in toddlers. I developer the front-end of the web app using Next.js and Tailwind Css, integrated Gemini AI API to generate personalized stories, and deployed the app on Vercel. The app also features a milestone-based speech delay detection survey.",
    tech: [
      { name: "Next.js", icon: Next },
      { name: "React", icon: React },
      { name: "Gemini", icon: Gemini },
    ],
  },
  {
    title: "Sea Catering",
    role: "Fullstack Developer",
    roleColor: "bg-blue-700",
    cardColor: "bg-mainblue",
    image: SeaCatering,
    link: "https://sea-catering-phi.vercel.app/",
    description:
      "SEA Catering is a healthy meal subscription service that provides nutritious and balanced daily meals tailored to different lifestyle needs. With options like diet plans, protein plans, and royal plans, SEA Catering helps customers maintain a healthy eating routine without the hassle of cooking. Melas are delivered straight to their door, making it a convenient choice for those seeking both health and simplicity in their daily diet.",
    tech: [
      { name: "Next.js", icon: Next },
      { name: "React", icon: React },
      { name: "Supabase", icon: Supabase },
    ],
  },
  {
    title: "NutriSee",
    role: "UI/UX Designer",
    roleColor: "bg-yellow-500",
    cardColor: "bg-thirdyellow",
    image: NutriSee,
    link: "https://www.figma.com/",
    description:
      "NutriSee is a mobile-first nutrition monitoring app designed to support the Makan Bergizi Gratis (MBG) school meal program. I designed the UI using Figma through a user-centeres approach involving surveys, empathy mapping, prototyping, and testing with Maze. The app allows students to scan school meals using image recognition to assess nutritional value (calories, macronutrients) and report unfit food anonymously. It also features daily consumption history and parental monitoring to promote transparency and healthier eating habits at school.",
    tech: [{ name: "Figma", icon: Figma }],
  },
  {
    title: "Crisease",
    role: "UI/UX Designer",
    roleColor: "bg-pink-600",
    cardColor: "bg-thirdpink",
    image: CrisEase,
    link: "https://www.figma.com/",
    description:
      "Crisease is a conceptual mobile UI for early disaster detection. I designed its interface and alert features with Figma, focusing on clarity and accessibility to help users respond safely to natural disaster risks.",
    tech: [{ name: "Figma", icon: Figma }],
  },
  {
    title: "Georgia O'Keeffe Portfolio",
    role: "Front-End Developer",
    roleColor: "bg-green-700",
    cardColor: "bg-secondgreen",
    image: Georgia,
    link: "https://github.com/marsyaaurl/Georgia_OKeeffe",
    description:
      "I developed a multi-page educational website profiling artist Georgia O'Keeffe using Laravel and Blade. The site includes a biography, artwork gallery, and exhibition listings, offering an engaging way to explore the artist's legacy.",
    tech: [
      { name: "Laravel", icon: Laravel },
      { name: "PHP", icon: PHP },
      { name: "MySQL", icon: mysql },
    ],
  },
  {
    title: "Shuffle Battle",
    role: "Front-End Developer",
    roleColor: "bg-blue-700",
    cardColor: "bg-mainblue",
    image: ShuffleBattle,
    link: "https://shuffle-battle.vercel.app/",
    description:
      "Shuffle Battle is a web application that compares two Spotify playlists to determine which one is more underground, based on average track popularity. I built the app using React.js and integrated the Spotify Web API to fetch playlist data and calculate metrics such as popularity scores, track counts, and artist overlaps.",
    tech: [
      { name: "React", icon: React },
      { name: "Spotify API", icon: Spotify },
    ],
  },
  {
    title: "Trax",
    role: "Fullstack Developer",
    roleColor: "bg-yellow-500",
    cardColor: "bg-thirdyellow",
    image: Trax,
    link: "https://github.com/marsyaaurl/Trax",
    description:
      "Trax is a single-page productivity app combining task tracking and note-taking for students. I designed and developed the Tailwind CSS, and built the backend using Express.js to handle API routes and data management. I implemented dynamic components and  RESTful endpoints to help users manage their academic responsibilities more efficiently.",
    tech: [
      { name: "React", icon: React },
      { name: "Express", icon: Express },
      { name: "MySQL", icon: mysql },
    ],
  },
  {
    title: "Pawshop",
    role: "UI/UX Designer",
    roleColor: "bg-pink-600",
    cardColor: "bg-thirdpink",
    image: PawShop,
    link: "https://www.figma.com/",
    description:
      "I designed an intuituve mobile e-commerce interface for a fictional pet supply shop. Using Figma, I created wireframes and high-fidelity designs that emphasized user journey, consistency, and accessibility.",
    tech: [{ name: "Figma", icon: Figma }],
  },
  {
    title: "Sahnam",
    role: "Fullstack Developer",
    roleColor: "bg-green-700",
    cardColor: "bg-secondgreen",
    image: Sahnam,
    link: "https://sahnam.vercel.app/",
    description:
      "I developed a website that allows society to invest in plants to support national food stability and improve farmers' welfare. I built this website using Next.js and Supabase.",
    tech: [
      { name: "Next.js", icon: Next },
      { name: "Supabase", icon: Supabase },
    ],
  },
  {
    title: "Kelana",
    image: Kelana,
    role: "UI/UX Designer",
    roleColor: "bg-blue-700",
    cardColor: "bg-mainblue",
    description: "Kelana is a travel exploration app focused on creating accessible and stress-free journeys through personalized, gamified itineraries, open-trip discovery, and immersive 360° virtual tours. Designed with a familiar, content-driven interface, it emphasizes transparency, inclusivity, and authentic travel experiences for modern travelers.",
    link: "https://www.figma.com/proto/5N8VqO5XTuFImuxoof6GqR/Kelana---VWO-Workspace?node-id=1-3&t=RhN1oBTuYMXwvH1n-1",
    tech: [
      { name: "Figma", icon: Figma },
    ],
  },
  {
    title: "GetJudged",
    image: GetJudged,
    role: "Fullstack Developer",
    roleColor: "bg-yellow-500",
    cardColor: "bg-thirdyellow",
    description: "GetJudged is an anonymous web platform where users confess past mistakes or questionable decisions and receive sarcastic, AI-generated verdicts in response. Built with a strong focus on privacy and interaction design, the app turns personal storytelling into an entertaining yet safe AI-powered experience.",
    link: "https://getjudged.vercel.app/",
    tech: [
      { name: "Next.js", icon: Next },
      { name: "Supabase", icon: Supabase },
      { name: "OpenAI API", icon: OpenAI },
    ],
  },
];
