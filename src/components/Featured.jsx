import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Featured() {
  const sectionRef = useRef();

  const projects = [
    {thumbnail: '/img/nasara-projects.webp', title: 'Nasara', desc: 'E-commerce with admin panel, SEO | ADS | MERN', url: 'https://nasaraa.vercel.app', date: 'Mar 2025 - Apr 2025'},
    {thumbnail: '/img/postify-projects.webp', title: 'Postify', desc: 'Social Media App, Backend | MEN + EJS', url: 'https://postify-u14d.onrender.com', date: 'Nov 2024 - Dec 2024'},
    {thumbnail: '/img/ochi-projects.webp', title: 'Ochi', desc: 'Frontend project, React | Gsap | UI/UX', url: 'https://ochi-bbs.vercel.app', date: 'Jun 2024 - Jul 2024'},
  ];

  useGSAP(() => {
    const imgs = sectionRef.current.querySelectorAll(".featured-img");

    gsap.from(imgs,{
        height: "30%",
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="px-4 pb-16" ref={sectionRef}>
      <h1 className="font-[ClashDisplay] text-5xl mb-8">
        Featured <br /> Projects
      </h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4">
        {projects.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <div className="aspect-video w-full overflow-hidden rounded">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="featured-img w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-between items-center">
              <p className="font-semibold mt-1">{item.title}</p>
              <p className="mt-1 text-[10px] italic">{item.date}</p>
            </div>
            <p className="leading-none text-[10px]">{item.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
