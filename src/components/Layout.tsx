
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200">
      {children}
      <footer className="py-6 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>Infrastructure Penetration Testing Guide &copy; {new Date().getFullYear()}</p>
          <p className="mt-1">For educational and authorized testing purposes only.</p>
          <p className="mt-2 text-cyan-600">Created by Binary0101Devil</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
