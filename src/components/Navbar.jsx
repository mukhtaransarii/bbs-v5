import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-12 px-6 z-50 flex items-center justify-between bg-white/80 backdrop-blur-sm">
        <Link to="/" className="font-[Aref] text-2xl text-black pb-4">م</Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-end gap-[6px] cursor-pointer w-10 h-8"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] bg-black transition-all duration-500 ease-in-out origin-right
            ${isOpen ? 'w-16 -rotate-[6deg]' : 'w-16'}`}
          />
          <span className={`block h-[1.5px] bg-black transition-all duration-500 ease-in-out origin-right
            ${isOpen ? 'w-16 rotate-[6deg]' : 'w-16'}`}
          />
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-500
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Slide-up menu — uses translate instead of bottom to avoid layout lag */}
      <div className={`fixed bottom-0 left-0 w-full h-[55vh] z-40 bg-[#F5F4F0] border-t border-black/10 rounded-t-2xl flex flex-col justify-between
        transition-transform duration-500 ease-in-out will-change-transform
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {/* Nav links */}
        <div onClick={() => setIsOpen(false)} className="p-8 flex flex-col gap-1">
          {['Home', 'Bio', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-[ClashDisplay] text-5xl text-black leading-tight hover:text-gray-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Bottom links */}
        <div className="px-8 pb-8 flex flex-col  text-[10px] tracking-widest uppercase text-gray-400">
          <a href="mailto:mukhtaralam8055@gmail.com" className="hover:text-black transition-colors duration-200">
            mukhtaralam8055@gmail.com
          </a>
          <a href="https://linkedin.com/in/iibbs" target="_blank" rel="noreferrer" className="hover:text-black transition-colors duration-200">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </>
  );
}