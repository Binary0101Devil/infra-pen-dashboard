
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PentestTechnique } from "@/data/pentest-techniques";

interface TechniqueCardProps {
  technique: PentestTechnique;
  isActive: boolean;
  onClick: () => void;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ technique, isActive, onClick }) => {
  return (
    <div
      className={cn(
        "border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:bg-gray-700",
        isActive
          ? "bg-blue-900/40 border-cyan-400 shadow-lg shadow-cyan-400/10"
          : "bg-gray-800 border-gray-700"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className={cn("font-medium mb-1", isActive ? "text-cyan-400" : "text-white")}>
            {technique.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">{technique.shortDescription}</p>
        </div>
        <ArrowRight
          className={cn(
            "w-5 h-5 transition-transform",
            isActive ? "text-cyan-400 translate-x-1" : "text-gray-400"
          )}
        />
      </div>
    </div>
  );
};

export default TechniqueCard;
