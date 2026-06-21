import type { FC, ReactNode } from 'react';

export interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

export const ContactCard: FC<ContactCardProps> = ({ icon, label, value, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 md:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group"
    >
      <div className="flex items-center gap-4 overflow-hidden">
        <div className="flex-shrink-0 flex items-center text-2xl">
          {icon}
        </div>
        <div className="flex flex-col text-left truncate">
          <span className="font-mono font-bold text-[10px] text-black/50 uppercase tracking-widest mb-1">
            {label}
          </span>
          <span className="font-mono font-bold text-sm lg:text-base tracking-tight group-hover:underline decoration-2 underline-offset-4 truncate">
            {value}
          </span>
        </div>
      </div>
      <div className="flex-shrink-0 text-xl font-black ml-4">
        ↗
      </div>
    </a>
  );
};
