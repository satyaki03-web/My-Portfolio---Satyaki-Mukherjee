import React, { useState } from "react";
import { Project } from "../types";
import { ExternalLink, Github, Layers, Sparkles, Code, X, Compass, Globe, Sparkle } from "lucide-react";

interface ProjectsProps {}

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      id: "pantry",
      title: "Smart Pantry Pal",
      description: "A smart, helpful inventory assistant powered by Firebase that makes managing food stocks simple and efficient.",
      longDescription: "Smart Pantry Pal was designed to tackle household food waste. Backed by Firebase, it enables instant real-time synchronization of pantry lists across devices. Users can track stock counts, log expiration dates, and get automatic recipe matches based on what is currently sitting in their fridge.",
      category: "firebase",
      badgeText: "Firebase",
      image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800&auto=format&fit=crop",
      tags: ["Firebase", "Pantry Tracking", "React", "Live Sync"],
      demoUrl: "pantry",
      githubUrl: "https://github.com/satyakimukherjee03/smart-pantry-pal",
      keyFeatures: [
        "Firebase Firestore synchronization for shared grocery lists",
        "Visual stock warning alerts when ingredients are depleted",
        "Intelligent recipe recommendation system based on available stock",
        "Clean, responsive grid interface styled with warm pastel yellow tags"
      ],
      techStack: ["React 18", "Firebase Firestore", "Firebase Authentication", "Tailwind CSS", "Lucide Icons"]
    },
    {
      id: "confession",
      title: "Breakthrough Confession App",
      description: "A welcoming, vulnerability-first social space for mental wellness integrated with Antigravity for empathetic guidance.",
      longDescription: "Designed with student mental wellness in mind, Breakthrough provides a safe and warm box for users to release worries anonymously. Once submitted, the entry gracefully dissolves, and 'Clari', a kind-hearted companion powered by Antigravity, offers helpful words of support and self-care prompts.",
      category: "antigravity",
      badgeText: "Confession",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop",
      tags: ["Antigravity AI", "Clari Companion", "Wellness Tech", "Glassmorphism"],
      demoUrl: "confession",
      githubUrl: "https://github.com/satyakimukherjee03/breakthrough-confessions",
      keyFeatures: [
        "Raw ventilation text area with emotional release 'ether' dissolve animation",
        "Empathetic, responsive companion dialogue powered by Antigravity",
        "Soothing, warm color presets designed to calm sensory overload",
        "Zero-retention client privacy filters to safeguard anonymous logs"
      ],
      techStack: ["React", "Antigravity SDK", "CSS Animation Frames", "Tailwind CSS"]
    },
    {
      id: "isl",
      title: "ISL Interpreter Prototype",
      description: "An accessibility-focused translation prototype co-engineered with Antigravity to make education and learning inclusive.",
      longDescription: "The Indian Sign Language (ISL) Interpreter converts standard typed text and vocabulary into beautiful, interactive hand gesture models. Developed as a helper tool powered by Antigravity, it assists classmates and instructors in studying basic fingerspelling and gestures, supporting an inclusive campus culture.",
      category: "antigravity",
      badgeText: "Accessibility",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      tags: ["Antigravity", "Inclusive Education", "Sign Language", "Vector Gestures"],
      demoUrl: "isl",
      githubUrl: "https://github.com/satyakimukherjee03/isl-interpreter",
      keyFeatures: [
        "Fingerspelling rendering component that displays letters visually",
        "Accessible, high-contrast layouts conforming to WCAG principles",
        "Interactive sign speed slider for optimized learning paces",
        "Antigravity conversational help module to navigate the interface"
      ],
      techStack: ["React", "Antigravity Agent", "Lucide Vectors", "Tailwind CSS"]
    },
    {
      id: "election",
      title: "Election Education App",
      description: "An interactive, timeline-driven web experience using Antigravity to explain complex electoral systems simply.",
      longDescription: "Civic comprehension is key to voting. The Election Education platform, featuring an Antigravity AI explainer, breaks down how various voting structures (like Ranked Choice Voting vs. First-Past-The-Post) compute victory. Featuring an interactive ballot box and count visualization graphs, users can see vote-transfers happen in real time.",
      category: "antigravity",
      badgeText: "Civics",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop",
      tags: ["Antigravity", "Interactive Timeline", "Civic Education", "Vote Simulators"],
      demoUrl: "election",
      githubUrl: "https://github.com/satyakimukherjee03/election-edu",
      keyFeatures: [
        "Interactive multi-stage election count simulation models",
        "Interactive history timelines mapping milestones of representation",
        "Simple natural language explanation powered by Antigravity",
        "Accessible, non-partisan educational guides"
      ],
      techStack: ["React", "Antigravity API", "Standard Charts", "Tailwind CSS"]
    }
  ];

  const filterCategories = [
    { id: "all", label: "All Works" },
    { id: "firebase", label: "Firebase Apps" },
    { id: "antigravity", label: "Antigravity" },
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Soft pastel background mapping based on project ID for gorgeous hover states
  const getHoverBg = (projectId: string) => {
    switch (projectId) {
      case "pantry":
        return "hover:border-pastel-yellow-border hover:shadow-pastel-yellow/10";
      case "confession":
        return "hover:border-pastel-red-border hover:shadow-pastel-red/10";
      case "isl":
        return "hover:border-pastel-blue-border hover:shadow-pastel-blue/10";
      case "election":
      default:
        return "hover:border-stone-400 hover:shadow-stone-200/10";
    }
  };

  const getTagStyle = (projectId: string) => {
    switch (projectId) {
      case "pantry":
        return "bg-pastel-yellow text-pastel-yellow-dark border-pastel-yellow-border/30";
      case "confession":
        return "bg-pastel-red text-pastel-red-dark border-pastel-red-border/30";
      case "isl":
        return "bg-pastel-blue text-pastel-blue-dark border-pastel-blue-border/30";
      case "election":
      default:
        return "bg-stone-100 text-stone-700 border-stone-200";
    }
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            My Projects
          </h2>
          <p className="text-sm md:text-base text-stone-600 max-w-xl mt-2 opacity-90">
            A hand-picked selection of student-centric, inclusive, and modern educational prototypes created to solve real problems simply.
          </p>
        </div>

        {/* Filter Navigation Chips */}
        <div className="flex flex-wrap gap-2 self-start md:self-end bg-stone-100/60 p-1 rounded-2xl border border-stone-200/40">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                filter === cat.id
                  ? "bg-white text-stone-900 shadow-sm border border-stone-200"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`glass-panel rounded-2xl overflow-hidden relative flex flex-col group h-full cursor-pointer border-stone-200 ${getHoverBg(project.id)}`}
            onClick={() => setActiveProject(project)}
          >
            <div className="bento-glow" />

            {/* Image Preview with Soft Pastel Overlay */}
            <div className="relative h-48 overflow-hidden bg-stone-100">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              {/* Fade Overlay matching light aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              
              {/* Category chip absolute in corner */}
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${getTagStyle(project.id)}`}>
                {project.badgeText || project.category}
              </span>
            </div>

            {/* Core Card Details */}
            <div className="p-6 flex-1 flex flex-col justify-between bg-white/40">
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-pastel-red-dark transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed opacity-90 line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-200/50 flex flex-col gap-3">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200 text-[10px] font-bold text-stone-600 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info action hint */}
                <span className="text-[10px] font-bold text-pastel-red-dark flex items-center gap-1 group-hover:underline mt-1">
                  <Layers className="w-3.5 h-3.5" /> View Specs &amp; Project Details &gt;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel w-full max-w-3xl rounded-2xl overflow-hidden relative max-h-[90vh] flex flex-col border-stone-200 bg-white shadow-2xl">
            <div className="bento-glow" />

            {/* Header / Banner */}
            <div className="relative h-44 shrink-0 bg-stone-100">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono border ${getTagStyle(activeProject.id)}`}>
                  {activeProject.badgeText || activeProject.category}
                </span>
                <h3 className="text-2xl font-extrabold text-stone-900 mt-1.5 tracking-tight">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              
              {/* Long Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-stone-500 font-sans flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5" /> Concept &amp; Design Goal
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {activeProject.longDescription || activeProject.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider font-bold text-stone-500 font-sans flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-pastel-yellow-dark" /> Key Application Milestones
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 leading-relaxed font-sans">
                  {activeProject.keyFeatures.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="text-emerald-500 mt-0.5 font-bold">✔</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complete Tech Stack */}
              <div className="space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider font-bold text-stone-500 font-sans flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-pastel-blue-dark" /> Technology Composition
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="p-4 border-t border-stone-200 bg-stone-50/50 flex justify-between gap-3 shrink-0">
              <a
                href={activeProject.githubUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 font-bold text-xs uppercase tracking-wider text-stone-700 text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
