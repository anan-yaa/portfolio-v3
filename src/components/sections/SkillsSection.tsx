import { useEffect, useState, useRef } from 'react';
import type { FC } from 'react';

const Typewriter = ({ text, delay = 0, onComplete }: { text: string, delay?: number, onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, 30); // fast typing speed
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

export const SkillsSection: FC = () => {
  const [step, setStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Trigger the sequence
          setStep(1);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="flex flex-col border-t-4 border-black bg-black w-full relative">
      {/* Section Header */}
      <div className="px-8 py-8 border-b-4 border-black bg-[#F0E8D8] flex items-center justify-between">
        <div>
          <span className="font-mono text-sm tracking-widest font-bold text-black/70 mr-4 block mb-2">04 / TECHNICAL SKILLS</span>
          <h2 className="text-5xl font-black uppercase tracking-tight text-black">STACK</h2>
        </div>
      </div>

      {/* Section Body - Terminal */}
      <div className="p-8 md:p-12 lg:p-16 xl:p-24 w-full flex justify-center overflow-hidden">
        <div 
          className="w-full max-w-4xl border-4 border-black bg-[#0A0A0A] flex flex-col font-mono text-sm md:text-base leading-relaxed relative"
          style={{ boxShadow: '12px 12px 0px 0px var(--secondary)' }}
        >
          {/* Subtle Glow inside the terminal container */}
          <div className="absolute inset-0 bg-[var(--secondary)] opacity-[0.02] pointer-events-none"></div>

          {/* Terminal Header */}
          <div className="flex items-center px-6 py-4 bg-[#F0E8D8] border-b-4 border-black relative z-10">
            <div className="flex gap-3 absolute left-6">
              <div className="w-4 h-4 rounded-full border-2 border-black bg-[var(--accent)]"></div>
              <div className="w-4 h-4 rounded-full border-2 border-black bg-[var(--secondary)]"></div>
              <div className="w-4 h-4 rounded-full border-2 border-black bg-[var(--color-chart-2)]"></div>
            </div>
            <div className="w-full text-center font-bold text-black tracking-widest text-xs md:text-sm">
              &gt; ananyaa@dev — bash — 120x40
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 flex flex-col gap-8 text-[#F0E8D8] overflow-x-auto relative z-10 min-h-[400px]">
            
            {/* Command 1: cat stack.json */}
            {step >= 1 && (
              <div>
                <div className="flex gap-3 mb-4">
                  <span className="text-[var(--color-chart-2)] font-bold">ananyaa@dev:~$</span>
                  <span className="text-white">
                    <Typewriter text="cat stack.json" delay={500} onComplete={() => setStep(2)} />
                  </span>
                </div>
                {step >= 2 && (
                  <div className="text-white">
                    <span className="text-[var(--secondary)]">{'{'}</span>
                    <div className="pl-6 py-2 flex flex-col gap-2">
                      <div>
                        <span className="text-[var(--color-chart-4)]">"frontend"</span>: <span className="text-white">{'['}</span><br/>
                        <div className="pl-6">
                          <span className="text-[var(--color-chart-2)]">"React"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"Next.js"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"TypeScript"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"TailwindCSS"</span>
                        </div>
                        <span className="text-white">{']'},</span>
                      </div>
                      
                      <div>
                        <span className="text-[var(--color-chart-4)]">"backend"</span>: <span className="text-white">{'['}</span><br/>
                        <div className="pl-6">
                          <span className="text-[var(--color-chart-2)]">"Node.js"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"Express"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"Socket.IO"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"Prisma"</span>
                        </div>
                        <span className="text-white">{']'},</span>
                      </div>

                      <div>
                        <span className="text-[var(--color-chart-4)]">"database"</span>: <span className="text-white">{'['}</span><br/>
                        <div className="pl-6">
                          <span className="text-[var(--color-chart-2)]">"PostgreSQL"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"Supabase"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"Firebase"</span>
                        </div>
                        <span className="text-white">{']'},</span>
                      </div>

                      <div>
                        <span className="text-[var(--color-chart-4)]">"ai_ml"</span>: <span className="text-white">{'['}</span><br/>
                        <div className="pl-6">
                          <span className="text-[var(--color-chart-2)]">"Gemini"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"spaCy"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"NLTK"</span>
                        </div>
                        <span className="text-white">{']'},</span>
                      </div>

                      <div>
                        <span className="text-[var(--color-chart-4)]">"tools"</span>: <span className="text-white">{'['}</span><br/>
                        <div className="pl-6">
                          <span className="text-[var(--color-chart-2)]">"Git"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"Docker"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"Figma"</span>,<br/>
                          <span className="text-[var(--color-chart-2)]">"Monaco Editor"</span>
                        </div>
                        <span className="text-white">{']'}</span>
                      </div>
                    </div>
                    <span className="text-[var(--secondary)]">{'}'}</span>
                  </div>
                )}
              </div>
            )}

            {/* Command 2: focus areas */}
            {step >= 2 && (
              <div>
                <div className="flex gap-3 mb-4 mt-4">
                  <span className="text-[var(--color-chart-2)] font-bold">ananyaa@dev:~$</span>
                  <span className="text-white">
                    {step === 2 ? (
                      <Typewriter text="ananyaa --focus-areas --verbose" delay={1000} onComplete={() => setStep(3)} />
                    ) : (
                      "ananyaa --focus-areas --verbose"
                    )}
                  </span>
                </div>
                {step >= 3 && (
                  <div className="text-white/90 leading-loose whitespace-pre font-mono">
                    FULL_STACK_DEV ............ 90%<br/>
                    REALTIME_SYSTEMS .......... 85%<br/>
                    AI_APPLICATIONS ........... 80%<br/>
                    BLOCKCHAIN_DEV ............ 75%<br/>
                  </div>
                )}
              </div>
            )}

            {/* Command 3: experience */}
            {step >= 3 && (
              <div>
                <div className="flex gap-3 mb-4 mt-4">
                  <span className="text-[var(--color-chart-2)] font-bold">ananyaa@dev:~$</span>
                  <span className="text-white">
                    {step === 3 ? (
                      <Typewriter text="uptime --experience" delay={1000} onComplete={() => setStep(4)} />
                    ) : (
                      "uptime --experience"
                    )}
                  </span>
                </div>
                {step >= 4 && (
                  <div className="text-white/90 leading-loose font-mono">
                    Building projects for 2+ years.<br/>
                    8 projects completed.<br/>
                    Open source contributor.<br/>
                    Exploring AI, blockchain, and full-stack systems.
                  </div>
                )}
              </div>
            )}

            {/* Prompt */}
            {step >= 4 && (
              <div className="flex gap-3 mt-4">
                <span className="text-[var(--color-chart-2)] font-bold">ananyaa@dev:~$</span>
                <span className="text-[var(--secondary)] animate-pulse">█</span>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
