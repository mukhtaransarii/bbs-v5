export default function SectionWrapper({sectionTitle, children}) {
  return (
    <section className="px-4 pt-4 pb-16">
      <h1 className="text-5xl font-[ClashDisplay] mb-8">{sectionTitle}</h1>
      
      {children}
    </section>
  )
}
