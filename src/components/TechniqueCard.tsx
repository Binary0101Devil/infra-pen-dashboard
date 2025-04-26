
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
        "border rounded-md p-3 cursor-pointer transition-all duration-200 hover:border-cyan-600/50",
        isActive
          ? "bg-gray-900 border-cyan-500 shadow-[0_0_10px_rgba(0,229,255,0.2)]"
          : "bg-gray-800 border-gray-700 hover:bg-gray-800/80"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className={cn("font-medium mb-1 font-mono", isActive ? "text-cyan-400" : "text-white")}>
            {technique.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">{technique.shortDescription}</p>
          <div className="mt-1.5">
            <span className={cn(
              "text-xs py-0.5 px-1.5 rounded font-mono",
              technique.category === "reconnaissance" ? "bg-blue-900/40 text-blue-400 border border-blue-900" : 
              "bg-red-900/40 text-red-400 border border-red-900"
            )}>
              {technique.category}
            </span>
          </div>
        </div>
        <ArrowRight
          className={cn(
            "w-5 h-5 transition-transform",
            isActive ? "text-cyan-400 translate-x-1" : "text-gray-500"
          )}
        />
      </div>
    </div>
  );
};

export default TechniqueCard;
