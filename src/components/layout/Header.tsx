import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMoreOpen(false);
      }
    };

    if (isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMoreOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else {
            setActiveSection((prev) => (prev === entry.target.id ? '' : prev));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-68px 0px -10% 0px' }
    );

    const sectionIds = ['experience', 'projects', 'skills', 'education', 'certifications', 'achievements', 'contact'];
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 h-[68px] border-b-4 border-black bg-neo-bg">
      {/* Logo */}
      <div className="font-mono font-bold text-lg tracking-wider">
        ANANYAA_R.DEV
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex h-full border-x-4 border-black absolute left-1/2 -translate-x-1/2 top-0 bg-neo-bg">
        <a 
          href="#experience" 
          onClick={(e) => scrollToSection(e, 'experience')}
          className={`px-8 h-full flex items-center font-mono font-bold text-sm transition-colors ${
            activeSection === 'experience' 
              ? 'bg-black text-white' 
              : 'hover:bg-black hover:text-white text-black'
          }`}
          aria-current={activeSection === 'experience' ? 'page' : undefined}
        >
          EXPERIENCE
        </a>
        <div className="w-1 bg-black h-full"></div>
        <a 
          href="#projects" 
          onClick={(e) => scrollToSection(e, 'projects')}
          className={`px-8 h-full flex items-center font-mono font-bold text-sm transition-colors ${
            activeSection === 'projects' 
              ? 'bg-black text-white' 
              : 'hover:bg-black hover:text-white text-black'
          }`}
          aria-current={activeSection === 'projects' ? 'page' : undefined}
        >
          PROJECTS
        </a>
        <div className="w-1 bg-black h-full"></div>
        <a 
          href="#skills" 
          onClick={(e) => scrollToSection(e, 'skills')}
          className={`px-8 h-full flex items-center font-mono font-bold text-sm transition-colors ${
            activeSection === 'skills' 
              ? 'bg-black text-white' 
              : 'hover:bg-black hover:text-white text-black'
          }`}
          aria-current={activeSection === 'skills' ? 'page' : undefined}
        >
          SKILLS
        </a>
        <div className="w-1 bg-black h-full"></div>
        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className={`px-8 h-full flex items-center font-mono font-bold text-sm transition-colors ${
            activeSection === 'contact' 
              ? 'bg-black text-white' 
              : 'hover:bg-black hover:text-white text-black'
          }`}
          aria-current={activeSection === 'contact' ? 'page' : undefined}
        >
          CONTACT
        </a>
        <div className="w-1 bg-black h-full"></div>
        
        {/* MORE Dropdown */}
        <div className="relative h-full flex items-center" ref={dropdownRef}>
          <button 
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className={`px-8 h-full flex items-center font-mono font-bold text-sm transition-colors ${
              isMoreOpen || activeSection === 'education' || activeSection === 'certifications' || activeSection === 'achievements'
                ? 'bg-black text-white' 
                : 'hover:bg-black hover:text-white text-black'
            }`}
          >
            MORE {isMoreOpen ? '▲' : '▼'}
          </button>
          
          {isMoreOpen && (
            <div className="absolute top-[64px] left-0 bg-[#F0E8D8] border-4 border-black border-t-0 flex flex-col w-full min-w-[200px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <a 
                href="#education"
                onClick={(e) => {
                  setIsMoreOpen(false);
                  scrollToSection(e, 'education');
                }}
                className="px-6 py-4 font-mono font-bold text-sm border-b-2 border-black hover:bg-black hover:text-white transition-colors flex items-center gap-3"
              >
                <GraduationCap size={16} strokeWidth={2.5} /> EDUCATION
              </a>
              <a 
                href="#certifications"
                onClick={(e) => {
                  setIsMoreOpen(false);
                  scrollToSection(e, 'certifications');
                }}
                className="px-6 py-4 font-mono font-bold text-sm border-b-2 border-black hover:bg-black hover:text-white transition-colors flex items-center gap-3"
              >
                <Award size={16} strokeWidth={2.5} /> CERTIFICATIONS
              </a>
              <a 
                href="#achievements"
                onClick={(e) => {
                  setIsMoreOpen(false);
                  scrollToSection(e, 'achievements');
                }}
                className="px-6 py-4 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors flex items-center gap-3"
              >
                <Trophy size={16} strokeWidth={2.5} /> ACHIEVEMENTS
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
