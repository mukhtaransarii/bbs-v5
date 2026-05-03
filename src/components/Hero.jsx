import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef();

  useGSAP(() => {
    
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#fafaf9] overflow-hidden flex flex-col justify-center px-6 md:px-12"
    >
      <div className="flex flex-col gap-4 max-w-3xl">
        <p className="hero-role text-[11px] tracking-widest uppercase text-gray-400">
          Full Stack Engineer · MERN · React Native · Vue
        </p>

        <h1 className="hero-name font-[ClashDisplay] text-[16vw] md:text-[8vw] leading-none text-black">
          Mukhtar Alam
        </h1>

        <p className="hero-desc text-gray-500 text-sm max-w-sm leading-relaxed">
          Building fast, functional, and kinda addictive web & mobile apps.
          Turning caffeine and logic into clean digital experiences.
        </p>

        <div className="hero-btns flex gap-4 mt-2">
          <a href="#contact" className="px-5 py-2 rounded-2xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
            🤝 Let's Connect
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-4 left-0 w-full flex items-center justify-center text-gray-300 animate-bounce">
        <span>↓ scroll</span>
      </div>
    </section>
  );
};

export default Hero;