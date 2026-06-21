import { useState, type FC } from 'react';
import { ProjectModal } from './ProjectModal';

const GithubIcon = ({ size = 24, strokeWidth = 2 }: { size?: number, strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export interface ModalContent {
  overview: string;
  problem: string;
  features: string[];
  technicalHighlights: string[];
  challenges: string;
  impact: string;
}

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  featured?: boolean;
  projectUrl?: string;
  githubUrl?: string;
  hoverColor: 'yellow' | 'red' | 'green' | 'purple';
  modalContent: ModalContent;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {
    title,
    category,
    description,
    technologies,
    year,
    featured = false,
    githubUrl,
    hoverColor,
  } = props;

  const hoverColorClass = {
    yellow: 'hover:bg-[var(--secondary)]',
    red: 'hover:bg-[var(--accent)]',
    green: 'hover:bg-[var(--color-chart-2)]',
    purple: 'hover:bg-[var(--color-chart-4)]',
  }[hoverColor];

  return (
    <>
      <div
        className={`
          relative flex flex-col h-full p-8 border-2 border-black
          transition-all duration-300 ease-in-out bg-[#EAEAEA]
          hover:-translate-y-1 hover:shadow-neo-solid
          ${hoverColorClass}
        `}
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 font-mono text-xs font-bold tracking-widest uppercase">
            FEATURED
          </div>
        )}

        {/* Top Metadata Row */}
        <div className="flex justify-between items-start w-full">
          <div className="border-2 border-black px-2 py-1 font-mono text-xs font-bold tracking-widest uppercase bg-transparent">
            {category}
          </div>
          
          <div className={`font-mono text-sm font-bold ${featured ? 'mt-8' : ''}`}>
            {year}
          </div>
        </div>

        {/* Title */}
        <div className="flex items-center gap-4 mt-6 mb-4">
          <h3 className="text-3xl font-black uppercase tracking-tight">
            {title}
          </h3>
          {githubUrl && githubUrl !== 'GITHUB_URL_HERE' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-opacity flex-shrink-0"
              aria-label={`${title} GitHub repository`}
            >
              <GithubIcon size={26} strokeWidth={2.5} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-base text-black/90 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="border-2 border-black px-2 py-1 font-mono text-xs font-bold tracking-widest bg-transparent"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex gap-6">
          {githubUrl && githubUrl !== 'GITHUB_URL_HERE' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-mono text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
            >
              VIEW CODE ↗
            </a>
          )}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center font-mono text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
          >
            LEARN MORE +
          </button>
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        {...props} 
      />
    </>
  );
};
