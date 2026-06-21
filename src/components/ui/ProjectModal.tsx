import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import type { ProjectCardProps } from './ProjectCard';

interface ProjectModalProps extends ProjectCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({
  isOpen,
  onClose,
  title,
  technologies,
  projectUrl,
  githubUrl,
  modalContent,
}: ProjectModalProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      requestAnimationFrame(() => setIsVisible(true));
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => setIsRendered(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isRendered) return null;

  const {
    overview,
    problem,
    features,
    technicalHighlights,
    challenges,
    impact,
  } = modalContent;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 transition-opacity duration-200 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F0E8D8] border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 ease-out ${
          isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} strokeWidth={3} />
        </button>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 pr-12">
          {title}
        </h2>

        <div className="space-y-8">
          <section>
            <h3 className="font-mono text-sm font-bold tracking-widest uppercase mb-3 border-b-2 border-black pb-2">
              Project Overview
            </h3>
            <p className="text-lg text-black/90 leading-relaxed">
              {overview}
            </p>
          </section>

          <section>
            <h3 className="font-mono text-sm font-bold tracking-widest uppercase mb-3 border-b-2 border-black pb-2">
              Problem Solved
            </h3>
            <p className="text-lg text-black/90 leading-relaxed">
              {problem}
            </p>
          </section>

          <section>
            <h3 className="font-mono text-sm font-bold tracking-widest uppercase mb-3 border-b-2 border-black pb-2">
              Key Features
            </h3>
            <ul className="list-none space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="text-lg text-black/90 flex items-start gap-3">
                  <span className="font-bold mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-mono text-sm font-bold tracking-widest uppercase mb-3 border-b-2 border-black pb-2">
              Technical Highlights
            </h3>
            <ul className="list-none space-y-2">
              {technicalHighlights.map((highlight, i) => (
                <li key={i} className="text-lg text-black/90 flex items-start gap-3">
                  <span className="font-bold mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-mono text-sm font-bold tracking-widest uppercase mb-3 border-b-2 border-black pb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="border-2 border-black px-2 py-1 font-mono text-xs font-bold tracking-widest bg-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-sm font-bold tracking-widest uppercase mb-3 border-b-2 border-black pb-2">
              Challenges & Solutions
            </h3>
            <p className="text-lg text-black/90 leading-relaxed">
              {challenges}
            </p>
          </section>

          <section>
            <h3 className="font-mono text-sm font-bold tracking-widest uppercase mb-3 border-b-2 border-black pb-2">
              Impact / Outcome
            </h3>
            <p className="text-lg text-black/90 leading-relaxed">
              {impact}
            </p>
          </section>

          <section className="pt-6 flex flex-wrap gap-6">
            {githubUrl && githubUrl !== 'GITHUB_URL_HERE' && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono text-base font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
              >
                VIEW CODE ↗
              </a>
            )}
            {projectUrl && projectUrl !== 'PROJECT_URL_HERE' && (
              <a 
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono text-base font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
              >
                LIVE DEMO ↗
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
