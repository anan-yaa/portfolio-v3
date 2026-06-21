import type { FC } from 'react';

interface Achievement {
  category: string;
  year: string;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    category: 'LEADERSHIP',
    year: '2024 - CURRENT',
    title: 'Event Head — Spectre, SNUC Gaming Club',
    description: 'Organized and managed 7+ major gaming events including Instincts 2025 competitions with 100+ participants, coordinating event planning, execution, and participant engagement.'
  },
  {
    category: 'OPEN SOURCE',
    year: '2025–2026',
    title: 'GirlScript Summer of Code Contributor',
    description: 'Contributed to 5+ open-source projects during GSSoC 2025 and GSSoC 2026, submitting bug fixes, enhancements, documentation improvements, and feature contributions across multiple repositories.'
  },
  {
    category: 'HACKATHON',
    year: '2025',
    title: 'Finalist — Spectrum\'25',
    description: 'Ranked among the Top 50 teams out of 500+ participating teams through multiple competitive evaluation rounds.'
  },
  {
    category: 'HACKATHON',
    year: '2024',
    title: 'Semi Finalist — Smart India Hackathon 2024',
    description: 'Qualified among the Top 50 teams from 150+ competing teams in one of India\'s largest national hackathons.'
  }
  
];

export const AchievementsSection: FC = () => {
  const hoverColors = [
    'hover:bg-[var(--secondary)]', // yellow
    'hover:bg-[var(--accent)]', // red
    'hover:bg-[var(--color-chart-2)]', // green
    'hover:bg-[var(--color-chart-4)]', // purple
  ];

  return (
    <section id="achievements" className="flex flex-col border-t-4 border-black bg-[#F0E8D8] w-full">
      <div className="px-8 py-8 border-b-4 border-black flex items-center justify-between">
        <div>
          <span className="font-mono text-sm tracking-widest font-bold text-black/70 mr-4">07 / ACCOMPLISHMENTS </span>
          <h2 className="text-5xl font-black uppercase tracking-tight mt-2 text-black">ACHIEVEMENTS</h2>
        </div>
      </div>
      
      <div className="p-8 md:p-12 lg:p-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr w-full">
          {achievements.map((achievement, index) => {
            const hoverClass = hoverColors[index % hoverColors.length];
            
            return (
              <div 
                key={index}
                className={`
                  relative flex flex-col h-full p-8 border-2 border-black
                  transition-all duration-300 ease-in-out bg-[#EAEAEA]
                  hover:-translate-y-1 hover:shadow-neo-solid
                  ${hoverClass}
                `}
              >
                {/* Top Row */}
                <div className="flex justify-between items-start w-full">
                  <div className="border-2 border-black px-2 py-1 font-mono text-xs font-bold tracking-widest uppercase bg-transparent">
                    {achievement.category}
                  </div>
                  <div className="font-mono text-sm font-bold">
                    {achievement.year}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-black uppercase mt-6 mb-4 tracking-tight">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-base text-black/90 flex-grow leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
