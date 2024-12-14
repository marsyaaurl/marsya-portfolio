import React from "react";
import "./Experiences.css";
import MPKImage from "../assets/MPK 2.jpeg";
import GUImage from "../assets/Girl Up.jpeg";
import AndroImage from "../assets/KSM ANDROID.png";
import HimaImage from "../assets/HIMA.jpg";
import Mage from "../assets/684551.jpg";
import PKKMBFImage from "../assets/PKKMBF.jpg";
import FIKFAIRImage from "../assets/fikfair.png";
import OPERAImage from "../assets/logo opera.png";
import orgfolder from "../assets/org-folder.png";
import awafolder from "../assets/awa-folder.png";
import volfolder from "../assets/vol-folder.png";

const folders = [
  {
    image: orgfolder,
    link: "#doc-org"
  },
  {
    image: awafolder,
    link: "#doc-awr"
  },
  {
    image: volfolder,
    link: "#doc-vol"
  }
]

const organizations = [
  {
    narrative: "Being part of this organization has enhanced my organizational management skills while refining my collaboration and communication abilities. Serving in the Media and Communication department also provided valuable experience in graphic design, fostering both personal and professional growth alongside my peers.",
    image: HimaImage,
    name: "HIMA S1 Sistem Informasi UPNVJ",
    detail: "Staff of Media and Communication",
  },
  {
    narrative: "I joined Girl Up UPNVJ to support women's issues and gender equality. Driven to understand the challenges women face, I contributed to raising awareness, supporting empowerment initiatives, and promoting equality and inclusivity. I also gained new perspectives on women's issues and needs, broadening my understanding and advocacy efforts.",
    image: GUImage,
    name: "Girl Up UPNVJ",
    detail: "Staff of Program and Event",
  },
  {
    narrative: "KSM Android UPNVJ was the first organization I joined in college, aligning closely with my Information Systems major. It provided opportunities to deepen my knowledge of technology, collaborate with experienced peers, and grow within a supportive community. I also learned Kotlin basics and gained foundational frontend web development skills.",
    image: AndroImage,
    name: "KSM Android UPNVJ",
    detail: "Member",
  },
  {
    narrative: "I began my organizational journey in high school as a member of MPK SMAN 89 Jakarta, where I developed skills in teamwork, communication, and leadership. I organized major events like the student council election, strengthening my event coordination and problem-solving abilities.",
    image: MPKImage,
    name: "MPK SMAN 89 Jakarta",
    detail: "KOMISI A: Aspirasi dan Interaksi",
  },
];

const awardings = [
  {
    narrative: "My team won 3rd place in the MAGE X UI/UX Competition by ITS with StepIn, an inclusive route-finding app for individuals with disabilities. This experience deepened my understanding of UI/UX principles and taught me to design intuitive, user-friendly solutions to improve public transportation accessibility.",
    image: Mage,
    name: '3rd Place UI/UX Competition',
    detail: 'MAGE X by Institut Teknologi Sepuluh September',
  }
]

const volunteering = [
  {
    narrative: "I volunteered in the Publication, Documentation, and Design division for PKKMB FIK UPNVJ, enhancing my graphic design and documentation skills. Collaborating with a diverse team strengthened my teamwork abilities while contributing to a major university event.",
    image: PKKMBFImage,
    name: "PKKMB Fakultas Ilmu Komputer UPNVJ 2024",
    detail: "Staff of Publication, Documentation, and Design",
  },
  {
    narrative: "I volunteered as the PIC for the programming competition at FIKFAIR 2024, a national event by the Faculty. This role enhanced my event management, communication, and teamwork skills while providing experience in organizing large-scale events and using competition platforms.",
    image: FIKFAIRImage,
    name: "FIKFAIR 2024",
    detail: "PIC of Competitive Programming Competition",
  },
  {
    narrative: "I volunteered for KSM Android's Open Recruitment event, assisting with the booth, serving as MC, and conducting interviews. This experience improved my public speaking, event coordination, and communication skills while engaging in the recruitment process.",
    image: OPERAImage,
    name: "OPERA",
    detail: "Staff of Event",
  }
];

function Experiences() {
  return (
    <>
      <div className="opening">
        <h1>experiences.</h1>
        <div className="folder-container">
          {folders.map((fol, index) => (
            <div className="folder" key={index} onClick={() => window.location.hash = fol.link}>
              <img src={fol.image} />
            </div>
          ))}
        </div>
      </div>

      <div className="orga">
        <div className="title" id="doc-org">
          <h2>organizations</h2>
        </div>
        <div className="doc-org">
          {organizations.map((org, index) => (
            <>
              <div className="doc-org-container" key={index}>
                <img src={org.image} alt={org.name} />
                <div className="text">
                  <h4>{org.name}</h4>
                  <p><b>{org.detail}</b></p>
                  <br />
                  <p>{org.narrative}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="orga">
        <div className="title" id="doc-awr">
          <h2>awardings</h2>
        </div>
        <div className="doc-org">
          {awardings.map((awr, index) => (
            <div className="doc-org-container" key={index}>
              <div className="doc-org-photo">
                <img src={awr.image} alt={awr.name} />
              </div>
              <div className="text">
                <h4>{awr.name}</h4>
                <p><b>{awr.detail}</b></p>
                <br />
                <p>{awr.narrative}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="orga">
        <div className="title" id="doc-vol">
          <h2>volunteering</h2>
        </div>
        <div className="doc-org">
          {volunteering.map((vol, index) => (
            <div className="doc-org-container" key={index}>
              <div className="doc-org-photo">
                <img src={vol.image} alt={vol.name} />
              </div>
              <div className="text">
                <h4>{vol.name}</h4>
                <p><b>{vol.detail}</b></p>
                <br />
                <p>{vol.narrative}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer-exp">
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
}

export default Experiences;
