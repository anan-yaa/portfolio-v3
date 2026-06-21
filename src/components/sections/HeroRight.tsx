import { StatsGrid } from '../ui/StatsGrid';
import { TerminalWindow } from '../ui/TerminalWindow';

export function HeroRight() {
  return (
    <div className="flex-1 flex flex-col justify-start px-12 xl:px-24 pt-10 pb-20 relative">
      <div className="w-full max-w-lg mx-auto flex flex-col shadow-neo-solid mt-4 lg:mt-12">
        <StatsGrid />
        <TerminalWindow />
      </div>
    </div>
  );
}
