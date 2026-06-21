import { Button } from '../ui/Button';

const StackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 12 12 17 22 12"></polyline>
    <polyline points="2 17 12 22 22 17"></polyline>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export function HeroLeft() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-start px-12 xl:px-24 pt-10 pb-20 relative">
      {/* Badge */}
      <div className="mb-10 inline-flex">
        <div className="bg-neo-red border-2 border-black text-white font-mono text-sm font-bold tracking-widest px-4 py-1 shadow-neo-solid uppercase">
          building cool stuff
        </div>
      </div>

      {/* Typography */}
      <div className="mb-8 font-sans">
        <h1 className="text-7xl xl:text-8xl font-black leading-none uppercase tracking-tight">
          ANANYAA
        </h1>
        <h1 
          className="text-7xl xl:text-8xl leading-none uppercase tracking-wider mt-1 font-['Oswald']"
          style={{ 
            color: 'transparent', 
            WebkitTextStroke: '2px black' 
          }}
        >
          SRI R
        </h1>
      </div>

      {/* Subtitle */}
      <h2 className="text-2xl font-bold mb-6 tracking-tight">
        FULL STACK DEVELOPER 
      </h2>

      {/* Description */}
      <p className="text-lg text-black/80 max-w-lg mb-12 leading-relaxed">
        Passionate about building scalable applications,
        designing intuitive user experiences,
        and exploring emerging technologies
        like AI and blockchain.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-6">
        <Button 
          variant="dark" 
          icon={<StackIcon />} 
          href="#projects" 
          onClick={scrollToProjects}
        >
          VIEW PROJECTS
        </Button>
        <Button 
          variant="secondary" 
          icon={<GithubIcon />} 
          href="https://github.com/anan-yaa" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GITHUB
        </Button>
      </div>
    </div>
  );
}
