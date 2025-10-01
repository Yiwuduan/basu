export default function AboutSection() {
  return (
    <section id="about" className="py-[160px] bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-[56px] font-bold text-white text-center mb-8" data-testid="text-about-headline">
          Crafting Meaningful Learning Spaces
        </h2>

        {/* Subcopy */}
        <p className="text-[20px] text-[#CCCCCC] leading-[1.65] text-center max-w-[640px] mx-auto" data-testid="text-about-description">
          Everything we need is already here if we design our lives around curiosity, mentorship, and connection. Together, families can thrive beyond rigid institutions.
        </p>
      </div>
    </section>
  );
}
