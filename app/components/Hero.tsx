import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ButtonM from "./ui/ButtonM";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center justify-center pb-20 pt-24 overflow-hidden">
      {/* Background Spotlights */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Adjusted left spotlight to extend more left */}
        <Spotlight className="-top-40 -left-40 md:-left-48 md:-top-20 h-screen" fill="white" />
        {/* Fixed purple spotlight to stay inside screen */}
        <Spotlight className="top-30 left-[70vw] h-[60vh] w-[40vw]" fill="purple" />
        {/* Adjusted another white spotlight for better balance */}
        <Spotlight className="top-30 left-64 h-[70vh] w-[50vw]" fill="white" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 w-screen h-screen dark:bg-black bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2]">
        <div className="absolute inset-0 w-full h-full pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Content Section */}
      <div className=" relative z-10 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center text-center -top-30">
        <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">Dynamic Web Page</h2>
        <TextGenerateEffect className="text-[40px] md:text-5xl lg:text-6xl" words="Description Of The Work" />
        <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi, I'm Pradum Tiwari
        </p>
        <a href="#"><ButtonM title="Contact Me" /></a>
      </div>
    </div>
  );
};

export default Hero;
