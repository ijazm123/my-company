'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CaseStudiesPage() {
  const [expandedCase, setExpandedCase] = useState<number | null>(0);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'DevOps Hub Platform',
      client: 'Enterprise Tech Solutions',
      category: 'AI-Powered DevOps',
      overview: 'AI-Powered Full-Stack DevOps Platform — Unify CI/CD pipelines, DAG workflow creation, AI-driven debugging, Kubernetes management, and comprehensive code intelligence in one intelligent dashboard.',
      challenge: 'Developers trigger builds with no real-time visibility into pipeline execution. Engineers scroll through raw console logs with no AI-assisted debugging. Teams constantly switch between Jenkins, Kubernetes dashboards, Helm repos, ArgoCD, and 10+ fragmented tools. Junior engineers lack institutional knowledge. No visual pipeline builder, no DORA metrics, no integrated security scanning, no in-browser cluster access, and no AI-powered release risk assessment — all handled manually across disconnected platforms.',
      solution: 'Built an intelligent, full-stack DevOps platform that unifies CI/CD pipeline visualization, DAG-based workflow creation, AI-driven failure analysis with auto-remediation, Kubernetes cluster management, Helm chart inspection, ArgoCD integration, DORA metrics, 10 tool integrations, and comprehensive code intelligence — all in a single developer-friendly interface.',
      results: {
        diagnosis: '80% faster root cause diagnosis with AI',
        contextSwitching: 'Zero context switching — everything in one dashboard',
        learningCurve: 'Junior engineers troubleshoot independently',
        remediation: 'One-click automated PR creation for fixes',
        architecture: 'Instant codebase understanding via Code Map & Arch Map',
        cluster: 'In-browser Kubernetes inspection without SSH',
      },
      fullProposal: {
        executiveSummary: 'DevOps Hub is an intelligent, full-stack DevOps platform with 24+ implemented features that unifies CI/CD pipeline visualization, DAG-based workflow creation, AI-driven failure analysis, automated remediation, Kubernetes cluster management, Helm chart inspection, ArgoCD integration, DORA metrics, and comprehensive code intelligence — all in a single developer-friendly interface.',
        executiveBullets: [
          'Unified 7-tab project workspace: Pipeline, Repo Structure, Artifactory, Helm Chart Repo, Argo App Repo, Kube Terminal, and Workflows',
          'DAG-based Workflow Builder with step palette, parallel execution, 7 built-in templates, and 10 tool integrations',
          'Real-time CI/CD pipeline visualization with parallel stage detection using ReactFlow',
          'AI-powered failure analysis with Gemini 2.5 Flash — including interactive Debug Chat and auto-fix PR generation with clone → run → push → merge flow',
          'Repository explorer with 7 views: Tree, Package Deps, Code Map, APIs, Database, Impact, and Arch Map — supporting 13+ programming languages',
          'AI-powered commit impact analysis with risk scoring and release guidance',
          'DORA metrics tracking (Deployment Frequency, Lead Time, Change Failure Rate, MTTR) with color-coded ratings',
          'Kubernetes cluster inspection via in-browser terminal with remote kubeconfig upload',
          'GitHub OAuth 2.0 authentication with HttpOnly cookies, opaque context IDs, and cross-account protection',
          '10 tool connections: Jenkins, GitHub, GitLab, Bitbucket, ArgoCD, SonarQube, JFrog, Trivy, OWASP ZAP, GitScraper',
          'SQLite-backed persistence (12 tables) for repos, analysis history, notes, project state, API cache, and settings',
        ],

        problemStatement: [
          {
            icon: '🔲',
            title: 'Blind Builds',
            description: 'Developers trigger builds and wait with no real-time visibility into pipeline execution or stage-level status.',
          },
          {
            icon: '🔍',
            title: 'Slow Root Cause Analysis',
            description: 'Engineers spend significant time scrolling through raw console logs to identify root causes — no AI-assisted diagnosis.',
          },
          {
            icon: '↔️',
            title: 'Context Switching Overload',
            description: 'Teams constantly switch between Jenkins, terminal windows, log aggregators, Kubernetes dashboards, and documentation.',
          },
          {
            icon: '🏢',
            title: 'Knowledge Silos',
            description: 'Junior engineers struggle to debug pipeline failures without deep institutional knowledge of infrastructure and tooling.',
          },
          {
            icon: '🔧',
            title: 'No Unified Platform',
            description: 'No unified UI for CI/CD visibility, Kubernetes management, Helm inspection, and ArgoCD operations across the organization.',
          },
          {
            icon: '🛠️',
            title: 'Manual Incident Handling',
            description: 'No automated remediation — engineers must manually fix code, commit, and re-trigger builds on every failure.',
          },
          {
            icon: '🗺️',
            title: 'No Architecture Visibility',
            description: 'Codebase understanding requires extensive manual exploration — no auto-generated code maps, API route maps, or dependency graphs.',
          },
          {
            icon: '📄',
            title: 'YAML-Only Pipelines',
            description: 'Pipeline/workflow creation requires writing Jenkinsfiles or YAML with no visual DAG-based tooling or drag-and-drop designer.',
          },
          {
            icon: '🛡️',
            title: 'Isolated Security Scanning',
            description: 'Trivy, SonarQube, and OWASP ZAP run in isolation with no integrated pipeline gate or AI-driven vulnerability analysis.',
          },
          {
            icon: '📉',
            title: 'No DORA Metrics',
            description: 'Teams lack visibility into deployment frequency, lead time, change failure rate, and MTTR.',
          },
          {
            icon: '☸️',
            title: 'Kubernetes Access Barrier',
            description: 'Cluster inspection requires SSH access and local kubectl setup — no in-browser terminal for remote clusters.',
          },
          {
            icon: '⚠️',
            title: 'Manual Release Risk Assessment',
            description: 'No AI-powered commit impact analysis or risk scoring — release risk assessment is entirely manual.',
          },
          {
            icon: '⎈',
            title: 'Scattered Helm Configurations',
            description: 'Helm chart values, dependencies, and deployment configurations are scattered across repos with no unified visual inspection.',
          },
          {
            icon: '🔗',
            title: 'Tool Fragmentation',
            description: 'Fragmentation across 10+ platforms (Jenkins, GitHub, GitLab, ArgoCD, SonarQube, JFrog, Trivy) with no centralized connection management.',
          },
        ],

        keyFeatures: [
          {
            icon: '🎯',
            name: 'Project View',
            description: 'Unified 7-tab workspace: Pipeline, Repo Structure, Artifactory, Helm Chart Repo, Argo App Repo, Kube Terminal, and Workflows.',
            highlights: ['Tab persistence', 'State preservation', 'Seamless navigation'],
          },
          {
            icon: '🚀',
            name: 'Pipeline Graph',
            description: 'Visual, real-time CI/CD pipeline visualization using ReactFlow with parallel stage detection and animated transitions.',
            highlights: ['Real-time stage status updates', 'Parallel stage detection', 'Dark theme optimized UI'],
          },
          {
            icon: '🤖',
            name: 'AI Suite — 6 Features',
            description: 'Gemini 2.5 Flash powered failure analysis, interactive debugging chat, auto-fix PR generation, and command execution.',
            highlights: ['Root cause analysis', 'Auto-fix PR generation', 'Interactive chat interface', 'Strict connected-repo binding', 'Cross-account auth protection'],
          },
          {
            icon: '🔘',
            name: 'Build Control',
            description: 'One-click build triggering with parameterized pipeline support and build history tracking.',
            highlights: ['Parameter auto-population', 'Build queue monitoring', 'History with AI reports'],
          },
          {
            icon: '📦',
            name: 'Repo Explorer — 7 Views',
            description: 'Seven integrated views: Tree, Package Deps, Code Map, APIs, Database, Impact, Arch Map — supporting 13+ languages.',
            highlights: ['Syntax highlighting', 'Interactive graphs', 'Branch switching'],
          },
          {
            icon: '🚨',
            name: 'AI Impact Analysis',
            description: 'AI-powered commit impact detection analyzing affected routes, models, and downstream dependencies.',
            highlights: ['Configurable commit window', 'Risk level assessment (low/medium/high)', 'Affected routes & models', 'Downstream impact detection'],
          },
          {
            icon: '📊',
            name: 'DORA Metrics',
            description: 'Track four key metrics: Deployment Frequency, Lead Time, Change Failure Rate, MTTR.',
            highlights: ['Color-coded ratings', 'Bar charts & sparklines', 'Multi-job analysis'],
          },
          {
            icon: '⎈',
            name: 'Helm & ArgoCD',
            description: 'Deep Helm chart inspection with env-specific values and ArgoCD app visualization with health status monitoring.',
            highlights: ['Chart.yaml parsing', 'Values by environment (ROOT/DEV/QA/PROD)', 'ArgoCD health badges', 'K8s Manifest Diagram'],
          },
          {
            icon: '⌨️',
            name: 'Kube Terminal',
            description: 'In-browser kubectl with context/namespace selectors and remote cluster support.',
            highlights: ['Command history', 'Remote kubeconfig upload', 'Whitelisted verbs only'],
          },
          {
            icon: '🔧',
            name: 'Workflow Builder',
            description: 'DAG-based pipeline designer with step palette, parallel execution, and 7 built-in templates.',
            highlights: ['Build, Security, Delivery, Flow categories', 'Parallel execution via asyncio.gather', 'Save-as-template system'],
          },
          {
            icon: '🔐',
            name: 'GitHub OAuth & Security',
            description: 'Secure OAuth 2.0 with HttpOnly cookies, opaque context IDs, and automatic session restoration.',
            highlights: ['Server-side token storage', 'Cross-account write protection', 'CORS policies'],
          },
          {
            icon: '🔗',
            name: '10 Tool Connections',
            description: 'Integrate Jenkins, GitHub, GitLab, Bitbucket, ArgoCD, SonarQube, JFrog, Trivy, OWASP ZAP, and GitScraper.',
            highlights: ['Health check testing', 'Quick Connect inline forms', 'Credential management'],
          },
          {
            icon: '🏢',
            name: 'Multi-Jenkins',
            description: 'Manage multiple Jenkins servers and standalone jobs with credential storage.',
            highlights: ['Server credentials', 'Job validation', 'Per-job parameters', 'Repo binding for auto-fix'],
          },
          {
            icon: '💾',
            name: 'SQLite Persistence',
            description: 'SQLite-backed saved repos, analysis history, notes, and settings storage with 12 tables.',
            highlights: ['Saved repos & notes', 'Analysis history', 'Projects state sync', 'API response caching'],
          },
        ],

        architecture: [
          { layer: 'Frontend', technology: 'React 18 + TypeScript + Vite 5.2', role: 'Interactive dashboards, real-time updates, AI interfaces' },
          { layer: 'State Management', technology: 'Zustand 4.5.2 (persist)', role: 'Client state with SQLite sync & rehydration' },
          { layer: 'Visualization', technology: 'ReactFlow + ELK + Mermaid', role: 'Pipeline graphs, code maps, architecture diagrams' },
          { layer: 'Backend API', technology: 'FastAPI (Python)', role: 'Proxy, AI orchestration, command execution, persistence' },
          { layer: 'AI Engine', technology: 'Gemini 2.5 Flash', role: 'Log analysis, fix generation, explanations, assessments' },
          { layer: 'CI/CD', technology: 'Jenkins with wfapi', role: 'Pipeline execution, stage data, DORA metrics source' },
          { layer: 'Version Control', technology: 'GitHub API + OAuth 2.0', role: 'Repo management, PR creation, OAuth authentication' },
          { layer: 'Container Orch.', technology: 'Kubernetes (kubectl)', role: 'Read-only cluster inspection via proxied commands' },
          { layer: 'GitOps', technology: 'ArgoCD', role: 'App health & sync status monitoring' },
          { layer: 'Package Mgmt', technology: 'Helm', role: 'Chart inspection, values analysis, graphing' },
          { layer: 'Persistence', technology: 'SQLite (12 tables)', role: 'Repos, history, notes, settings, API caching' },
          { layer: 'Image Export', technology: 'html-to-image', role: 'SVG/PNG export for diagrams & graphs' },
        ],

        useCases: [
          { scenario: 'Build Failure', without: 'Jenkins → logs → Google → fix', with: 'Red node → AI report → fix' },
          { scenario: 'Vulnerability', without: 'Manual research & fix', with: 'Click "Execute Fix" → PR created' },
          { scenario: 'New Codebase', without: 'Clone → browse → ask colleagues', with: 'Tree View → AI explanation' },
          { scenario: 'Architecture Review', without: 'Manual tracing & docs', with: 'Code Map + Arch Map with exports' },
          { scenario: 'Release Risk', without: 'Manual commit analysis', with: 'Impact tab → AI assessment' },
          { scenario: 'Cluster Inspection', without: 'SSH + kubectl locally', with: 'Kube Terminal in-browser' },
          { scenario: 'Performance Metrics', without: 'Manual counting & spreadsheets', with: 'DORA Dashboard with charts' },
          { scenario: 'Pipeline Creation', without: 'Write Jenkinsfile/YAML manually', with: 'Drag-and-drop Workflow Builder' },
          { scenario: 'Security Scanning', without: 'Run Trivy/SonarQube CLI separately', with: 'Built into pipeline with AI gate' },
        ],

        security: [
          'All credentials stored server-side only',
          'Jenkins communication proxied through backend',
          'GitHub OAuth tokens in HttpOnly cookies (never exposed to JS)',
          'GitHub write actions enforce account consistency checks',
          'Invalid repo username/token validated before auth use',
          'Kubectl commands whitelisted to read-only verbs',
          'Remote kubeconfig sessions in temp files with cleanup',
          'Opaque context IDs prevent owner/repo exposure',
          'GitHub API response caching reduces token usage',
          'Command execution with timeout limits and filtering',
          'CORS policies restrict access to authorized origins',
        ],

        implementationPhases: [
          {
            phase: 'Phase 1',
            title: 'Foundation',
            items: ['Project View with 7-tab workspace', 'Jenkins integration with multi-server management', 'Real-time pipeline visualization with ReactFlow', 'GitHub OAuth 2.0 with HttpOnly cookies & opaque context IDs'],
          },
          {
            phase: 'Phase 2',
            title: 'Code Intelligence',
            items: ['7-view Repo Explorer (Tree, Package Deps, Code Map, APIs, Database, Impact, Arch Map)', 'Multi-language code map parser (13+ languages)', 'Manifest parsing for 9 package formats', 'Mermaid architecture diagram generation with SVG/PNG export'],
          },
          {
            phase: 'Phase 3',
            title: 'AI-Powered Analysis',
            items: ['Gemini 2.5 Flash failure analysis & interactive AI Debug Chat', 'Auto-fix PR generation with clone → run → push → merge flow', 'AI Impact Analysis with risk scoring from recent commits', 'AI Repo Structure Chat for codebase exploration'],
          },
          {
            phase: 'Phase 4',
            title: 'Workflow & Infrastructure',
            items: ['DAG-based Workflow Builder with parallel step execution', '7 built-in pipeline templates with save-as-template system', 'Kubernetes cluster inspection & Kube Terminal with remote kubeconfig', 'Helm chart inspector with env sub-tabs & ArgoCD app detection', 'DORA metrics dashboard (Deployment Freq, Lead Time, CFR, MTTR)'],
          },
          {
            phase: 'Phase 5',
            title: 'Enterprise Features',
            items: ['10 tool connections with health checks & Quick Connect', 'Jenkins XML config generator with Active Choices & multibranch support', 'SQLite persistence (12 tables) with server-side API caching', 'Security scanning pipeline (Trivy, SonarQube, Wiz, OWASP ZAP)'],
          },
        ],

        futureEnhancements: [
          { icon: '📺', title: 'Multi-Pipeline Dashboard', description: 'Monitor multiple pipelines simultaneously on a single screen' },
          { icon: '📈', title: 'Historical Build Analytics', description: 'Track failure trends, build duration patterns, and flaky stage detection' },
          { icon: '💬', title: 'Slack/Teams Notifications', description: 'AI debug reports delivered directly to team channels on failure' },
          { icon: '🧠', title: 'Multi-AI Provider Support', description: 'Extend beyond Gemini to OpenAI and Claude for failure analysis' },
          { icon: '🔄', title: 'Multi-CI Support', description: 'Extend beyond Jenkins to GitHub Actions, GitLab CI, Azure DevOps' },
          { icon: '🔀', title: 'Build Comparison', description: 'Side-by-side diff of successful vs failed builds' },
          { icon: '🤖', title: 'MCP Server Integration', description: 'Autonomous remediation agents with Model Context Protocol' },
          { icon: '🌐', title: 'Cross-Repo Dependency Mapping', description: 'Visualize dependencies between multiple repositories' },
          { icon: '🧾', title: 'PR Review Workspace', description: 'Rich PR diff/review experience on top of existing merge support' },
        ],
      },
    },
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,212,255,0.1)_0%,transparent_50%)]" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">Case <span className="gradient-text">Studies</span></h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Real-world solutions we&apos;ve delivered for enterprise clients. From infrastructure transformation to DevOps automation, see how we solve complex technical challenges.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-bg-card border border-white/10 rounded-[20px] overflow-hidden hover:border-primary/20 transition-all duration-300">
                {/* Header */}
                <button
                  onClick={() => setExpandedCase(expandedCase === index ? null : index)}
                  className="w-full text-left p-8 hover:bg-bg-card-hover transition flex justify-between items-start"
                >
                  <div className="flex-1">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {caseStudy.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
                    <p className="text-text-secondary mb-3">Client: {caseStudy.client}</p>
                    <p className="text-text-secondary">{caseStudy.overview}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <i className={`fas fa-chevron-down text-primary transition-transform ${expandedCase === index ? 'rotate-180' : ''}`}></i>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedCase === index && (
                  <div className="border-t border-white/10 p-8 bg-bg-dark/50">
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold mb-3">Challenge</h4>
                        <p className="text-text-secondary">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">Solution</h4>
                        <p className="text-text-secondary">{caseStudy.solution}</p>
                      </div>
                    </div>

                    {/* Architecture Diagram */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">Feasibility &amp; Architecture</h4>
                      <div className="bg-bg-card rounded-xl border border-white/10 overflow-hidden">
                        <Image
                          src="/devops-hub-architecture.svg"
                          alt="DevOps Hub Platform - Feasibility and Architecture Diagram"
                          width={1200}
                          height={865}
                          className="w-full h-auto"
                          priority
                        />
                      </div>
                    </div>

                    {/* CI/CD Pipeline Diagram */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">CI/CD Pipeline — AI Security Gate &amp; Debug Chat</h4>
                      <div className="bg-bg-card rounded-xl border border-white/10 overflow-hidden">
                        <Image
                          src="/devops-hub-pipeline.svg"
                          alt="CI/CD Pipeline with AI Security Gate and Gemini Debug Chat"
                          width={1200}
                          height={720}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* MCP + Gemini AI Remediation Flow */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">Runtime Detection &amp; AI Remediation (MCP + Gemini)</h4>
                      <div className="bg-bg-card rounded-xl border border-white/10 overflow-hidden">
                        <Image
                          src="/devops-hub-mcp-remediation.svg"
                          alt="Runtime Detection and AI Remediation Flow with MCP Server and Gemini AI"
                          width={1200}
                          height={900}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Platform in Action */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-2">Platform in Action</h4>
                      <p className="text-text-secondary mb-6">Real screenshots from the DevOps Hub platform showcasing key capabilities.</p>

                      {/* CI/CD Pipeline & AI Security */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <i className="fas fa-shield-halved text-primary"></i>
                          CI/CD Pipeline &amp; AI-Powered Security
                        </h5>
                        <div className="space-y-4">
                          <button onClick={() => setLightboxImage({ src: '/case-studies/AI-debug.svg', alt: 'Pipeline with AI Debug Chat' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                            <Image src="/case-studies/AI-debug.svg" alt="Pipeline Execution with AI Debug" width={1500} height={780} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                            <div className="p-4">
                              <p className="text-sm font-semibold">Pipeline Execution with AI Debug Chat</p>
                              <p className="text-xs text-text-secondary mt-1">8-stage CI pipeline with real-time status. AI Debug identifies CVE-2019-5413 in morgan@1.9.0 as root cause and provides fix instructions.</p>
                            </div>
                          </button>
                          <div className="grid md:grid-cols-2 gap-4">
                            <button onClick={() => setLightboxImage({ src: '/case-studies/cicd-agent-autofix.png', alt: 'AI Auto-Fix Analysis' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                              <Image src="/case-studies/cicd-agent-autofix.png" alt="AI Auto-Fix Analysis" width={600} height={400} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                              <div className="p-3">
                                <p className="text-sm font-semibold">AI Auto-Fix Analysis</p>
                                <p className="text-xs text-text-secondary mt-1">Root cause detection, proposed fix with confidence level, and manual remediation steps.</p>
                              </div>
                            </button>
                            <button onClick={() => setLightboxImage({ src: '/case-studies/Autofix-execution-PR.png', alt: 'Auto-Fix Execution & PR Creation' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                              <Image src="/case-studies/Autofix-execution-PR.png" alt="Auto-Fix Execution and PR Creation" width={600} height={400} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                              <div className="p-3">
                                <p className="text-sm font-semibold">Auto-Fix Execution &amp; PR Creation</p>
                                <p className="text-xs text-text-secondary mt-1">Automated commit, push, and pull request creation with merge options (Squash/Merge/Rebase).</p>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Repository Intelligence */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <i className="fas fa-code-branch text-primary"></i>
                          Repository Intelligence
                        </h5>
                        <div className="space-y-4">
                          <button onClick={() => setLightboxImage({ src: '/case-studies/app-repo-page1.svg', alt: 'Repository Dashboard' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                            <Image src="/case-studies/app-repo-page1.svg" alt="Repository Dashboard with Tree View" width={1500} height={820} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                            <div className="p-4">
                              <p className="text-sm font-semibold">Repository Dashboard — Tree View &amp; AI Assistant</p>
                              <p className="text-xs text-text-secondary mt-1">File composition analysis, 7 view modes (Tree, Package Deps, Code Map, APIs, Database, Impact, Arch Map), and built-in AI Project Assistant.</p>
                            </div>
                          </button>
                          <div className="grid md:grid-cols-2 gap-4">
                            <button onClick={() => setLightboxImage({ src: '/case-studies/Arch-map.svg', alt: 'Architecture Overview' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                              <Image src="/case-studies/Arch-map.svg" alt="Architecture Overview" width={1500} height={820} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                              <div className="p-3">
                                <p className="text-sm font-semibold">Architecture Overview</p>
                                <p className="text-xs text-text-secondary mt-1">Auto-generated layered dependency graph with ELK layout engine. Export as SVG/PNG.</p>
                              </div>
                            </button>
                            <button onClick={() => setLightboxImage({ src: '/case-studies/api-route-map.svg', alt: 'API Route Map' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                              <Image src="/case-studies/api-route-map.svg" alt="API Route Map" width={1500} height={780} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                              <div className="p-3">
                                <p className="text-sm font-semibold">API Route Map</p>
                                <p className="text-xs text-text-secondary mt-1">Visual endpoint flow from client to route handlers with file-level grouping.</p>
                              </div>
                            </button>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <button onClick={() => setLightboxImage({ src: '/case-studies/repo-api-page.svg', alt: 'API Endpoints Table' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                              <Image src="/case-studies/repo-api-page.svg" alt="API Endpoints Table" width={1500} height={780} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                              <div className="p-3">
                                <p className="text-sm font-semibold">API Endpoints Discovery</p>
                                <p className="text-xs text-text-secondary mt-1">Auto-discovered 9 API endpoints with method badges (GET/POST/ROUTE) and source file mapping.</p>
                              </div>
                            </button>
                            <button onClick={() => setLightboxImage({ src: '/case-studies/impact-analysis.png', alt: 'AI Impact Analysis' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                              <Image src="/case-studies/impact-analysis.png" alt="AI Impact Analysis" width={600} height={400} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                              <div className="p-3">
                                <p className="text-sm font-semibold">AI Impact Analysis</p>
                                <p className="text-xs text-text-secondary mt-1">Gemini-powered release risk assessment with impact scoring, validation recommendations, and risk factors.</p>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Kubernetes */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <i className="fas fa-dharmachakra text-primary"></i>
                          Kubernetes Management
                        </h5>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <button onClick={() => setLightboxImage({ src: '/case-studies/k8s-dgm.svg', alt: 'K8s Manifest Diagram' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                              <Image src="/case-studies/k8s-dgm.svg" alt="K8s Manifest Diagram" width={1400} height={800} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                              <div className="p-3">
                                <p className="text-sm font-semibold">K8s Manifest Diagram</p>
                                <p className="text-xs text-text-secondary mt-1">Full Kubernetes resource graph — networking, storage, config, workloads from ArgoCD application to manifest files.</p>
                              </div>
                            </button>
                            <button onClick={() => setLightboxImage({ src: '/case-studies/kube-terminal.svg', alt: 'Kube Terminal' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                              <Image src="/case-studies/kube-terminal.svg" alt="Kube Terminal" width={1400} height={720} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                              <div className="p-3">
                                <p className="text-sm font-semibold">Kube Terminal — Direct Cluster Access</p>
                                <p className="text-xs text-text-secondary mt-1">Secure kubectl access with context/namespace selectors, allowed verbs, and real-time pod monitoring across clusters.</p>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Workflow Builder */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <i className="fas fa-project-diagram text-primary"></i>
                          Workflow Builder — DAG Pipeline Creation
                        </h5>
                        <div className="space-y-4">
                          <button onClick={() => setLightboxImage({ src: '/case-studies/workflow-builder.svg', alt: 'Workflow Builder — DAG Designer' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                            <Image src="/case-studies/workflow-builder.svg" alt="Workflow Builder — DAG Designer" width={1200} height={700} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                            <div className="p-4">
                              <p className="text-sm font-semibold">Workflow Builder — Visual DAG Pipeline Designer</p>
                              <p className="text-xs text-text-secondary mt-1">Drag-and-drop pipeline creation with horizontal/vertical DAG layouts. Configure each step with tool connections, Jenkins job creation, build types, and dependency chains — all from the visual canvas.</p>
                            </div>
                          </button>
                          <button onClick={() => setLightboxImage({ src: '/case-studies/workflow-step-palette.svg', alt: 'Step Palette & DAG Execution' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                            <Image src="/case-studies/workflow-step-palette.svg" alt="Step Palette & DAG Execution" width={1200} height={700} className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300" />
                            <div className="p-4">
                              <p className="text-sm font-semibold">Step Palette &amp; Parallel DAG Execution</p>
                              <p className="text-xs text-text-secondary mt-1">8 step types across 4 categories (Build, Security, Delivery, Flow). DAG engine executes independent steps in parallel via asyncio.gather with real-time status, abort controls, and approval gates.</p>
                            </div>
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4">Results</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(caseStudy.results).map(([key, value]) => (
                          <div key={key} className="bg-bg-card rounded-xl p-4 border border-white/10">
                            <p className="text-sm text-text-secondary capitalize mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
                            <p className="text-lg font-semibold text-primary">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full Proposal */}
                    <div className="space-y-8">
                      {/* Executive Summary */}
                      <div>
                        <h4 className="text-xl font-bold mb-3">Executive Summary</h4>
                        <p className="text-text-secondary">{caseStudy.fullProposal.executiveSummary}</p>
                      </div>

                      {/* Problem Statement */}
                      <div>
                        <h4 className="text-xl font-bold mb-3">Problem Statement</h4>
                        <p className="text-sm text-text-secondary mb-4">Modern DevOps teams face critical challenges with CI/CD pipelines:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {caseStudy.fullProposal.problemStatement.map((problem, idx) => (
                            <div key={idx} className="bg-bg-card rounded-xl p-5 border border-white/10 hover:border-red-500/30 hover:bg-red-500/[0.03] transition-all duration-300">
                              <h5 className="font-bold mb-2 flex items-center gap-2">
                                <span>{problem.icon}</span>
                                {problem.title}
                              </h5>
                              <p className="text-sm text-text-secondary">{problem.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-xl font-bold mb-4">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {caseStudy.fullProposal.keyFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-bg-card rounded-xl p-5 border border-white/10 hover:border-primary/30 transition-all duration-300">
                              <h5 className="font-bold mb-2 text-[#00d4ff] flex items-center gap-2">
                                <span>{feature.icon}</span>
                                {feature.name}
                              </h5>
                              <p className="text-sm text-text-secondary mb-3">{feature.description}</p>
                              <ul className="space-y-1.5">
                                {feature.highlights.map((item, hIdx) => (
                                  <li key={hIdx} className="text-xs text-text-secondary flex items-center gap-2">
                                    <span className="text-green-500 font-bold">→</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Architecture */}
                      <div>
                        <h4 className="text-xl font-bold mb-4">Technology Architecture</h4>
                        <p className="text-sm text-text-secondary mb-4">The platform follows a clean, multi-layer architecture:</p>
                        <div className="overflow-x-auto rounded-xl border border-white/10 bg-bg-card">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b-2 border-white/10 bg-blue-600/10">
                                <th className="text-left p-4 text-[#00d4ff] font-bold text-xs uppercase tracking-wider">Layer</th>
                                <th className="text-left p-4 text-[#00d4ff] font-bold text-xs uppercase tracking-wider">Technology</th>
                                <th className="text-left p-4 text-[#00d4ff] font-bold text-xs uppercase tracking-wider">Role</th>
                              </tr>
                            </thead>
                            <tbody>
                              {caseStudy.fullProposal.architecture.map((row, idx) => (
                                <tr key={idx} className="border-b border-white/5 hover:bg-[#7fd1ff]/[0.04] transition-colors">
                                  <td className="p-4 font-semibold whitespace-nowrap">{row.layer}</td>
                                  <td className="p-4 text-text-secondary">{row.technology}</td>
                                  <td className="p-4 text-text-secondary">{row.role}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Implementation Phases */}
                      <div>
                        <h4 className="text-xl font-bold mb-4">Implementation Plan</h4>
                        <div className="space-y-4">
                          {caseStudy.fullProposal.implementationPhases.map((phase, idx) => (
                            <div key={idx} className="bg-bg-card rounded-xl p-4 border border-white/10">
                              <div className="flex items-start">
                                <div className="flex-shrink-0">
                                  <div className="flex items-center justify-center h-8 w-8 rounded-full gradient-primary text-white font-bold text-sm">
                                    {idx + 1}
                                  </div>
                                </div>
                                <div className="ml-4 flex-1">
                                  <h5 className="font-bold">{phase.title}</h5>
                                  <ul className="text-sm text-text-secondary mt-2 space-y-1">
                                    {phase.items.map((item, itemIdx) => (
                                      <li key={itemIdx} className="flex items-center gap-1"><i className="fas fa-check text-success text-xs"></i> {item}</li>
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
                        <h4 className="text-xl font-bold mb-3">Future Roadmap</h4>
                        <p className="text-sm text-text-secondary mb-4">Planned Features (Q2-Q3 2026)</p>
                        <div className="space-y-3">
                          {caseStudy.fullProposal.futureEnhancements.map((item, idx) => (
                            <div key={idx} className="bg-bg-card rounded-lg p-4 border-l-4 border-yellow-500/60 border border-white/10">
                              <h5 className="text-sm font-bold flex items-center gap-2">
                                <span>{item.icon}</span>
                                {item.title}
                              </h5>
                              <p className="text-xs text-text-secondary mt-1">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h4 className="text-xl font-bold mb-4">Use Cases — Before &amp; After</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b border-white/10">
                                <th className="text-left p-3 text-text-secondary font-semibold">Scenario</th>
                                <th className="text-left p-3 text-text-secondary font-semibold">Without DevOps Hub</th>
                                <th className="text-left p-3 text-text-secondary font-semibold">With DevOps Hub</th>
                              </tr>
                            </thead>
                            <tbody>
                              {caseStudy.fullProposal.useCases.map((uc, idx) => (
                                <tr key={idx} className="border-b border-white/5">
                                  <td className="p-3 font-semibold">{uc.scenario}</td>
                                  <td className="p-3 text-text-secondary">{uc.without}</td>
                                  <td className="p-3 text-primary">{uc.with}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Security */}
                      <div>
                        <h4 className="text-xl font-bold mb-3">Security Considerations</h4>
                        <div className="bg-bg-card rounded-xl p-5 border border-white/10">
                          <ul className="space-y-2">
                            {caseStudy.fullProposal.security.map((item, idx) => (
                              <li key={idx} className="flex items-start text-text-secondary text-sm">
                                <i className="fas fa-shield-halved text-success text-xs mr-3 mt-1"></i>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Full Architecture Diagram */}
                      <div>
                        <h4 className="text-xl font-bold mb-4">AI-Powered DevSecOps Platform (GitOps) with MCP</h4>
                        <p className="text-text-secondary mb-4 text-sm">Complete platform architecture — runtime detection, AI remediation flow, Kubernetes cluster, CI/CD pipelines, monitoring stack, and shared services.</p>
                        <button onClick={() => setLightboxImage({ src: '/case-studies/ai-devsecops-platform.png', alt: 'AI-Powered DevSecOps Platform (GitOps) with MCP - Full Architecture' })} className="block w-full text-left bg-bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                          <Image
                            src="/case-studies/ai-devsecops-platform.png"
                            alt="AI-Powered DevSecOps Platform (GitOps) with MCP - Full Architecture"
                            width={1200}
                            height={900}
                            className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-300"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Case Studies */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">Coming Soon</span>
          </div>
          <h2 className="text-3xl font-extrabold mb-4">Upcoming Case <span className="gradient-text">Studies</span></h2>
          <p className="text-text-secondary mb-10 max-w-2xl">Projects currently in progress. Stay tuned for detailed write-ups once delivered.</p>

          <div className="space-y-6">
            {/* Backstage */}
            <div className="bg-bg-card border border-yellow-500/20 rounded-[20px] overflow-hidden relative">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-500/15 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-500/30">In Progress</span>
              </div>
              <div className="p-8">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Developer Portal &amp; Microservices
                </div>
                <h3 className="text-2xl font-bold mb-2">Backstage Developer Portal — Customized for Microservices</h3>
                <p className="text-text-secondary mb-6">
                  Custom Backstage implementation for organizations running microservices architectures. A unified developer portal that brings service catalog, API documentation, CI/CD visibility, infrastructure tooling, and team ownership into a single pane of glass — eliminating the fragmentation that comes with scaling to dozens or hundreds of services. The built-in Scaffolder lets teams spin up production-ready microservices from golden path templates in minutes — with pre-wired CI/CD, Kubernetes manifests, observability, and compliance baked in from day one. An AI chat agent powered by the Backstage MCP server lets developers query service ownership, dependencies, API specs, and platform status using natural language — directly from VS Code via native MCP support, without ever leaving their editor.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-3">What We&apos;re Building</h4>
                    <ul className="space-y-2">
                      {[
                        'Custom Backstage plugins for internal tooling integration',
                        'Software catalog with service ownership & dependency mapping',
                        'Scaffolder with golden path templates — new microservice to production-ready repo in clicks',
                        'Custom scaffolder actions: create GitHub repo, register in catalog, provision infrastructure & configure CI/CD automatically',
                        'API documentation hub with OpenAPI/gRPC spec rendering',
                        'CI/CD pipeline visibility across all services',
                        'Tech docs site powered by TechDocs (MkDocs)',
                        'Kubernetes & cloud resource visibility per service',
                        'Custom scorecards for service maturity & compliance',
                        'AI chat agent via Backstage MCP server — query services, owners, APIs & docs in natural language',
                        'VS Code connects to Backstage MCP server — developers chat with their platform without leaving the editor',
                      ].map((item, idx) => (
                        <li key={idx} className="text-sm text-text-secondary flex items-start gap-2">
                          <i className="fas fa-wrench text-yellow-400 text-xs mt-1"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-3">Target Outcomes</h4>
                    <ul className="space-y-2">
                      {[
                        'Single portal for all developer needs — zero context switching',
                        'New microservice from template to production in minutes',
                        'Clear service ownership across the entire organization',
                        'Automated API discovery and documentation',
                        'Reduced onboarding time for new engineers',
                        'Consistent service standards via golden path templates',
                        'Full visibility into service health, deps & infrastructure',
                        'Plugin ecosystem extensible to any internal tool',
                        'AI-powered answers about any microservice — ownership, status, APIs — from VS Code',
                      ].map((item, idx) => (
                        <li key={idx} className="text-sm text-text-secondary flex items-start gap-2">
                          <i className="fas fa-bullseye text-primary text-xs mt-1"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Backstage', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Kubernetes', 'Microservices', 'Software Catalog', 'TechDocs', 'MCP Server', 'AI Agent', 'VS Code'].map((tag) => (
                    <span key={tag} className="bg-white/5 text-text-secondary text-xs px-3 py-1 rounded-full border border-white/10">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-[800px] mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10 rounded-[30px] p-16 relative overflow-hidden">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-text-secondary mb-8">
            Let&apos;s discuss how we can deliver similar results for your organization.
          </p>
          <a href="/contact" className="gradient-primary text-white px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,212,255,0.4)] transition-all duration-300">
            <i className="fas fa-rocket"></i>
            Schedule a Consultation
          </a>
        </div>
      </section>
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-50 w-10 h-10 flex items-center justify-center"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="max-w-[95vw] max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1920}
              height={1080}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/70 text-sm mt-3">{lightboxImage.alt}</p>
          </div>
        </div>
      )}
    </main>
  );
}
