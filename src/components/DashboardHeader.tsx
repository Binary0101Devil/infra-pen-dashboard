
import { Shield } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-black p-6 border-b border-cyan-900/30 shadow-[0_5px_15px_rgba(0,229,255,0.1)]">
      <div className="container mx-auto">
        <div className="flex items-center">
          <Shield className="h-10 w-10 text-cyan-400 mr-3 animate-pulse-glow" />
          <div>
            <h1 className="text-2xl font-bold text-white">Pentest with Binary0101Devil</h1>
            <p className="text-gray-300 text-sm">Infrastructure Penetration Testing Techniques</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
