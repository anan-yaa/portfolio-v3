import type { FC } from 'react';

const techs = [
  'JAVASCRIPT', 'TYPESCRIPT', 'NEXT.JS', 'TAILWIND CSS', 'NODE.JS', 'EXPRESS', 
  'PYTHON', 'JAVA', 'SOCKET.IO', 'WEBRTC', 'POSTGRESQL', 'MYSQL', 'SUPABASE', 
  'PRISMA', 'DOCKER', 'GIT', 'GITHUB', 'POSTMAN', 'HYPERLEDGER FABRIC', 
  'LINUX', 'DSA', 'DBMS', 'OOP', 'COMPUTER NETWORKS'
];

export const TechTicker: FC = () => {
  return (
    <div className="w-full bg-[#F0E8D8] border-b-4 border-black overflow-hidden flex relative select-none z-10">
      <div className="flex w-max animate-[ticker_40s_linear_infinite] hover:[animation-play-state:paused]">
        {/* First Set */}
        <div className="flex">
          {techs.map((tech, i) => (
            <div 
              key={`tech-1-${i}`}
              className="flex items-center gap-4 px-6 py-3 border-r-4 border-black font-mono font-bold text-sm md:text-base whitespace-nowrap text-black"
            >
              <span className="text-[var(--accent)] text-lg leading-none mt-[-2px]">★</span>
              {tech}
            </div>
          ))}
        </div>
        {/* Second Set (Duplicate for seamless loop) */}
        <div className="flex">
          {techs.map((tech, i) => (
            <div 
              key={`tech-2-${i}`}
              className="flex items-center gap-4 px-6 py-3 border-r-4 border-black font-mono font-bold text-sm md:text-base whitespace-nowrap text-black"
            >
              <span className="text-[var(--accent)] text-lg leading-none mt-[-2px]">★</span>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
