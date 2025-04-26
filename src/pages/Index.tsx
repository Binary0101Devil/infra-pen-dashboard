
import { useState } from "react";
import Layout from "@/components/Layout";
import DashboardHeader from "@/components/DashboardHeader";
import TechniqueCard from "@/components/TechniqueCard";
import TechniqueDetail from "@/components/TechniqueDetail";
import TechniqueCategories from "@/components/TechniqueCategories";
import { techniques } from "@/data/pentest-techniques";

const Index = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Function to handle technique card click
  const handleTechniqueClick = (id: string) => {
    setActiveId(id === activeId ? null : id);
  };

  // Function to handle category selection
  const handleCategorySelect = (categoryId: string | null) => {
    setActiveCategory(categoryId);
    setActiveId(null); // Reset active technique when changing category
  };

  // Filter techniques based on selected category
  const filteredTechniques = activeCategory 
    ? techniques.filter(tech => tech.category === activeCategory)
    : techniques;

  const activeTechnique = activeId ? techniques.find(tech => tech.id === activeId) : null;

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Techniques sidebar */}
          <div className="lg:col-span-1">
            <TechniqueCategories 
              onSelectCategory={handleCategorySelect} 
              activeCategory={activeCategory} 
            />
            
            <h2 className="text-xl font-bold mb-4 text-cyan-400">
              {activeCategory ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Techniques` : "Penetration Testing Techniques"}
            </h2>
            
            <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 scrollbar">
              {filteredTechniques.map((technique) => (
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
              <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Infrastructure Penetration Testing Techniques</h2>
                <div className="mb-6 inline-block p-4 bg-gray-800 rounded-lg shadow-inner border border-gray-700">
                  <div className="text-xs font-mono text-green-400 text-left">
                    <p># Initialize penetration test</p>
                    <p>$ sudo ./pentest -t infrastructure -m reconnaissance</p>
                    <p># Select a technique from the sidebar to begin...</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Welcome to the Infrastructure Penetration Testing interface. This interactive dashboard provides detailed information on various penetration testing techniques used in infrastructure security assessments.
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
