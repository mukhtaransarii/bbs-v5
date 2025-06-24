import heroImage from '/img/hero.webp';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
 const heroText = useRef();
  
  useGSAP(() => {
    const tl = gsap.timeline();
    
     tl.from(heroText.current, {
       opacity: 0,
       scale: 0.1,
       duration: 1,
     });
     
     tl.from('.heroImg', {
       opacity: 0,
       y: 900,
       duration: 1,
       delay: 0.8, 
     });
   }, []); 
   
  return (
    <section id="home" className="relative w-full h-screen bg-[#525250] overflow-hidden">
      
      {/* Text behind the image */}
      <div className="absolute inset-0 z-0 w-screen flex flex-col items-center justify-center text-[#C71815]/70">
       <h1 ref={heroText} className="font-[Badeen] text-[23vw] leading-none">
        مختار عالم
      </h1>

     </div>
      
      {/* Foreground image */}
      <img
        src={heroImage}
        alt="Nasara E-commerce Project built using MERN stack"
        className="heroImg absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        style={{
          objectPosition: 'center 35%',
        }}
      />
      
    </section>
  );
};

export default Hero;
