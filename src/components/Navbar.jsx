import { useState } from 'react';
import { Link } from 'react-router-dom'

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   
   const toggleAlif = () => {
     setIsOpen(!isOpen)
   }
   
   useGSAP(() => {
     const tl = gsap.timeline();
     
     tl.from('.logo', {
       y: -50,
       opacity: 0,
       duration: 0.5,
       delay: 1,
     });
     
     tl.from('.hamburger', {
       y: -50,
       opacity: 0,
       duration: 0.5,
     });
   }, []); 
   
   return (
     <nav className="fixed top-0 left-0 w-full h-12 px-4 z-50 flex items-center justify-between">
       <Link to="/" className="logo text-2xl font-[Aref]">م</Link>
      
       <div onClick={toggleAlif} className="hamburger h-full mr-2 flex flex-col justify-center items-center cursor-pointer">
         <span className={`font-[Aref] text-2xl leading-[4px] scale-y-[2.5] transition-all duration-500 ease-in-out
         ${isOpen ? 'rotate-45' : 'rotate-90'}`}>ا</span>
         
         <span className={`font-[Aref] text-2xl leading-[4px] scale-y-[2.5] transition-all duration-500 ease-in-out 
         ${isOpen ? '-rotate-45' : 'rotate-90'}`}>ا</span>
       </div>
       
       <div className={`fixed left-0 w-full h-[55vh] md:h-[60vh] bg-[#D22E1F] rounded-t-2xl transition-all duration-500 ease-in-out flex flex-col justify-between
         ${isOpen ? 'bottom-0' : '-bottom-[80vh]'}`}>
         
         {/*Nav menu section*/}
         <div onClick={() => setIsOpen(false)}
           className="p-8 text-white flex flex-col text-5xl font-[ClashDisplay]">
           <a href="#home">Home</a>
           <a href="#resume">Resume</a>
           <a href="#skills">Skills</a>
           <a href="#contact">Contact</a>
         </div>
         
         {/*Nav links section*/}
         <div className="p-8 text-white text-[10px]">
           <a href="mailto:mukhtaralam8055@gmail.com">MUKHTARALAM8055@GMAIL.COM</a> <br/>
           <a href="https://linkedin.com/in/iibbs">LINKEDIN</a>
         </div>
         
       </div>
     </nav>
   );
  }