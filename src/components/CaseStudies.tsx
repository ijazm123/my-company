'use client';

import { useState } from 'react';

const caseStudies = [
  {
    title: 'DevOps Hub Platform',
    client: 'Enterprise Tech Solutions',
    category: 'DevOps & Automation',
    overview: 'Centralized DevOps UI platform unifying Git, CI/CD, monitoring, and Kubernetes into a single pane of glass.',
    challenge: 'DevOps teams struggled with 10+ fragmented tools (GitHub, Jenkins, ArgoCD, Kubernetes, Helm, SonarQube, Trivy, JFrog), leading to reduced visibility, slower incident resolution, no AI-driven debugging, manual pipeline authoring, and zero DORA metrics tracking.',
    solution: 'Developed a unified DevOps Hub platform providing single pane of glass for all DevOps operations with real-time pipeline visualization and integrated logs.',
    results: [
      { label: 'Faster Incidents', value: '40%', description: 'faster incident identification' },
      { label: 'Less Tool Switching', value: '60%', description: 'reduction in tool switching' },
      { label: 'Faster Debugging', value: '50%', description: 'faster debugging cycles' },
      { label: 'Real-time', value: '24/7', description: 'unified logs & K8s observability' },
    ],
    techStack: ['React', 'TypeScript', 'FastAPI', 'React Flow', 'GitHub', 'Jenkins', 'ArgoCD', 'Kubernetes'],
    icon: 'fa-code-branch',
  },
];

export default function CaseStudies() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-24 px-8 bg-gradient-to-b from-bg-dark via-bg-card/30 to-bg-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-[3px] uppercase block mb-4">
            <i className="fas fa-briefcase mr-2"></i>Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real-world solutions we&apos;ve delivered for enterprise clients. See how we solve complex technical challenges.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-bg-card border border-white/10 rounded-[20px] overflow-hidden hover:border-primary/20 transition-all duration-300"
            >
              {/* Card Header */}
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full text-left p-8 hover:bg-white/[0.02] transition flex justify-between items-start gap-4"
              >
                <div className="flex items-start gap-5 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <i className={`fas ${study.icon} text-white text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {study.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                    <p className="text-sm text-text-secondary mb-3">Client: {study.client}</p>
                    <p className="text-text-secondary">{study.overview}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-2">
                  <i className={`fas fa-chevron-down text-primary transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`}></i>
                </div>
              </button>

              {/* Expanded Details */}
              {expanded === index && (
                <div className="border-t border-white/10 p-8 bg-bg-dark/50 space-y-8">
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <i className="fas fa-exclamation-triangle text-accent text-sm"></i>
                        Challenge
                      </h4>
                      <p className="text-text-secondary leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <i className="fas fa-lightbulb text-primary text-sm"></i>
                        Solution
                      </h4>
                      <p className="text-text-secondary leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-bold mb-4">Key Results</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-bg-card rounded-xl p-4 border border-white/10 text-center">
                          <p className="text-2xl font-extrabold text-primary mb-1">{result.value}</p>
                          <p className="text-xs text-text-secondary">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-bold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-white/[0.05] border border-white/10 text-text-secondary px-3 py-1.5 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
