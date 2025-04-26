
import React from "react";
import { Shield, AlertTriangle, Lock, Server, Code, Terminal } from "lucide-react";
import { PentestTechnique } from "@/data/pentest-techniques";

interface TechniqueDetailProps {
  technique: PentestTechnique;
}

const TechniqueDetail: React.FC<TechniqueDetailProps> = ({ technique }) => {
  return (
    <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden border border-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black p-5 border-b border-gray-800">
        <h2 className="text-2xl font-bold text-cyan-400 font-mono">{technique.title}</h2>
        <p className="text-gray-300 mt-2">{technique.shortDescription}</p>
        <div className="mt-2">
          <span className={cn(
            "text-xs py-0.5 px-2 rounded font-mono",
            technique.category === "reconnaissance" ? "bg-blue-900/40 text-blue-400 border border-blue-900" : 
            "bg-red-900/40 text-red-400 border border-red-900"
          )}>
            {technique.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 scrollbar">
        {/* Description */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center border-b border-gray-800 pb-2">
            <Server className="w-5 h-5 mr-2 text-cyan-400" />
            Overview
          </h3>
          <div className="text-gray-300 space-y-3" dangerouslySetInnerHTML={{ __html: technique.description }} />
        </section>

        {/* Attack Steps */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center border-b border-gray-800 pb-2">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
            Attack Methodology
          </h3>
          <div className="space-y-3">
            {technique.attackSteps.map((step, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-md border border-gray-700">
                <h4 className="font-medium text-white mb-2 font-mono">
                  Step {index + 1}: {step.title}
                </h4>
                <div 
                  className="text-gray-300 text-sm" 
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
                {step.code && (
                  <div className="mt-3 bg-black p-3 rounded overflow-x-auto border border-gray-700">
                    <pre className="text-cyan-400 text-xs font-mono">{step.code}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        {(technique.methodology?.steps || technique.methodology?.tools || technique.methodology?.commands) && (
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center border-b border-gray-800 pb-2">
              <Terminal className="w-5 h-5 mr-2 text-cyan-400" />
              Detailed Methodology
            </h3>
            
            {/* Steps */}
            {technique.methodology.steps && technique.methodology.steps.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Steps:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  {technique.methodology.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Commands */}
            {technique.methodology.commands && technique.methodology.commands.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Commands:</h4>
                <div className="bg-black p-3 rounded overflow-x-auto border border-gray-700">
                  {technique.methodology.commands.map((cmd, i) => (
                    <pre key={i} className="text-cyan-400 text-xs mb-1 font-mono">{cmd}</pre>
                  ))}
                </div>
              </div>
            )}
            
            {/* Tools */}
            {technique.methodology.tools && technique.methodology.tools.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Tools:</h4>
                <div className="space-y-4">
                  {technique.methodology.tools.map((tool, i) => (
                    <div key={i} className="border border-gray-700 rounded p-3 bg-gray-800">
                      <h5 className="text-sm font-semibold text-white mb-2 font-mono">{tool.name}</h5>
                      <div className="bg-black p-3 rounded overflow-x-auto border border-gray-700">
                        {tool.commands.map((cmd, j) => (
                          <pre key={j} className="text-cyan-400 text-xs mb-1 font-mono">{cmd}</pre>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Mitigation */}
        <section>
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center border-b border-gray-800 pb-2">
            <Lock className="w-5 h-5 mr-2 text-green-500" />
            Defensive Measures
          </h3>
          <ul className="space-y-2">
            {technique.mitigations.map((mitigation, index) => (
              <li key={index} className="bg-gray-800 p-3 rounded-md border border-gray-700 text-gray-300">
                <span className="flex items-start">
                  <Shield className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: mitigation }} />
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

// Helper function since we need it for classes
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export default TechniqueDetail;
