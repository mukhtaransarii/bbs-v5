import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import {
  SiReact, SiNuxtdotjs, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiMongodb,
  SiExpress, SiNodedotjs, SiGithub, SiPostman, SiVercel, SiRender, SiExpo,
  SiGoogleanalytics, SiGooglecloud, SiFirebase, SiNetlify,
  SiRedux, SiMui, SiTypescript, SiGit, SiSocketdotio, SiJsonwebtokens,
  SiGooglesearchconsole, SiGoogleads
} from 'react-icons/si';

const skills = {
  Frontend: [
    { name: 'HTML', icon: <SiHtml5 color="#e34c26" /> },
    { name: 'CSS', icon: <SiCss3 color="#264de4" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> },
    { name: 'React', icon: <SiReact color="#61dbfb" /> },
    { name: 'React Native', icon: <SiReact color="#61dbfb" /> },
    { name: 'Nuxt', icon: <SiNuxtdotjs color="#02DC83" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
    { name: 'Redux', icon: <SiRedux color="#764abc" /> },
    { name: 'MUI', icon: <SiMui color="#007fff" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
    { name: 'Context API', icon: <SiReact color="#61dbfb" /> }, // using React icon
  ],
  Backend: [
    { name: 'Node.js', icon: <SiNodedotjs color="#3c873a" /> },
    { name: 'Express.js', icon: <SiExpress color="#000000" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
    { name: 'REST APIs', icon: <SiJsonwebtokens color="#000000" /> }, // JWT icon for REST
    { name: 'JWT Authentication', icon: <SiJsonwebtokens color="#000000" /> },
    { name: 'Socket.IO', icon: <SiSocketdotio color="#010101" /> },
  ],
  Tools: [
    { name: 'Git', icon: <SiGit color="#f1502f" /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Postman', icon: <SiPostman color="#ff6c37" /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Expo', icon: <SiExpo /> },
    { name: 'Render', icon: <SiRender color="#3f3ff2" /> },
    { name: 'Netlify', icon: <SiNetlify color="#00c7b7" /> },
    { name: 'Termux', icon: <SiGithub /> }, // Placeholder (no Termux icon available)
  ],
  'Google Tools': [
    { name: 'Google Analytics', icon: <SiGoogleanalytics color="#fbbc05" /> },
    { name: 'Google Cloud', icon: <SiGooglecloud color="#1a73e8" /> },
    { name: 'Firebase', icon: <SiFirebase color="#ffca28" /> },
    { name: 'Google Search Console', icon: <SiGooglesearchconsole color="#34a853" /> },
    { name: 'Google AdSense', icon: <SiGoogleads color="#4285f4" /> },
  ]
};


export default function Skills() {
	const skillsRef = useRef();

  useGSAP(() => {
    const boxes = skillsRef.current.querySelectorAll(".skill-box");

    gsap.from(boxes, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "top",
        scrub: true,
      },
    });
  }, []);
  
  return (
    <section className="skills-section px-4 pb-16" id="skills" ref={skillsRef}>
      <h1 className="text-5xl font-[ClashDisplay] mb-8">Skills</h1>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-10">
          <h3 className="font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2 gap-y-4">
            {skillList.map((skill, idx) => (
              <div
                key={idx}
                className="skill-box flex flex-col items-center w-20 text-center"
              >
                <div className="text-3xl">{skill.icon || '🎯'}</div>
                <span className="mt-2 text-[12px]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
