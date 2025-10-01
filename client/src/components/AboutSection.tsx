export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black relative z-10" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-[56px] font-bold text-white text-center mb-12" data-testid="text-about-headline">
          Crafting Meaningful Learning Spaces
        </h2>

        {/* Main Philosophy */}
        <div className="space-y-6 text-[18px] text-[#CCCCCC] leading-[1.7]">
          <p data-testid="text-about-description">
            I've spent my life questioning the systems we take for granted, especially school, which I never believed in. I want my son to grow up surrounded by mentors, projects, and joy—not locked in classrooms. Real learning comes from inquiry, from doing, from people who love what they do passing that energy on.
          </p>
          
          <p>
            Our bodies and senses already carry wisdom if we slow down and listen, and children especially thrive when they're guided by curiosity rather than rigid rules. My focus is on creating spaces that nurture this—where parents and kids can come together, learn through craft, movement, nature, and collaboration, and where education becomes life itself.
          </p>
          
          <p>
            It's about values, not tradition; community, not institutions. We don't need to outsource care or creativity—everything we need is here if we design our lives around it.
          </p>
          
          <p className="text-white font-semibold text-[20px]">
            My vision is a circle where families support one another, kids grow through mentorship and projects that can become businesses, and joy and purpose are at the center of daily life. Schools are broken, but together we can reframe the framework and raise children in a way that's alive, connected, and truly educational.
          </p>
        </div>
      </div>
    </section>
  );
}
