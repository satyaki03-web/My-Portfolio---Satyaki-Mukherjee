import React from "react";
import { Award, Trophy, CloudLightning, Sparkles, BookOpen } from "lucide-react";

export default function Achievements() {
  const highlights = [
    {
      metric: "9th",
      title: "Position at TechSprint",
      subtitle: "Recognized for Smart Pantry Pal",
      icon: Trophy,
      color: "bg-pastel-yellow border-pastel-yellow-border text-pastel-yellow-dark",
      desc: "Placing in the top 10 out of multiple entries, this project was commended for its clean Firestore synchronization model and human-centric design approach."
    },
    {
      metric: "2nd",
      title: "Position at College Bug Hunt",
      subtitle: "College In-House Coding Event",
      icon: Award,
      color: "bg-pastel-red border-pastel-red-border text-pastel-red-dark",
      desc: "Demonstrated swift structural diagnostics and code optimization, identifying complex recursive memory overflows under strict competition timeframes."
    },
    {
      metric: "3,100+",
      title: "Points Accumulated",
      subtitle: "Google Cloud Skills Boost",
      icon: CloudLightning,
      color: "bg-pastel-blue border-pastel-blue-border text-pastel-blue-dark",
      desc: "Earning multiple badged credentials focusing on Data Analytics, Serverless Architecture, and cloud-native pipeline engineering."
    }
  ];

  return (
    <section id="achievements" className="scroll-mt-24">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-pastel-red-dark mb-2 block">
          Proven Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Achievements &amp; Highlights
        </h2>
        <p className="text-sm md:text-base text-stone-600 max-w-xl mx-auto mt-2 opacity-90">
          Academic milestones and competition victories showcasing a drive for precision engineering and technical consistency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-stone-200/80 flex flex-col justify-between relative min-h-[300px] hover:border-stone-300 shadow-sm"
            >
              <div className="bento-glow" />
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  {/* Numerical Metric Display */}
                  <span className="text-5xl font-extrabold tracking-tighter text-stone-900 font-sans block">
                    {item.metric}
                  </span>
                  
                  {/* Category icon with soft pastel bg */}
                  <div className={`p-2.5 rounded-xl border ${item.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-widest font-mono">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed pt-2">
                  {item.desc}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 flex items-center gap-1.5 text-[10px] font-mono text-stone-400 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-pastel-yellow-dark" /> COMPETITION VERIFIED
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
