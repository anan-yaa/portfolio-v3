import type { FC } from 'react';

const certs = [
  { title: 'Programming in Java', org: 'NPTEL (Elite + Gold), IIT Kharagpur', year: 'MAY 2026', color: 'var(--secondary)' },
  { title: 'Privacy and Security in Online Social Media', org: 'NPTEL (Elite + Silver), IIIT Hyderabad', year: 'OCTOBER 2025', color: 'var(--accent)' },
  { title: 'Full-Stack Web Development', org: 'Udemy', year: 'JANUARY 2025', color: 'var(--color-chart-2)' },
  { title: 'Affective Computing', org: 'NPTEL (Elite), IIIT Delhi & IIT Ropar', year: ' MAY 2025', color: 'var(--color-chart-4)' },
];

export const CertificationsSection: FC = () => {
  return (
    <section id="certifications" className="flex flex-col border-t-4 border-black bg-[#F0E8D8] w-full z-10 relative">
      <div className="px-8 py-8 flex flex-col justify-center">
        <span className="font-mono text-sm tracking-widest font-bold text-black/70 mb-2">06 / CERTIFICATIONS</span>
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-black">CERTIFICATIONS</h2>
      </div>

      <div className="px-8 md:px-12 lg:px-16 xl:px-24 pb-24 w-full max-w-7xl mx-auto flex flex-col gap-6">
        {certs.map((cert, index) => (
          <div 
            key={index} 
            className="flex w-full bg-[#F0E8D8] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative"
          >
            {/* Color Strip */}
            <div 
              className="w-4 md:w-5 lg:w-6 border-r-4 border-black flex-shrink-0" 
              style={{ backgroundColor: cert.color }}
            ></div>
            
            {/* Content Area */}
            <div className="flex-1 p-8 md:p-10 xl:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              {/* Left Side */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-black">{cert.title}</h3>
                <p className="font-mono font-bold text-base md:text-lg text-black/70">{cert.org}</p>
              </div>
              
              {/* Right Side */}
              <div className="flex flex-col items-start md:items-end gap-2">
                <div 
                  className="border-2 border-black px-5 py-2 font-mono font-bold text-sm tracking-widest whitespace-nowrap"
                  style={{ backgroundColor: cert.color }}
                >
                  {cert.year}
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
