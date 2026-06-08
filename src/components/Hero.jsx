const Hero = () => {
   
  const handleWhatsApp = () => {
    const message = "Hi Mukhtar, I would like to book a project.";
    window.open(
      `https://wa.me/918287386605?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="home"
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


        <button
          onClick={handleWhatsApp}
          className="px-5 py-2 w-fit flex items-center gap-1 rounded-2xl bg-green-700 text-white text-sm font-semibold hover:bg-gray-800 transition"
        >
          <svg className="w-6 h-6 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
          </svg>
          Book via Whatsapp
        </button>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-4 left-0 w-full flex items-center justify-center text-gray-300 animate-bounce">
        <span>↓ scroll</span>
      </div>
    </section>
  );
};

export default Hero;