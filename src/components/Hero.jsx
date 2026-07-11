import { ArrowDown, Github, Linkedin, Instagram, Download, Mail } from 'lucide-react';

function Hero() {
  const skills = [
    { name: 'Next.js', level: 90, color: 'bg-primary text-primary-foreground' },
    { name: 'React.js', level: 85, color: 'bg-primary text-primary-foreground' },
    { name: 'Typescript', level: 85, color: 'bg-secondary text-secondary-foreground' },
    { name: 'Express.js / Hono.js', level: 80, color: 'bg-secondary text-secondary-foreground' },
    { name: 'Go', level: 60, color: 'bg-primary text-primary-foreground' },
    { name: 'Figma', level: 90, color: 'bg-primary text-primary-foreground' },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 pt-32 lg:pt-28 pb-16 overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/30 blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary/35 blur-3xl -z-10 animate-float-delayed"></div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Left Side: Avatar, Name and Action Buttons */}
        <div className="lg:w-[35%] w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <img
            src="/images/Photo_Marsya.jpg"
            alt="Marsya Aurelia"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-[2rem] border-4 border-white shadow-lg object-cover hover:scale-105 transition-transform duration-300 animate-fade-in-up"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/profile-placeholder.png";
            }}
          />

          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-foreground leading-[1.15] animate-fade-in-up">
              hello! i'm <span className="font-krona tracking-normal text-3xl md:text-4xl text-foreground font-bold block mt-1">Marsya Aurelia</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-medium max-w-md animate-fade-in-up">
              I am a <span className="text-primary font-semibold">Software Developer</span> and <span className="text-secondary font-semibold">UI/UX Designer</span>
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start w-full">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary-foreground transition-colors font-bold text-xs shadow-sm"
            >
              My Portfolio &rarr;
            </a>
            <a
              href="#experiences"
              className="px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary-foreground text-white transition-colors font-bold text-xs text-foreground/80"
            >
              Work Experiences &rarr;
            </a>
          </div>
        </div>

        {/* Right Side: About Card contained in solid white */}
        <div className="lg:w-[65%] w-full">
          <div className="w-full bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-black/[0.02] border border-border/50 flex flex-col gap-6 animate-fade-in-up">

            {/* About Title */}
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-black text-foreground">About Me</h2>
            </div>

            {/* About Bio Text */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
              I'm an enthusiastic Information Systems student passionate about Software Development. Experienced in building
              responsive web apps with React.js and Next.js, and crafting user interfaces using Figma. Also familiar with
              backend development using Go and Hono.js, and always eager to learn, collaborate, and grow through handson projects
              and real-world challenges.
            </p>

            {/* Socials & Download CV */}
            <div className="flex flex-wrap gap-2.5 items-center">
              <a
                href="https://github.com/marsyaaurl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-secondary hover:bg-secondary text-secondary-foreground transition-colors"
                title="Github"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/marsyaaurl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-secondary hover:bg-secondary text-secondary-foreground transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com/marsyaaurl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-secondary hover:bg-secondary text-secondary-foreground transition-colors"
                title="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:marsyaaurelia@gmail.com"
                className="p-2 rounded-full border border-secondary hover:bg-secondary text-secondary-foreground transition-colors"
                title="Email"
              >
                <Mail size={16} />
              </a>

              <span className="w-px h-6 bg-border mx-1"></span>

              <a
                href="https://drive.google.com/file/d/1ozXYj4bwR2pdSmDh_PTozL32IiBixaPz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-foreground text-white hover:bg-primary transition-colors font-bold text-xs shadow-sm"
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border/60"></div>

            {/* Skills grid */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">My Toolbox</h3>
              <div className="grid grid-cols-2 gap-3.5">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5 p-3 rounded-2xl bg-muted/30 border border-muted/50">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/70 rounded-full overflow-hidden p-0.5 border border-border shadow-inner">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;