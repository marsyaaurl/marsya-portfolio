import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

function ExperiencesSection() {
  const { experiences } = usePortfolio();

  // Keep list in original JSON order (newest to oldest, showing latest on the left)
  const sortedExperiences = [...experiences];

  const renderDescription = (desc) => {
    if (Array.isArray(desc)) {
      return (
        <ul className="list-disc pl-4 text-xs sm:text-sm text-muted-foreground/90 space-y-1.5 mt-1 bg-transparent">
          {desc.map((bullet, idx) => (
            <li key={idx} className="leading-relaxed text-justify bg-transparent">{bullet}</li>
          ))}
        </ul>
      );
    }
    return (
      <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed text-justify mt-1 bg-transparent">
        {desc}
      </p>
    );
  };

  return (
    <section id="experiences" className="py-24 px-6 md:px-12 max-w-none border-t border-border/40 w-full overflow-hidden">
      <div className="flex flex-col gap-2 items-center text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-foreground">Experiences</h2>
        <span className="text-md font-bold tracking-wider text-muted-foreground">My Career Journey</span>
      </div>

      {/* Horizontal Snap Scroll list - centers on large screens if <= 4 items, scrolls if > 4 */}
      <div
        className={`flex flex-row overflow-x-auto gap-6 pb-6 pt-6 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing relative ${sortedExperiences.length <= 4 ? 'lg:justify-center' : 'justify-start'
          }`}
      >
        {sortedExperiences.map((exp, index) => {
          const isEducation = exp.type === 'education';

          return (
            <div
              key={exp.id}
              className="relative flex-shrink-0 w-[280px] sm:w-[380px] md:w-[430px] snap-center pt-10 flex flex-col bg-transparent"
            >
              {/* Timeline Connector Dot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center z-20 bg-white shadow-sm">
                {isEducation ? (
                  <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <GraduationCap size={12} className="bg-transparent" />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                    <Briefcase size={11} className="bg-transparent" />
                  </div>
                )}
              </div>

              {/* Connecting Lines */}
              {index !== 0 && (
                <div className="absolute top-[15px] left-0 right-1/2 h-0.5 bg-border z-10"></div>
              )}
              {index !== sortedExperiences.length - 1 && (
                <div className="absolute top-[15px] left-1/2 right-0 h-0.5 bg-border z-10"></div>
              )}

              {/* Card Box */}
              <div className="p-6 rounded-3xl glass-card flex flex-col justify-between border border-white/50 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex flex-col gap-4 bg-transparent">

                  {/* Role, Company & Period Header */}
                  <div className="flex flex-col gap-1.5 bg-transparent">
                    <h3 className="font-bold text-lg sm:text-xl text-secondary-foreground bg-transparent leading-snug">
                      {exp.role}
                    </h3>

                    {/* Company & Period on one line */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-transparent pb-2 border-b border-border/30">
                      <h4 className="text-xs sm:text-sm font-bold text-primary-foreground bg-transparent">
                        {exp.company}
                      </h4>
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-muted-foreground/80 bg-transparent">
                        <Calendar size={12} />
                        <span className="bg-transparent">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description Bullets */}
                  <div className="bg-transparent">
                    {renderDescription(exp.description)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ExperiencesSection;
