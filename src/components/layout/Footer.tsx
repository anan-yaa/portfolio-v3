import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-black border-t-4 border-black py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest z-20">
      <div className="text-[#F0E8D8]/70 text-center md:text-left">
        © 2026 ANANYAA SRI
      </div>
      <div className="text-[var(--secondary)] flex items-center gap-2 hover:opacity-80 transition-opacity cursor-default text-center md:text-right">
        <span></span> OPEN FOR INTERNSHIPS
      </div>
    </footer>
  );
};
