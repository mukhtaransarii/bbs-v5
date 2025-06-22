import React from 'react'
import mukhtarGoggle from '/img/MukhtarGoggles.webp'

  export default function About() {
   return (
     <div className="px-4 py-16">
       <h1 className="text-5xl font-[ClashDisplay] mb-8">Bio</h1>
      
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:gap-16">
         <div>
           <h1 className="text-[16px] font-semibold">Mukhtar Alam</h1>
           <p>Delhi, India  🇮🇳</p>
         
           <h1 className="w-full my-4">
             I’m a software engineer specialized in <mark className="text-[#D22E1F] bg-transparent">mern stack</mark> who builds fast, functional, and kinda addictive web apps.
             Frontend? Nailed it. Backend? Say less.
             Basically turning caffeine and logic into clean digital experiences.
             Currently cooking up full-stack projects like Nasara.
             Big fan of sleek UI, smart APIs, and solving problems that actually matter.
             When I’m not coding, I’m probably vibing with design, riding bikes, or fixing something no one asked me to.
           </h1>
           
           <p>Thank you.</p>
           
           <a href="mailto:mukhtaralam8055@gmail.com" className="mt-4 text-blue-500">mukhtaralam8055@gmail.com</a> <br/>
           <a href="https://github.com/mukhtaransarii" target="_blank" className="text-blue-500">github.com/mukhtaransarii</a> <br/>
           <a href="https://linkedin.com/in/iibbs" target="_blank" className="text-blue-500">linkedin.com/in/iibbs</a>
    
           <div className="flex gap-4 mt-8">
             <a href="/Mukhtar-Alam_Resume_Public.pdf" download id="resume"
               className="px-5 py-2 rounded-2xl bg-white text-black text-sm font-semibold shadow hover:bg-gray-200 transition">
               📄 Download Resume
             </a>
             <a href="#contact" 
               className="px-5 py-2 rounded-2xl border border-black text-sm font-semibold hover:bg-white hover:text-black transition">
               🤝 Let’s Connect
             </a>
           </div>
         </div>
        
         <img src={mukhtarGoggle} className="max-w-full md:max-w-[30vw] object-contain"/>
       </div>
     </div>
   )
}
