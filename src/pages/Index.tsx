
import { useState } from "react";
import Layout from "@/components/Layout";
import DashboardHeader from "@/components/DashboardHeader";
import TechniqueCard from "@/components/TechniqueCard";
import TechniqueDetail from "@/components/TechniqueDetail";
import { techniques } from "@/data/pentest-techniques";

const Index = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Function to handle technique card click
  const handleTechniqueClick = (id: string) => {
    setActiveId(id === activeId ? null : id);
  };

  const activeTechnique = activeId ? techniques.find(tech => tech.id === activeId) : null;

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Techniques sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">Penetration Testing Techniques</h2>
            <div className="space-y-4">
              {techniques.map((technique) => (
                <TechniqueCard
                  key={technique.id}
                  technique={technique}
                  isActive={technique.id === activeId}
                  onClick={() => handleTechniqueClick(technique.id)}
                />
              ))}
            </div>
          </div>

          {/* Technique details */}
          <div className="lg:col-span-2">
            {activeTechnique ? (
              <TechniqueDetail technique={activeTechnique} />
            ) : (
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">Infrastructure Penetration Testing Dashboard</h2>
                <p className="text-gray-300 mb-4">
                  Welcome to the Infrastructure Penetration Testing Dashboard. This interactive dashboard provides detailed information on various penetration testing techniques used in infrastructure security assessments.
                </p>
                <p className="text-gray-300">
                  Select a technique from the sidebar to view detailed information, attack steps, methodology, and mitigation strategies.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
