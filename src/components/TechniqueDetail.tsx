
import React from "react";
import { Shield, AlertTriangle, Lock, Server } from "lucide-react";
import { PentestTechnique } from "@/data/pentest-techniques";

interface TechniqueDetailProps {
  technique: PentestTechnique;
}

const TechniqueDetail: React.FC<TechniqueDetailProps> = ({ technique }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-900 p-6">
        <h2 className="text-2xl font-bold text-cyan-400">{technique.title}</h2>
        <p className="text-gray-300 mt-2">{technique.shortDescription}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Server className="w-5 h-5 mr-2 text-cyan-400" />
            Overview
          </h3>
          <div className="text-gray-300 space-y-3" dangerouslySetInnerHTML={{ __html: technique.description }} />
        </section>

        {/* Attack Steps */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
            Attack Methodology
          </h3>
          <div className="space-y-3">
            {technique.attackSteps.map((step, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">
                  Step {index + 1}: {step.title}
                </h4>
                <div 
                  className="text-gray-300 text-sm" 
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
                {step.code && (
                  <div className="mt-3 bg-gray-950 p-3 rounded overflow-x-auto">
                    <pre className="text-cyan-400 text-xs">{step.code}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Mitigation */}
        <section>
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Lock className="w-5 h-5 mr-2 text-green-500" />
            Defensive Measures
          </h3>
          <ul className="space-y-2">
            {technique.mitigations.map((mitigation, index) => (
              <li key={index} className="bg-gray-900 p-3 rounded-lg text-gray-300">
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

export default TechniqueDetail;
