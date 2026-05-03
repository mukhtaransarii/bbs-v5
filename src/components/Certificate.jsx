import SectionWrapper from './layout/SectionWrapper.jsx';

export default function Certificate() {
  return (
    <SectionWrapper sectionTitle="Evidence">
      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="shrink-0">
          <h3 className="font-semibold mb-2">Hackathon CC</h3>
          <img
            src='/img/sections/certificate.webp'
            alt="Hackathon Certificate"
            className="max-w-full md:max-w-[30vw] object-contain"
          />
        </div>

        <span className="mt-2 md:mt-8 flex flex-col gap-2 leading-relaxed">
          <p><b>Name:</b> <span className="text-gray-500">Mukhtar Alam</span></p>
          <p><b>Crime:</b> <span className="text-gray-500">Reaching the top tier of frontend chaos by building the smoothest, cleanest version of Ochi ever seen.</span></p>
          <p><b>Allegations:</b> <span className="text-gray-500">
            – Used React like a pro, styled every pixel with Tailwind CSS, added buttery GSAP animations that made devs jealous, and deployed faster than his coffee cooled. <br />
            – Designed in dark mode like a Gen Z signature, pushed pixels like a surgeon, and made even 404 pages look hot. <br />
            – Created Postify using the MEN stack, added SEO + Ads in Nasara, and had the audacity to optimize performance. <br />
            – Suspected of looping lo-fi while breaking the CSS matrix with grid + flexbox combos.
          </span></p>
          <p><b>Verdict:</b> <span className="text-gray-500">Found guilty of being way too clean with code and bringing UI with attitude.</span></p>
          <p><b>Sentence:</b> <span className="text-gray-500">Permanent ban from mid dev roles. Forced to accept only senior dev positions, free coffee subscriptions, and occasional interview invitations just for fun. 🚀🔥</span></p>
        </span>
      </div>
    </SectionWrapper>
  );
}