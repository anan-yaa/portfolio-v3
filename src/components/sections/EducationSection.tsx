import type { FC } from 'react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science & Engineering (IoT)',
    institution: 'Shiv Nadar University, Chennai',
    dateBadge: '2023 — 2027',
    description: 'Pursuing undergraduate degree in Computer Science with specialization in Internet of Things.',
    coursework: 'Data Structures and Algorithms, Design and Analysis of Algorithms, Object Oriented Programming in Java, Artificial Intelligence, Machine Learning, Database Management Systems, Operating Systems, Computer Networks',
    detailsLabel: 'CGPA',
    detailsValue: '8.17'
  },
  {
    degree: 'Higher Secondary',
    institution: 'Alwin Memorial Public School, Chennai',
    dateBadge: '2022 — 2023',
    description: 'Completed Grade 12.',
    coursework:'Core subjects: Physics, Chemistry, Mathematics, Computer Science',
    detailsLabel: 'Percentage',
    detailsValue: '90.8%'
  },
  {
    degree: 'Secondary',
    institution: 'Nalanda Vidyaniketan, Vijayawada',
    dateBadge: '2020 — 2021',
    description: 'Completed Grade 10.',
    detailsLabel: 'Percentage',
    detailsValue: '92.8%'
  }
];

export const EducationSection: FC = () => {
  return (
    <section id="education" className="flex flex-col border-t-4 border-black bg-[#F0E8D8] w-full z-10 relative">
      <div className="px-8 py-8 border-b-4 border-black flex flex-col justify-center">
        <span className="font-mono text-sm tracking-widest font-bold text-black/70 mb-2">05 / EDUCATION</span>
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-black">ACADEMICS</h2>
      </div>

      <div className="p-8 md:p-12 lg:p-16 xl:p-24 w-full max-w-6xl mx-auto flex flex-col gap-12">
        {educationData.map((entry, index) => (
          <div 
            key={index} 
            className="w-full bg-[#F0E8D8] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
          >
            {/* Title Area */}
            <div className="p-6 md:p-8 xl:p-10 border-b-4 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-black">{entry.degree}</h3>
                <p className="font-mono font-bold text-lg text-black/80">{entry.institution}</p>
              </div>
              <div className="bg-[var(--secondary)] border-2 border-black px-4 py-2 font-mono font-bold text-sm md:text-base tracking-wider whitespace-nowrap self-start md:self-auto">
                {entry.dateBadge}
              </div>
            </div>

            {/* Description & Details Area */}
            <div className="p-6 md:p-8 xl:p-10 flex flex-col gap-8">
              <div>
                <h4 className="font-mono text-sm font-bold tracking-widest text-black/70 uppercase mb-3">Description</h4>
                <p className="font-bold text-lg text-black">{entry.description}</p>
              </div>
              
              {entry.coursework && (
                <div>
                  <h4 className="font-mono text-sm font-bold tracking-widest text-black/70 uppercase mb-3">Related Coursework</h4>
                  <p className="font-bold text-lg text-black">{entry.coursework}</p>
                </div>
              )}

              <div>
                <h4 className="font-mono text-sm font-bold tracking-widest text-black/70 uppercase mb-3">{entry.detailsLabel}</h4>
                <p className="font-bold text-lg text-black">{entry.detailsValue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
