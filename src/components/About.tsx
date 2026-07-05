import React from "react";
import { Sparkles, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 max-w-4xl mx-auto w-full">
      {/* Left Bento Box - Approachable Bio */}
      <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-center min-h-[400px]">
        <div className="bento-glow" />
        
        {/* Subtle Pastel Accent Icons */}
        <div className="absolute top-6 right-8 flex gap-2 text-pastel-red-border/60">
          <Terminal className="w-5 h-5" />
          <Sparkles className="w-5 h-5 animate-pulse text-pastel-yellow-dark" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-pastel-red-dark mb-3 block">
          Who I Am
        </span>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6 tracking-tight">
          About Me
        </h2>
        
        <div className="text-stone-700 font-sans space-y-5 leading-relaxed text-sm md:text-base">
          <p>
            I am a first-year <span className="text-pastel-red-dark font-semibold">BCA student</span> with an insatiable curiosity for technological solutions. 
            My mission is to learn, experiment, and turn ideas into reality by designing, architecting, and building complete web applications—often using "vibe coding" as an innovative approach to rapidly prototype creative ideas.
          </p>
          <p>
            My philosophy centers around building <span className="font-semibold text-pastel-yellow-dark">simple, helpful tools</span> that make a genuine positive impact on people's daily lives. 
            Whether it is cataloging pantry storage or fostering a welcoming emotional support board, I enjoy solving concrete problems with human empathy at the core.
          </p>
          <p>
            By finding the perfect balance between <span className="font-semibold">analytical logic and active artistic creativity</span>, I approach software development as both an engineering discipline and a canvas for elegant design.
          </p>
        </div>

        {/* Mini Tech Badge Row */}
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="px-3 py-1.5 text-xs font-mono rounded-lg bg-pastel-blue/50 border border-pastel-blue-border/30 text-pastel-blue-dark font-medium">
            EDU: BCA 1st Year
          </span>
          <span className="px-3 py-1.5 text-xs font-mono rounded-lg bg-pastel-yellow/50 border border-pastel-yellow-border/30 text-pastel-yellow-dark font-medium">
            GOAL: Impact-Driven Tools
          </span>
        </div>
      </div>
    </section>
  );
}
