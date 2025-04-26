
import { Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-gray-900 p-6 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Shield className="h-10 w-10 text-cyan-400 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-white">Pentest with Binary0101Devil</h1>
            <p className="text-gray-300 text-sm">Infrastructure Penetration Testing Guide</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 text-sm">
          <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Dashboard</Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-cyan-400">Infrastructure Penetration Testing Techniques</span>
        </div>
      </div>
      
      {/* Binary0101Devil signature */}
      <div className="container mx-auto mt-2 text-right">
        <p className="text-cyan-500 text-xs italic">Created by Binary0101Devil</p>
      </div>
    </header>
  );
};

export default DashboardHeader;
