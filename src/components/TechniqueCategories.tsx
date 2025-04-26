
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
          className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
            activeCategory === null
              ? "bg-cyan-600 text-white shadow-[0_0_8px_rgba(0,229,255,0.5)]"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:border-cyan-500 border border-gray-700"
          }`}
        >
          All Techniques
        </button>
        {Object.entries(techniqueCategories).map(([id, name]) => (
          <button
            key={id}
            onClick={() => onSelectCategory(id)}
            className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
              activeCategory === id
                ? "bg-cyan-600 text-white shadow-[0_0_8px_rgba(0,229,255,0.5)]"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:border-cyan-500 border border-gray-700"
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
