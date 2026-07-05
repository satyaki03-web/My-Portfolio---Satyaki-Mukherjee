import React, { useState } from "react";
import { Code2, Globe, BrainCircuit, Sparkles, BookOpen } from "lucide-react";

interface SkillDetail {
  name: string;
  desc: string;
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const skillDetails: Record<string, string> = {
    "Java": "Building object-oriented solutions and coding robust algorithms. Satyaki's primary language for implementing data structures and academic projects.",
    "C": "Understanding memory management, pointers, and CPU-level execution fundamentals. Establishes a strong computer science core in his first year at MAKAUT.",
    "HTML": "Writing semantic, structured web standards with high emphasis on SEO, responsive layouts, and proper hierarchy.",
    "CSS": "Styling pixel-perfect layouts using modern design systems, fluid grid coordinates, and custom transition timelines.",
    "JavaScript": "Engineering dynamic client interactions, asynchronous API handling, and creating reactive interface elements.",
    "Data Structures and Algorithms (DSA)": "Unlocking optimal problem-solving speeds. Actively mastering recursion, trees, graphs, sorting, and algorithmic complexity to design efficient application states."
  };

  const categories = [
    {
      title: "Core Languages",
      icon: Code2,
      color: "text-pastel-red-dark bg-pastel-red/55 border-pastel-red-border/40",
      tagColor: "bg-pastel-red hover:bg-pastel-red/80 text-pastel-red-dark border-pastel-red-border/30",
      skills: ["Java", "C"],
    },
    {
      title: "Web Basics",
      icon: Globe,
      color: "text-pastel-blue-dark bg-pastel-blue/55 border-pastel-blue-border/40",
      tagColor: "bg-pastel-blue hover:bg-pastel-blue/80 text-pastel-blue-dark border-pastel-blue-border/30",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Current Focus",
      icon: BrainCircuit,
      color: "text-pastel-yellow-dark bg-pastel-yellow/55 border-pastel-yellow-border/40",
      tagColor: "bg-pastel-yellow hover:bg-pastel-yellow/80 text-pastel-yellow-dark border-pastel-yellow-border/30",
      skills: ["Data Structures and Algorithms (DSA)"],
    },
  ];

  const handleSkillClick = (skill: string) => {
    setSelectedSkill({
      name: skill,
      desc: skillDetails[skill] || "Essential tool within my developing technical workflow."
    });
  };

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-pastel-red-dark mb-2 block">
          Technical Arsenal
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          My Skills
        </h2>
        <p className="text-sm md:text-base text-stone-600 max-w-2xl mx-auto mt-2 opacity-90">
          Click any minimalist pastel tag below to learn how I apply this technology to solve real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.title}
              className="glass-panel p-8 rounded-2xl relative flex flex-col justify-between min-h-[220px] border-stone-200"
            >
              <div className="bento-glow" />
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl border ${category.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer border transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:scale-102 ${category.tagColor}`}
                    >
                      {skill}
                      <BookOpen className="w-3 h-3 opacity-60" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Decorative category tag */}
              <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-stone-400 font-bold">
                <span>YEAR 1 SYLLABUS & BEYOND</span>
                <span>V1.0</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Skill Detail Interactive Display Panel */}
      {selectedSkill && (
        <div className="mt-8 p-6 rounded-2xl glass-panel relative overflow-hidden border-pastel-red-border/30 bg-white/90 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fadeIn shadow-sm">
          <div className="bento-glow" />
          <div className="flex items-start gap-3.5">
            <div className="p-2 bg-pastel-red/60 rounded-xl border border-pastel-red-border/40 text-pastel-red-dark mt-1">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-stone-900 font-bold text-base flex flex-wrap items-center gap-2">
                {selectedSkill.name}
                <span className="text-[10px] uppercase tracking-widest font-mono bg-pastel-blue/80 px-2 py-0.5 rounded text-pastel-blue-dark font-bold border border-pastel-blue-border/20">
                  Active Competency
                </span>
              </h4>
              <p className="text-sm text-stone-600 mt-1.5 max-w-4xl leading-relaxed">
                {selectedSkill.desc}
              </p>
            </div>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="self-end md:self-auto text-xs font-bold text-pastel-red-dark bg-pastel-red/30 hover:bg-pastel-red/70 border border-pastel-red-border/40 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer"
          >
            Close Details
          </button>
        </div>
      )}
    </section>
  );
}
