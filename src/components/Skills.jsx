import React from 'react';

import {
  SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiMongodb,
  SiExpress, SiNodedotjs, SiGithub, SiPostman, SiVercel, SiRender,
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
  return (
    <section className="skills-section px-4 pb-16" id="skills">
      <h1 className="text-5xl font-[ClashDisplay] mb-8">Skills</h1>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-10">
          <h3 className="font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2 gap-y-4">
            {skillList.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center w-20 text-center"
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
