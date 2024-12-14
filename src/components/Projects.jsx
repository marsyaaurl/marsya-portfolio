import React from "react";
import "./Projects.css";
import feedshima from "../assets/feedshima.png";
import feedspkkmb from "../assets/feedspkkmb.png";
import Merch from "../assets/merch.png";
import Jakang from "../assets/Jakang.png";
import pawshop from "../assets/pawshop.png";
import stepin from "../assets/stepin.png";
import georgia from "../assets/georgia.png";
import grafolder from "../assets/gra-folder.png";
import uifolder from "../assets/ui-folder.png";
import webfolder from "../assets/web-folder.png";

const folders = [
  {
    image: grafolder,
    link: "#doc-gra"
  },
  {
    image: uifolder,
    link: "#doc-ui"
  },
  {
    image: webfolder,
    link: "doc-web"
  }
]

const graphicDesign = [
    {
      image: feedshima,
      name: "Feeds Instagram HIMA S1 Sistem Informasi UPNVJ",
      narrative: "As a Media and Communication staff in HIMA S1 Sistem Informasi UPNVJ, my primary responsibility was to design and create informational content for social media platforms, particularly Instagram @himas1siupnvj. This role required creativity and attention to detail to ensure the designs effectively conveyed key messages while maintaining a visually appealing aesthetic.",
      link: "https://www.instagram.com/himas1siupnvj/"
    },
    {
      image: feedspkkmb,
      name: "Feeds Instagram PKKMB Fakultas Ilmu Komputer 2024",
      narrative: "As a staff in the Publication, Documentation, and Design division, I was responsible for creating Instagram feeds for @pkkmbfikupnvj. My role focused on designing appealing and engaging content to effectively share information with new students, making them more excited and enthusiastic about the PKKMB event.",
      link: "https://www.instagram.com/pkkmbfikupnvj/"
    },
    {
      image: Merch,
      name: "Merchandise HIMA S1 SI UPNVJ",
      narrative: "As a Media and Communication staff in HIMA S1 Sistem Informasi UPNVJ, I was involved in a project to design merchandise for HIMA, which was sold to students of the Faculty of Computer Science at UPNVJ. This project allowed me to explore creative design for promotional items, ensuring the merchandise was both visually appealing and aligned with the organization's identity.",
      link: ""
    },
    {
      image: Jakang,
      name: "Jaket Prodi S1 Sistem Informasi UPNVJ",
      narrative: "As a Media and Communication staff in HIMA S1 Sistem Informasi UPNVJ, I worked on a project to design and produce program-specific jackets for students of the Information Systems. This project involved creating designs that reflected the program's identity while ensuring they were attractive and functional.",
      link: ""
    }
  ];

  const UIUX = [
    {
      image: pawshop,
      name: "Paw-Shop",
      detail: "by Marsya, Indira, and Shabrina",
      narrative: "Paw-Shop is an online store application dedicated to meeting the needs of pet owners. It offers a wide range of products for pets like cats and dogs, including food, toys, grooming supplies, and accessories. Designed with convenience in mind, Paw-Shop provides an easy-to-navigate interface, allowing users to quickly find and purchase the best items for their beloved pets. The app aims to be a one-stop solution for pet care essentials.",
      link: "https://www.figma.com/proto/Z9TBxDA9MS63Wrhi66n8Vl/Prototype-Paw-Shop?node-id=1-4&starting-point-node-id=1%3A4&t=HQRI3OMvcTlg0BAU-1"
    },
    {
      image: stepin,
      name: "StepIn",
      detail: "by Marsya, Indira, and Ilham",
      narrative: "StepIn is an inclusive route-finding application designed to help users discover the fastest and safest routes for public transportation. The app includes features that prioritize accessibility, such as a customizable interface to support users with disabilities. This allows adjustments to cater to different needs, ensuring a user-friendly experience for everyone. StepIn is committed to inclusivity, making navigation easier and more accessible for all individuals, regardless of their abilities.",
      link: "https://www.figma.com/proto/eIcHyzZMf6uemWAMeNf4h1/UI-%2F-UX?node-id=1271-10564&t=t3VR2d1fzkXH5nBM-1"
    }
  ];

  const website = [
    {
      image: georgia,
      name: "Portfolio of Georgia O’Keeffe",
      detail: "by Marsya, Sabira, Hanna, Quyun, and Raditya",
      narrative: "The Georgia O'Keeffe portfolio website is a dedicated platform showcasing the artist’s life, works, and legacy. It includes a brief biography, a gallery of her iconic paintings with detailed descriptions, and information on exhibitions, where visitors can also purchase tickets directly. The website offers exclusive merchandise inspired by her art, enhancing the connection to her work. Additionally, it features a Community section, allowing members to post personal stories or reflections, fostering engagement among enthusiasts. Posting access is exclusive to membership holders, creating a unique space for fans to connect and share their passion for Georgia O'Keeffe."
    }
  ];

const Projects = () => {
  return(
    <>
      <div className="opening">
        <h1>projects.</h1>
        <div className="folder-container">
          {folders.map((fol, index) => (
            <div className="folder" key={index} onClick={() => window.location.hash = fol.link}>
              <img src={fol.image} />
            </div>
          ))}
        </div>
      </div>

      <div className="orga">
        <div className="title" id="doc-gra">
          <h2>graphic design</h2>
        </div>
        <div className="doc-gra">
          {graphicDesign.map((gra, index) => (
            <div className="doc-gra-container" key={index} onClick={() => window.open(gra.link, '_blank')}>
              <h4>{gra.name}</h4>
              <div className="doc-gra-photo">
                <img src={gra.image} alt={gra.name} />
              </div>
              <div className="text-gra">
                <p><b>{gra.detail}</b></p>
                <p>{gra.narrative}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="orga">
        <div className="title" id="doc-ui">
          <h2>UI/UX</h2>
        </div>
        <div className="doc-gra">
          {UIUX.map((ui, index) => (
            <div className="doc-gra-container" key={index} onClick={() => window.open(ui.link, '_blank')}>
              <h4>{ui.name}</h4>
              <div className="doc-gra-photo">
                <img src={ui.image} alt={ui.name} />
              </div>
              <div className="text-gra">
                <p><b>{ui.detail}</b></p>
                <br />
                <p>{ui.narrative}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="orga">
        <div className="title" id="doc-web">
          <h2>website</h2>
        </div>
        <div className="doc-gra">
          {website.map((web, index) => (
            <div className="doc-gra-container" key={index}>
              <h4>{web.name}</h4>
              <div className="doc-gra-photo">
                <img src={web.image} alt={web.name} />
              </div>
              <div className="text-gra">
                <p><b>{web.detail}</b></p>
                <br />
                <p>{web.narrative}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer-pro">
        <div className="social-links">
          <a
            href="https://id.linkedin.com/in/marsya-aurelia-8632ab285?trk=public_profile_browsemap"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/marsyaurl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://github.com/marsyaaurl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <br />
        <p>Copyright © Marsya Aurelia Syahkira 2024</p>
      </footer>
    </>
  );
};

export default Projects;
