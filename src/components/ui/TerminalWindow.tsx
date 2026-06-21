export function TerminalWindow() {
  return (
    <div className="bg-[#0f1110] text-[#e5e5e5] border-2 border-black font-mono text-sm">
      {/* Terminal Header */}
      <div className="px-4 py-3 border-b border-[#333] flex items-center text-xs tracking-wider text-gray-400">
        <span className="mr-2">&gt;_</span> BASH
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 pb-8 space-y-2">
        <div className="flex">
          <span className="text-yellow-400 mr-2">$</span>
          <span>ananyaa --stack js, nodejs, react</span>
        </div>
        <div className="text-gray-500">
          // Initializing...
        </div>
        <div className="flex text-green-400">
          <span className="mr-2">✓</span>
          <span className="text-[#e5e5e5]">Build successful</span>
        </div>
      </div>
    </div>
  );
}
