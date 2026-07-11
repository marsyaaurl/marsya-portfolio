import { useState } from 'react';
import { X, ExternalLink, Filter, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

function ProjectsSection() {
  const { projects } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { name: 'All', id: 'all' },
    { name: 'UI/UX Design', id: 'uiux' },
    { name: 'Front-End', id: 'frontend' },
    { name: 'Back-End', id: 'backend' },
    { name: 'Full-Stack', id: 'fullstack' },
    { name: 'Mobile App', id: 'mobile' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-none border-t border-border/40 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-5xl font-black text-foreground">Projects</h2>
          <span className="text-md font-bold tracking-wider text-muted-foreground">My Creative Output</span>
        </div>

        {/* Filter Tabs scroll container */}
        <div className="w-full md:w-auto overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex flex-row gap-2 glass-card p-1.5 rounded-2xl md:rounded-full border border-white/50 w-max md:w-fit">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-foreground text-background shadow-md'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/30'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Showroom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => {
          const isDesign = project.category === 'uiux';

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white p-4 rounded-[2.25rem] border border-border/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col gap-4 cursor-pointer"
            >
              {/* Image Preview */}
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-video w-full bg-muted/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/logo.png";
                  }}
                />
              </div>

              {/* Card Details */}
              <div className="flex flex-col gap-2.5 px-1 pb-1">

                {/* Role / Subtitle Badge & Tech Stack Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit ${isDesign
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-primary text-primary-foreground'
                    }`}>
                    {project.role}
                  </span>

                  {/* Tech stack mini icons */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex -space-x-1.5 overflow-hidden">
                      {project.tech.slice(0, 3).map((t, idx) => (
                        <div key={idx} className="w-6 h-6 rounded-full bg-white border border-border/40 p-0.5 flex items-center justify-center" title={t.name}>
                          <img src={t.icon} className="w-full h-full object-contain bg-transparent" alt={t.name} />
                        </div>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="w-6 h-6 rounded-full bg-muted border border-border/40 flex items-center justify-center text-[8px] font-bold text-muted-foreground">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Title & Action Button Row */}
                <div className="flex justify-between items-center gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-foreground line-clamp-1 leading-snug">
                    {project.title}
                  </h3>

                  {/* Circular Arrow Button */}
                  <button
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-sm ${isDesign
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      : 'bg-primary text-primary-foreground hover:bg-primary/80'
                      }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg">No projects found in this category.</p>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-foreground/25 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-white shadow-2xl p-6 md:p-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-white/80 text-foreground border border-border/40 rounded-full p-2 hover:bg-foreground hover:text-background transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="relative overflow-hidden aspect-video bg-white/30 rounded-2xl flex items-center justify-center p-6 mb-6 border border-white/50">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/logo.png";
                }}
              />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase ${selectedProject.category === 'uiux' ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'
                  }`}>
                  {selectedProject.role}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                {selectedProject.title}
              </h2>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-justify">
                {selectedProject.description}
              </p>

              {/* Tech Stack */}
              {selectedProject.tech && selectedProject.tech.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/60 border border-white/80 px-3 py-1.5 rounded-full shadow-sm">
                        <img src={t.icon} className="w-5 h-5 object-contain" alt={t.name} />
                        <span className="text-xs font-semibold text-foreground">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visit Link */}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full mt-6 bg-foreground text-background font-bold py-3.5 rounded-2xl hover:bg-foreground/90 transition-colors shadow-md shadow-foreground/10"
                >
                  <span>Visit Project</span>
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
