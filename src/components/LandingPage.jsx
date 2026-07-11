import Navbar from './Navbar';
import Hero from './Hero';
import ExperiencesSection from './ExperiencesSection';
import ProjectsSection from './ProjectsSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function LandingPage() {

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main layout contents */}
      <main className="flex flex-col">
        <Hero />
        <ExperiencesSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;