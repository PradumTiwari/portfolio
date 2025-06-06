import Hero from './components/Hero';
import { IoMdHome } from "react-icons/io";
import { FloatingDock } from './components/ui/FloatingDock';
import { GoTerminal } from "react-icons/go";
import { FaUser } from "react-icons/fa";
// import Grid from './components/Grid';  <-- removed
// import { Meteors } from './components/ui/meteor';  <-- removed
import Project from './components/Project';
import TechStack from './components/TechStack';
import ContactLink from './components/ui/ContactLink';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      
      {/* Background Layer */}
      <div className="fixed inset-0 w-full h-full z-[-1]">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 min-h-full"></div>
        
        {/* Spotlight Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-300 opacity-30"></div>
      </div>

      {/* Floating Dock */}
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={[
          { title: "Home", icon: <IoMdHome />, href: '/' },
          { title: 'Contact', icon: <GoTerminal />, href: '#contact' },
          { title: 'About', icon: <FaUser />, href: '#Hero' }
        ]} />
      </div>

      {/* Hero Section */}
    <section id='Hero'> <Hero /></section> 

      {/* BentoGrid Section */}

      <Project/>
     
      <TechStack/>
   <section id='contact'> <ContactLink/></section>  
       </main>
  );
}
