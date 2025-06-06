import React from "react";
import { TechSkills } from "data/TechSkills";

const colorPalette = [
  "bg-red-400/80",
  "bg-blue-400/80",
  "bg-green-400/80",
  "bg-yellow-400/80",
  "bg-purple-400/80",
  "bg-pink-400/80",
  "bg-indigo-400/80",
  "bg-teal-400/80",
  "bg-orange-400/80",
  "bg-rose-400/80",
];

const RandomColorTechStack = () => {
  return (
    <section className="bg-black py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Left-aligned heading within centered container */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-left">
          Tech Stacks :-
        </h2>

        {/* Grid for tech stack */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TechSkills.map((skill, index) => {
            const color = colorPalette[index % colorPalette.length];
            return (
              <span
                key={index}
                className={`text-sm font-semibold text-white px-4 py-2 rounded-full ${color} hover:brightness-125 transition-all duration-300 text-center`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RandomColorTechStack;
