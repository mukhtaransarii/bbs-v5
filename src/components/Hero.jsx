import heroImage from '/img/hero.webp';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-[#525250] overflow-hidden">
      
      {/* Text behind the image */}
      <div className="absolute inset-0 z-0 w-screen flex flex-col items-center justify-center text-[#C71815]/70">
       <h1 className="font-[Badeen] text-[20vw] leading-none tracking-wider">
        مختار عالم
      </h1>

     </div>
      
      {/* Foreground image */}
      <img
        src={heroImage}
        alt="Nasara E-commerce Project built using MERN stack"
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        style={{
          objectPosition: 'center 35%',
        }}
      />
      
    </section>
  );
};

export default Hero;
