
import { useState } from "react";
import { techniqueCategories } from "@/data/pentest-techniques";

interface TechniqueCategoriesProps {
  onSelectCategory: (categoryId: string | null) => void;
  activeCategory: string | null;
}

const TechniqueCategories = ({ onSelectCategory, activeCategory }: TechniqueCategoriesProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-cyan-400">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-3 py-1 rounded-full text-sm ${
            activeCategory === null
              ? "bg-cyan-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          All Techniques
        </button>
        {Object.entries(techniqueCategories).map(([id, name]) => (
          <button
            key={id}
            onClick={() => onSelectCategory(id)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeCategory === id
                ? "bg-cyan-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechniqueCategories;
