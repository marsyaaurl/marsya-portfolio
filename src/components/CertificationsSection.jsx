import { Award } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

function CertificationsSection() {
  const { certifications } = usePortfolio();

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border/40 w-full overflow-hidden">
      <div className="flex flex-col gap-2 items-center text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-foreground">Certifications</h2>
        <span className="text-md font-bold tracking-wider text-muted-foreground">My Achievement</span>
      </div>

      {/* Horizontal Snap Scroll list */}
      <div className="flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="flex-shrink-0 w-[310px] sm:w-[500px] md:w-[600px] snap-center p-6 rounded-3xl glass-card flex flex-col sm:flex-row gap-6 items-center border border-white/50 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Cert Image */}
            <div className="w-full sm:w-1/3 aspect-[4/3] bg-white/20 rounded-2xl overflow-hidden p-2 flex items-center justify-center border border-white/50">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/logo.png";
                }}
              />
            </div>

            {/* Cert Details */}
            <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-secondary-foreground">
                <Award size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Certified</span>
              </div>
              <h3 className="font-bold text-lg md:text-xl text-foreground leading-snug">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-1">
                {cert.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;
