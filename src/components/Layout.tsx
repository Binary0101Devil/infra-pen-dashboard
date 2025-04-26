
import React from "react";
import { Link } from "react-router-dom";
import { Server } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200">
      {children}
      <div className="fixed bottom-4 right-4">
        <Link 
          to="/services"
          className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 p-2 rounded-md border border-gray-700 shadow-lg transition-colors duration-200"
          title="Service Enumeration Guide"
        >
          <Server className="h-5 w-5 text-cyan-400" />
          <span className="text-sm text-cyan-400 font-mono">Services</span>
        </Link>
      </div>
      <footer className="py-4 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto text-center text-xs text-gray-500">
          <p className="font-mono">Infrastructure Penetration Testing Guide &copy; {new Date().getFullYear()}</p>
          <p className="mt-1 font-mono">For educational and authorized testing purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
