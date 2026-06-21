import type { FC } from 'react';

interface Project {
  title: string;
  bullets: string[];
  tech: string[];
}

interface Experience {
  title: string;
  company: string;
  date: string;
  type: string;
  bullets?: string[];
  tech?: string[];
  projects?: Project[];
}

const experiences: Experience[] = [
  {
    title: 'SOFTWARE ENGINEER INTERN',
    company: 'Futurenet Technologies',
    date: 'May 2026 – July 2026',
    type: 'Internship',
    projects: [
      {
        title: 'TECHBUDDY - Enterprise Management System',
        bullets: [
          'All-in-one enterprise management system for workforce operations, asset management, maintenance planning, service ticketing, and infrastructure administration.',
          'Developed a reusable enterprise data management toolbar used across 6+ modules, standardizing Group By, column visibility, saved views, bulk actions, and export workflows.',
          'Engineered Excel import pipelines for multiple entity types with schema validation, row-level error reporting, and transactional database updates.',
          'Processed 3,000–5,000 records per import while maintaining validation accuracy and partial failure reporting.',
          'Developed Prisma aggregation and transformation logic to normalize nested relational data into frontend-friendly API responses.',
          'Built configurable data tables with dynamic grouping, filtering, column customization, and user-specific view management.',
          'Implemented bulk action workflows and Excel export functionality to streamline enterprise data administration.'
        ],  
        tech: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Prisma']
      },
      {
        title: 'ITSM TICKETING SYSTEM',
        bullets: [
          'Enterprise IT Service Management (ITSM) platform centralizing incident tracking, SLA governance, and operational automation.',
          'Architected a modular NestJS backend with 7 feature modules, a 14-model PostgreSQL database, and 35+ secured REST endpoints.',
          'Engineered a dual-deadline SLA compliance engine tracking both Time-to-First-Response and Resolution deadlines, featuring pause/resume handling and automated breach detection.',
          'Implemented complex role-based access control (RBAC) supporting 18 permissions across administrators, engineers, managers, and customers.',
          'Built cron-driven automation for scheduled operational tasks, recurring ticket generation, and deadline recalculations.',
          'Developed a permission-aware React frontend with protected routing, role-based UI rendering, and server-state management.',
          'Implemented transactional workflows using Prisma to ensure data consistency during complex operations like ticket merges.'
        ],
        tech: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT', 'RBAC']
      }
    ]
  },
  {
    title: 'SOFTWARE TESTING INTERN',
    company: 'Uniify 2',
    date: 'May 2025 – July 2025',
    type: 'Internship',
    bullets: [
      'Executed 150+ test cases across web and mobile applications.',
      'Identified and documented 35+ critical defects before the Uniify Nova launch.',
      'Performed 5+ regression cycles per release and improved testing workflows.',
      'Reduced duplicate defect reports by 25% through structured documentation practices.'
    ],
    tech: ['Manual Testing', 'Regression Testing', 'Bug Tracking', 'Test Documentation', 'Mobile Testing', 'Web Testing']
  }
];

export const ExperienceSection: FC = () => {
  return (
    <section id="experience" className="flex flex-col border-t-4 border-black bg-[#F0E8D8] w-full">
      <div className="px-8 py-8 border-b-4 border-black flex items-center justify-between bg-[#F0E8D8]">
        <div>
          <span className="font-mono text-sm tracking-widest font-bold text-black/70 mr-4 block mb-2">02 / PROFESSIONAL EXPERIENCE</span>
          <h2 className="text-5xl font-black uppercase tracking-tight text-black">EXPERIENCE</h2>
        </div>
      </div>
      
      <div className="p-8 md:p-12 lg:p-16 xl:p-24 w-full flex justify-center">
        <div className="w-full max-w-5xl relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-[35px] top-[24px] bottom-0 w-1 bg-black z-0"></div>

          <div className="flex flex-col gap-12 relative z-10">
            {experiences.map((exp, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
                
                {/* Timeline Marker */}
                <div className="flex-none flex justify-center w-[44px] md:w-[74px] pt-6 relative">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#F0E8D8] border-4 border-black z-10 relative"></div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border-4 border-black p-6 md:p-8 flex flex-col gap-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ease-in-out">
                  
                  {/* Card Header */}
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 border-b-4 border-black pb-4">
                    <div className="flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{exp.title}</h3>
                      <div className="text-lg font-bold font-mono text-black/70 mt-1 uppercase">{exp.company} • {exp.type}</div>
                    </div>
                    
                    {/* Date Badge */}
                    <div className="bg-[var(--secondary)] border-2 border-black px-4 py-2 font-mono font-bold text-sm tracking-wider whitespace-nowrap self-start">
                      {exp.date}
                    </div>
                  </div>

                  {exp.projects ? (
                    <div className="flex flex-col pt-2">
                      {exp.projects.map((project, pIdx) => (
                        <div key={pIdx} className="flex flex-col">
                          <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 text-black">{project.title}</h4>
                          <ul className="flex flex-col gap-3 font-medium text-black text-base leading-relaxed pl-5 list-disc">
                            {project.bullets.map((bullet, idx) => (
                              <li key={idx} className="pl-2 marker:text-black">{bullet}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="bg-[#F0E8D8] border-2 border-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-[#F0E8D8] cursor-default">
                                {tech}
                              </span>
                            ))}
                          </div>
                          {/* Divider if not last project */}
                          {pIdx < exp.projects!.length - 1 && (
                            <div className="w-full border-b-2 border-dashed border-black/20 my-6 md:my-8"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      {/* Bullets */}
                      <ul className="flex flex-col gap-3 font-medium text-black text-base leading-relaxed pl-5 list-disc mt-2">
                        {exp.bullets?.map((bullet, idx) => (
                          <li key={idx} className="pl-2 marker:text-black">{bullet}</li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      {exp.tech && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t-2 border-dashed border-black/20">
                          {exp.tech.map((tech, idx) => (
                            <span key={idx} className="bg-[#F0E8D8] border-2 border-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-[#F0E8D8] cursor-default">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
