import Hero from './components/Hero';
import { IoMdHome } from "react-icons/io";
import { FloatingDock } from './components/ui/FloatingDock';
import { GoTerminal } from "react-icons/go";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Full-Page Background Grid */}
      <div className="fixed inset-0 w-full h-full bg-grid-pattern z-0"></div>  

      {/* Floating Dock - Closer to Top */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 scale-125">
        <FloatingDock items={[
          { title: "Home", icon: <IoMdHome />, href: '/' },
          { title: 'Product', icon: <GoTerminal />, href: '#' },
          { title: 'About', icon: <FaUser />, href: '#' }
        ]} />
      </div>

      {/* Hero Section - Positioned at 40% height */}
      <div className="absolute top-2/5 w-full z-10 text-center">  
        <Hero />
      </div>

    </main>
  );
}
