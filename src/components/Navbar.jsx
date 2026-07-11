import { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300">
      {/* Floating Pill Container */}
      <div className={`max-w-5xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2 ${scrolled
        ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-black/[0.04] border border-white/60'
        : 'bg-white/95 shadow-md border border-white/80'
        }`}>

        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <Link to="/" className="text-base md:text-2xl tracking-[-0.17em] font-bold font-krona text-primary-foreground hover:opacity-80 transition-opacity">
            marsya's
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs md:text-sm font-bold text-foreground/75 hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/admin"
            className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="Admin Dashboard"
          >
            <Settings size={15} />
          </Link>
        </div>

        {/* Right: Hire Me Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* "Hire Me" Button (Scrolls to Contact) */}
          <a
            href="#contact"
            className="bg-secondary text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full font-bold text-[10px] sm:text-xs md:text-sm shadow-sm hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-muted text-foreground transition-colors"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer/Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 max-w-5xl mx-auto rounded-3xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80 p-5 flex flex-col gap-3 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-bold text-sm text-foreground/80 hover:text-foreground py-2 border-b border-foreground/5 transition-all"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="font-bold text-sm text-muted-foreground hover:text-foreground py-2 transition-all"
          >
            Admin Panel
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
