import SectionWrapper from './layout/SectionWrapper';

export default function About() {
 
  return (
    <> <span id='bio'></span>
    <SectionWrapper sectionTitle="Bio">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:gap-16">
        <div>
          <p className="text-[16px] md:text-2xl font-semibold leading-none">Mukhtar Alam</p>
          <p className='text-gray-500 md:text-xl'>New Delhi, India 🇮🇳</p>
          
          <p className="w-full my-4 md:text-xl">
            I'm a software engineer specialized in{" "}
            <mark className="text-[#D22E1F] bg-transparent">MERN stack</mark>,{" "}
            <mark className="text-[#D22E1F] bg-transparent">React Native</mark>, and{" "}
            <mark className="text-[#D22E1F] bg-transparent">Vue</mark>{" "}
            who builds fast, functional, and kinda addictive web and mobile apps. Frontend?
            Nailed it. Backend? Say less. Cross-platform mobile? Already there.
            Basically turning caffeine and logic into clean digital experiences.
            Currently cooking up full-stack projects like Nasara.
            Big fan of sleek UI, smart APIs, and solving problems that actually matter.
            When I'm not coding, I'm probably vibing with design, riding bikes, or fixing
            something no one asked me to.
          </p>

          <div className="flex gap-2 md:text-xl">
            <a href="mailto:mukhtaralam8055@gmail.com" className="text-blue-500 cursor-pointer">Mail</a>
            <a href="https://github.com/mukhtaransarii" target="_blank" rel="noreferrer" className="text-blue-500 cursor-pointer">GitHub</a>
            <a href="https://linkedin.com/in/iibbs" target="_blank" rel="noreferrer" className="text-blue-500 cursor-pointer">Linkedin</a>
          </div>

          <button className="flex gap-4 mt-8 md:text-xl">
            <a href="#contact" className="px-5 py-2 rounded-2xl border border-black text-sm font-semibold hover:bg-white hover:text-black transition">🤝 Let's Connect</a>
          </button>
        </div>

        <img src='/img/sections/MukhtarGoggles.webp' alt="Mukhtar Alam" className="max-w-full md:max-w-[30vw] object-contain" />
      </div>
    </SectionWrapper>
    </>
  );
}