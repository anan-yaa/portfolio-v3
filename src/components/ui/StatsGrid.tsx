export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 border-2 border-black border-b-0 bg-white text-left">
      <div className="p-8 border-b-2 border-r-2 border-black flex flex-col justify-center">
        <div className="text-4xl font-black mb-1">2+</div>
        <div className="font-mono text-xs font-bold tracking-widest text-black/70">YEARS CODING</div>
      </div>
      <div className="p-8 border-b-2 border-black flex flex-col justify-center">
        <div className="text-4xl font-black mb-1">8</div>
        <div className="font-mono text-xs font-bold tracking-widest text-black/70">PROJECTS</div>
      </div>
      <div className="p-8 border-b-2 border-r-2 border-black flex flex-col justify-center">
        <div className="text-4xl font-black mb-1 flex items-center gap-1">
          3+
        </div>
        <div className="font-mono text-xs font-bold tracking-widest text-black/70">DOMAINS EXPLORED</div>
      </div>
      <div className="p-8 border-b-2 border-black flex flex-col justify-center">
        <div className="text-4xl font-black mb-1">5+</div>
        <div className="font-mono text-xs font-bold tracking-widest text-black/70">OPEN SOURCE PROJECTS CONTRIBUTED TO</div>
      </div>
    </div>
  );
}
