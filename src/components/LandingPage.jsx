import { useState } from "react";
import { MoveRight, X, ExternalLink } from "lucide-react";
import SertifMage from "../assets/SertifMage.png";
import SertifWeb from "../assets/SertifWeb.png";
import SertifArkav from "../assets/SertifArkav.png";
import SertifTFS from "../assets/SertifTFS.png";
import { projects } from "../assets/data/projects";

function LandingPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-background text-whitefont">
      <div className="flex flex-col gap-y-44">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center h-screen gap-y-7 px-5">
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h3 className="text-gray-400 text-center font-semibold text-md md:text-xl">
              👋Hello/Halo!
            </h3>
            <h1 className="text-white text-center font-bold text-2xl md:text-5xl">
              My name is Marsya Aurelia
            </h1>
            <h2 className="text-gray-400 text-center font-bold text-lg md:text-2xl">
              I am a Front-End Development and UI/UX Design Enthusiast
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <a href="#about">
              <div className="flex w-[300px] md:w-[600px] border-2 text-thirdpink text-sm md:text-xl font-semibold border-thirdpink rounded-2xl px-5 py-2 md:py-4 items-center hover:border-gray-400 hover:text-gray-400 transition">
                <h2>Marsya, who?</h2>
                <MoveRight className="ml-auto" />
              </div>
            </a>
            <a href="#projects">
              <div className="flex w-[300px] md:w-[600px] border-2 text-mainblue text-sm md:text-xl font-semibold border-mainblue rounded-2xl px-5 py-2 md:py-4 items-center hover:border-gray-400 hover:text-gray-400 transition">
                <h2>What projects?</h2>
                <MoveRight className="ml-auto" />
              </div>
            </a>
            <a href="#certifications">
              <div className="flex w-[300px] md:w-[600px] border-2 text-secondgreen text-sm md:text-xl font-semibold border-secondgreen rounded-2xl px-5 py-2 md:py-4 items-center hover:border-gray-400 hover:text-gray-400 transition">
                <h2>Any certifications?</h2>
                <MoveRight className="ml-auto" />
              </div>
            </a>
          </div>
        </div>

        {/* About Section */}
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
              <a href="https://github.com/marsyaaurl" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row gap-x-2 items-center rounded-full px-3 py-1 bg-whitefont hover:bg-gray-400 transition">
                  <i className="fa-brands fa-github text-background text-2xl bg-transparent"></i>
                  <p className="text-background text-md font-semibold bg-transparent">Github</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/marsyaaurl" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row gap-x-2 items-center rounded-full px-3 py-1 bg-whitefont hover:bg-gray-400 transition">
                  <i className="fa-brands fa-linkedin text-background text-2xl bg-transparent"></i>
                  <p className="text-background text-md font-semibold bg-transparent">Linkedin</p>
                </div>
              </a>
              <a href="https://instagram.com/marsyaaurl" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row gap-x-2 items-center rounded-full px-3 py-1 bg-whitefont hover:bg-gray-400 transition">
                  <i className="fa-brands fa-instagram text-background text-2xl bg-transparent"></i>
                  <p className="text-background text-md font-semibold bg-transparent">Instagram</p>
                </div>
              </a>
              <a href="https://drive.google.com/file/d/1-qVIfq2VNj1VzvlMkqgQHvdXSqsNQzKE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="bg-mainblue text-whitefont hidden md:block font-bold hover:bg-gray-400 transition rounded-full px-5 py-2 text-md w-fit">
                  Download CV
                </button>
              </a>
            </div>
            <a href="https://drive.google.com/file/d/1-qVIfq2VNj1VzvlMkqgQHvdXSqsNQzKE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="bg-mainblue text-whitefont font-bold hover:bg-gray-400 transition rounded-full px-5 py-2 text-md w-fit md:hidden">
                Download CV
              </button>
            </a>
          </div>
          <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-3 md:w-1/2">
            <h1 className="text-whitefont text-xl md:text-4xl font-bold">Skills</h1>
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

        {/* Projects Section */}
        <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-5" id="projects">
          <h1 className="text-whitefont text-xl md:text-4xl font-bold">Projects</h1>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <div className={`${project.cardColor} rounded-3xl overflow-hidden hover:scale-[1.02] transition duration-300`}>
                  <div className="relative overflow-hidden bg-transparent p-5">
                    <img
                      src={project.image}
                      className="w-full h-auto rounded-2xl object-contain bg-transparent"
                      alt={project.title}
                    />
                  </div>
                  
                  <div className="px-5 pb-6 flex flex-col gap-y-3 bg-transparent">
                    <h3 className="font-black text-xl text-center bg-transparent text-background">
                      {project.title}
                    </h3>
                    
                    <h4 className={`font-semibold text-sm ${project.roleColor} px-3 py-1 rounded-full text-whitefont w-fit mx-auto bg-transparent`}>
                      {project.role}
                    </h4>

                    <div className="flex flex-wrap gap-3 justify-center bg-transparent">
                      {project.tech?.map((tech, i) => (
                        <div key={i} className="flex flex-col items-center bg-transparent">
                          <img src={tech.icon} className="w-8 h-auto bg-transparent" alt={tech.name} />
                          <p className="text-xs bg-transparent text-background">{tech.name}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`w-full ${project.roleColor} text-whitefont font-semibold py-2 rounded-lg hover:opacity-80 transition`}
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="flex flex-col px-5 md:px-10 md:py-20 gap-y-5" id="certifications">
          <h1 className="text-whitefont text-xl md:text-4xl font-bold">Certifications</h1>
          <div className="flex flex-row gap-x-6 overflow-x-auto pb-4">
            <div className="flex flex-row w-fit min-w-[600px] bg-thirdpink rounded-3xl px-5 py-7 items-center justify-start">
              <img src={SertifMage} className="rounded-xl h-56 w-auto bg-transparent" alt="MAGE Certificate" />
              <div className="flex flex-col gap-y-2 ml-5 max-w-sm bg-transparent">
                <h3 className="font-black text-xl text-background bg-transparent">MAGE X ITS 2024 UI/UX Competition</h3>
                <p className="text-md text-background text-justify bg-transparent">
                  Designed an inclusive route-finding mobile interface for individuals with disabilities. Focused on accessibility, clarity, and seamless navigation experience using Figma prototypes and user-centered design principles.
                </p>
              </div>
            </div>

            <div className="flex flex-row w-fit min-w-[600px] bg-secondgreen rounded-3xl px-5 py-7 items-center justify-start">
              <img src={SertifWeb} className="rounded-xl h-56 w-auto bg-transparent" alt="Web Dev Certificate" />
              <div className="flex flex-col gap-y-2 ml-5 max-w-sm bg-transparent">
                <h3 className="font-black text-xl text-background bg-transparent">Front-End Development Study Club 2024</h3>
                <p className="text-md text-background text-justify bg-transparent">
                  Learned front-end fundamentals with React.js. Developed a portfolio website using React and Tailwind CSS.
                </p>
              </div>
            </div>

            <div className="flex flex-row w-fit min-w-[600px] bg-mainblue rounded-3xl px-5 py-7 items-center justify-start">
              <img src={SertifArkav} className="rounded-xl h-56 w-auto bg-transparent" alt="Arkavidia Certificate" />
              <div className="flex flex-col gap-y-2 ml-5 max-w-sm bg-transparent">
                <h3 className="font-black text-xl text-background bg-transparent">Arkavidia UX Design Competition</h3>
                <p className="text-md text-background text-justify bg-transparent">
                  Designed a mobile UI concept for early disaster detection. Emphasized accessible alert systems and clear interfaces to support fast and safe user response.
                </p>
              </div>
            </div>

            <div className="flex flex-row w-fit min-w-[600px] bg-thirdyellow rounded-3xl px-5 py-7 items-center justify-start">
              <img src={SertifTFS} className="rounded-xl h-56 w-auto bg-transparent" alt="TFS Certificate" />
              <div className="flex flex-col gap-y-2 ml-5 max-w-sm bg-transparent">
                <h3 className="font-black text-xl text-background bg-transparent">Tech For Society 2025</h3>
                <p className="text-md text-background text-justify bg-transparent">
                  Delivered an introductory session on UI/UX design for 10th-grade high school students. Covered basic principles of user-centered design and guided students through simple hands-on prototyping with Figma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2e2e2e] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-4 right-4 float-right bg-whitefont text-background rounded-full p-2 hover:bg-gray-400 transition z-10"
            >
              <X size={24} className="bg-transparent"/>
            </button>

            <div className="p-8 bg-transparent">
              <div className="bg-transparent mb-6">
                <img
                  src={selectedProject.image}
                  className="w-full h-64 object-contain rounded-2xl bg-transparent"
                  alt={selectedProject.title}
                />
              </div>

              <h2 className="text-3xl font-bold text-whitefont mb-3 bg-transparent">
                {selectedProject.title}
              </h2>

              <span className={`${selectedProject.roleColor} text-whitefont text-sm px-4 py-2 rounded-full inline-block mb-4 font-semibold`}>
                {selectedProject.role}
              </span>

              <p className="text-whitefont text-base leading-relaxed mb-6 bg-transparent">
                {selectedProject.description}
              </p>

              <div className="mb-6 bg-transparent">
                <h3 className="text-xl font-bold text-whitefont mb-3 bg-transparent">Tech Stack</h3>
                <div className="flex flex-wrap gap-3 bg-transparent">
                  {selectedProject.tech?.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg">
                      <img src={tech.icon} className="w-6 h-6 rounded bg-transparent" alt={tech.name} />
                      <span className="text-sm text-whitefont font-medium bg-transparent">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-whitefont text-background font-bold py-3 rounded-xl hover:bg-gray-400 transition"
              >
                Visit Project
                <ExternalLink size={20} className="bg-transparent"/>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;