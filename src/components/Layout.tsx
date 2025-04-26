
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200">
      {children}
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
