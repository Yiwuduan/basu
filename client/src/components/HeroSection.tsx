import amandaPhoto from '@assets/PHOTO-2025-08-28-14-02-49_1758973315512.jpg';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-row">
      {/* Left 60% - Full-height portrait, grayscale */}
      <div className="w-[60%] relative flex-shrink-0">
        <img 
          src={amandaPhoto}
          alt="Amanda Basu Roy - Founder"
          className="w-full h-full object-cover grayscale"
          style={{ minHeight: '100vh', objectPosition: 'center top' }}
          data-testid="img-founder"
        />
      </div>

      {/* Right 40% - Stacked text block */}
      <div className="w-[40%] flex-shrink-0 flex items-center justify-center py-[200px] px-12 bg-black relative z-10">
        <div className="max-w-[520px] w-full">
          {/* Small tag line */}
          <p className="text-[18px] uppercase text-[#FF4D00] tracking-[2px] mb-8" data-testid="text-tagline">
            Mentorship • Projects • Community
          </p>

          {/* Main headline */}
          <h1 className="text-[88px] font-bold text-white leading-[1.1] mb-8" data-testid="text-headline">
            Reframing Learning & Life Together
          </h1>

          {/* Subcopy */}
          <p className="text-[20px] text-[#CCCCCC] leading-[1.65] mb-12" data-testid="text-subcopy">
            I believe education should be alive, joyful, and connected. My work is about creating spaces where families learn through craft, movement, and mentorship—not institutions.
          </p>

          {/* CTA Button */}
          <button
            className="bg-[#FF4D00] text-white text-[18px] font-bold uppercase px-14 py-6 rounded-lg cta-transition hover:bg-black hover:text-[#FF4D00] hover:border-2 hover:border-[#FF4D00] border-2 border-transparent"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-see-work"
          >
            SEE MY WORK
          </button>
        </div>
      </div>
    </section>
  );
}