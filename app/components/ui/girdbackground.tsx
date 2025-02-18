export function GridBackgroundDemo() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.1]">
      {/* Radial gradient for smooth edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
          Seamless Background
        </p>
      </div>
    </div>
  );
}