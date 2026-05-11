'use client';

import { useState } from 'react';

export default function CaseStudiesPage() {
  const [expandedCase, setExpandedCase] = useState<number | null>(0);

  const caseStudies = [
    {
      id: 1,
      title: 'DevOps Hub Platform',
      client: 'Enterprise Tech Solutions',
      category: 'DevOps & Automation',
      overview: 'Centralized DevOps UI platform unifying Git, CI/CD, monitoring, and Kubernetes',
      challenge: 'DevOps teams struggled with fragmented tools (GitHub, Jenkins, ArgoCD, Kubernetes), leading to reduced visibility, slower incident resolution, and operational inefficiencies.',
      solution: 'Developed a unified DevOps Hub platform providing single pane of glass for all DevOps operations',
      results: {
        visibility: '40% faster incident identification',
        efficiency: '60% reduction in tool switching time',
        deployment: '50% faster debugging cycles',
        insight: 'Real-time unified logs and Kubernetes observability',
      },
      fullProposal: {
        executiveSummary: `Modern DevOps environments rely on multiple disconnected tools for CI/CD, monitoring, and deployment. This fragmentation leads to reduced visibility, slower incident resolution, and operational inefficiencies.

DevOps Hub provides:
- Unified visibility of all Git repositories
- End-to-end CI/CD pipeline visualization
- Direct control over build and deployment processes
- Integrated logs and debugging capabilities
- Future-ready AI-driven incident analysis and auto-remediation`,

        problemStatement: [
          'Tools operate in silos (GitHub, Jenkins, ArgoCD, Kubernetes)',
          'No unified UI for CI/CD visibility',
          'Debugging requires switching between multiple tools',
          'Limited real-time insights and monitoring',
          'Manual incident handling and response',
        ],

        keyFeatures: [
          {
            name: 'Repository Dashboard',
            description: 'Centralized GitHub repo listing with build, deploy, and alert status. One-click build and deploy triggers.',
          },
          {
            name: 'Pipeline Visualization',
            description: 'Graph-based CI/CD flow with interactive stages for end-to-end visibility.',
          },
          {
            name: 'Jenkins Integration',
            description: 'Trigger builds directly from the platform and view real-time logs.',
          },
          {
            name: 'ArgoCD Integration',
            description: 'Deploy sync, rollback capabilities, and deployment status tracking.',
          },
          {
            name: 'Kubernetes Explorer',
            description: 'Monitor pods, access logs, and manage scaling operations.',
          },
          {
            name: 'Unified Logs',
            description: 'Aggregate Jenkins and Kubernetes logs in one searchable interface.',
          },
          {
            name: 'AI Analysis (Future)',
            description: 'Root cause detection, automated PR creation, and intelligent incident handling.',
          },
        ],

        architecture: {
          frontend: ['React (TypeScript)', 'React Flow for visualizations', 'Tailwind CSS for styling'],
          backend: ['FastAPI', 'REST + WebSocket APIs'],
          integrations: ['GitHub', 'Jenkins', 'ArgoCD', 'Kubernetes'],
        },

        implementationPhases: [
          {
            phase: 'Phase 1',
            title: 'Foundation',
            items: ['Repository listing', 'Jenkins integration & build triggers', 'Basic pipeline visualization'],
          },
          {
            phase: 'Phase 2',
            title: 'Expansion',
            items: ['ArgoCD integration', 'Deployment controls'],
          },
          {
            phase: 'Phase 3',
            title: 'Advanced Features',
            items: ['Kubernetes pod management', 'Unified logs aggregation'],
          },
          {
            phase: 'Phase 4',
            title: 'Intelligence',
            items: ['AI root cause analysis', 'Automated remediation'],
          },
        ],

        futureEnhancements: [
          'Role-Based Access Control (RBAC)',
          'Multi-cluster Kubernetes support',
          'Advanced analytics and reporting',
          'ChatOps integration',
          'Custom webhooks and automation',
        ],
      },
    },
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Case Studies</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Real-world solutions we&apos;ve delivered for enterprise clients. From infrastructure transformation to DevOps automation, see how we solve complex technical challenges.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                {/* Header */}
                <button
                  onClick={() => setExpandedCase(expandedCase === index ? null : index)}
                  className="w-full text-left p-8 bg-white hover:bg-gray-50 transition flex justify-between items-start"
                >
                  <div className="flex-1">
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {caseStudy.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-3">Client: {caseStudy.client}</p>
                    <p className="text-gray-700">{caseStudy.overview}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-blue-600 transition-transform ${
                        expandedCase === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedCase === index && (
                  <div className="border-t border-gray-200 p-8 bg-gray-50">
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-700">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-700">{caseStudy.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Results</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(caseStudy.results).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-4 border border-gray-200">
                            <p className="text-sm text-gray-600 capitalize mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
                            <p className="text-lg font-semibold text-blue-600">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full Proposal */}
                    <div className="space-y-8">
                      {/* Executive Summary */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Executive Summary</h4>
                        <p className="text-gray-700 whitespace-pre-line">{caseStudy.fullProposal.executiveSummary}</p>
                      </div>

                      {/* Problem Statement */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Problem Statement</h4>
                        <ul className="space-y-2">
                          {caseStudy.fullProposal.problemStatement.map((problem, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-red-600 mr-3 font-bold">•</span>
                              <span>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {caseStudy.fullProposal.keyFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                              <h5 className="font-bold text-gray-900 mb-2">{feature.name}</h5>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Architecture */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Technology Architecture</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h5 className="font-bold text-gray-900 mb-2">Frontend</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {caseStudy.fullProposal.architecture.frontend.map((tech, idx) => (
                                <li key={idx}>✓ {tech}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h5 className="font-bold text-gray-900 mb-2">Backend</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {caseStudy.fullProposal.architecture.backend.map((tech, idx) => (
                                <li key={idx}>✓ {tech}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h5 className="font-bold text-gray-900 mb-2">Integrations</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {caseStudy.fullProposal.architecture.integrations.map((tech, idx) => (
                                <li key={idx}>✓ {tech}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Implementation Phases */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Implementation Plan</h4>
                        <div className="space-y-4">
                          {caseStudy.fullProposal.implementationPhases.map((phase, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                              <div className="flex items-start">
                                <div className="flex-shrink-0">
                                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                                    {idx + 1}
                                  </div>
                                </div>
                                <div className="ml-4 flex-1">
                                  <h5 className="font-bold text-gray-900">{phase.title}</h5>
                                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                                    {phase.items.map((item, itemIdx) => (
                                      <li key={itemIdx}>✓ {item}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Future Enhancements */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Future Enhancements</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {caseStudy.fullProposal.futureEnhancements.map((enhancement, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="text-blue-600 mr-2">→</span>
                              {enhancement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-gray-700 mb-8">
            Let&apos;s discuss how we can deliver similar results for your organization.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
