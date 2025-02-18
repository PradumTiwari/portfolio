import React from "react";

const ButtonM = ({
  title,
  icon,
  position = "left",
  handleClick,
  otherClass = "",
}: {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClass?: string;
}) => {
  return (
    <button
      className={`px-8 py-2 rounded-lg relative bg-slate-700  text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 flex items-center gap-2 ${otherClass}  md:w-30 md:mt-10`}
      onClick={handleClick}
    >
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      
      {icon && position === "left" && <span>{icon}</span>}
      <span className="relative z-20">{title}</span>
      {icon && position === "right" && <span>{icon}</span>}
    </button>
  );
};

export default ButtonM;
