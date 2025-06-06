import React from "react";
import { TechSkills } from "data/TechSkills";

const colorPalette = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-rose-500",
];

const RandomColorTechStack = () => {
  return (
    <section className="bg-black py-12 px-4 text-center text-white">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-10">Tech Stacks</h2>

      {/* Tech stack grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {TechSkills.map((skill, index) => {
          const color = colorPalette[index % colorPalette.length];
          return (
            <span
              key={index}
              className={`text-sm font-medium px-4 py-2 rounded-full ${color} hover:scale-105 transition-transform duration-300`}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default RandomColorTechStack;
