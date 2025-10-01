import workshopImage from '@assets/IMG_4089_1758970285467.jpeg';

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-8 bg-background">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header with Title and Badge */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-[48px] font-bold text-white leading-none" data-testid="text-workshop-title">
            Workshop
          </h2>
          <div className="bg-[#FF4D00] rounded-full w-20 h-20 flex flex-col items-center justify-center flex-shrink-0" data-testid="badge-price">
            <div className="text-[9px] text-white uppercase font-semibold tracking-wide">Register</div>
            <div className="text-[22px] text-white font-bold leading-none">$480</div>
          </div>
        </div>

        {/* Hero Image with Date Overlay */}
        <div className="relative rounded-lg overflow-hidden mb-6 h-[140px]">
          <img 
            src={workshopImage}
            alt="Workshop scene"
            className="w-full h-full object-cover grayscale"
            data-testid="img-workshop-hero"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Date Range Overlay */}
          <div className="absolute bottom-3 left-5">
            <div className="text-[36px] font-bold text-white tracking-wider leading-none" data-testid="text-date-range">
              08.11 — 13.12.2024
            </div>
          </div>
        </div>

        {/* Event Details Grid */}
        <div className="space-y-0">
          {/* Event 1: Opening & Studio Flow */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 py-3 border-t border-[#333333]" data-testid="event-row-1">
            <div className="md:col-span-2">
              <div className="text-[11px] text-[#999999] uppercase tracking-wider font-semibold">Studio A</div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-[17px] font-bold text-white mb-1">Style Beyond the Material</h3>
              <div className="text-[14px] text-[#FF4D00] font-semibold mb-0.5">Friday Evenings</div>
              <div className="text-[12px] text-[#999999]">4:00 PM — 9:00 PM</div>
            </div>
            <div className="md:col-span-6">
              <p className="text-[13px] text-[#CCCCCC] leading-relaxed">
                Embodied Craft Studio for Girls (10–15). Upcycle your wardrobe, harness creative flow and awaken your signature style through studio flow, embodiment practice, and storytelling.
              </p>
            </div>
          </div>

          {/* Event 2: Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 py-3 border-t border-[#333333]" data-testid="event-row-2">
            <div className="md:col-span-2">
              <div className="text-[11px] text-[#999999] uppercase tracking-wider font-semibold">Studio A</div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-[17px] font-bold text-white mb-1">Technical Skills</h3>
              <div className="text-[14px] text-[#FF4D00] font-semibold mb-0.5">Weeks 2–5</div>
              <div className="text-[12px] text-[#999999]">Various sessions</div>
            </div>
            <div className="md:col-span-6">
              <p className="text-[13px] text-[#CCCCCC] leading-relaxed">
                Advance your skills through pattern drafting, garment construction, sewing by hand and machine, and fabric technology with hands-on practice and expert mentorship.
              </p>
            </div>
          </div>

          {/* Event 3: Themes & Practices */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 py-3 border-t border-[#333333]" data-testid="event-row-3">
            <div className="md:col-span-2">
              <div className="text-[11px] text-[#999999] uppercase tracking-wider font-semibold">Studio A</div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-[17px] font-bold text-white mb-1">Creative Practices</h3>
              <div className="text-[14px] text-[#FF4D00] font-semibold mb-0.5">Throughout</div>
              <div className="text-[12px] text-[#999999]">All sessions</div>
            </div>
            <div className="md:col-span-6">
              <p className="text-[13px] text-[#CCCCCC] leading-relaxed">
                Explore embodiment, intuition, and community through crafting, content creation, creative flow states, body awareness, and the seasons and cycles of the creative feminine.
              </p>
            </div>
          </div>

          {/* Event 4: Final Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 py-3 border-t border-[#333333]" data-testid="event-row-4">
            <div className="md:col-span-2">
              <div className="text-[11px] text-[#999999] uppercase tracking-wider font-semibold">Studio A</div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-[17px] font-bold text-white mb-1">Community Showcase</h3>
              <div className="text-[14px] text-[#FF4D00] font-semibold mb-0.5">13.12.2024</div>
              <div className="text-[12px] text-[#999999]">4:00 PM — 9:00 PM</div>
            </div>
            <div className="md:col-span-6">
              <p className="text-[13px] text-[#CCCCCC] leading-relaxed">
                Celebrate growth and share creations. Build community through craft, mentorship, and collaborative events. Organizer: Right Fit Studio
              </p>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="mt-5 pt-4 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-[13px] text-[#CCCCCC]">
                <span className="font-semibold text-white">6-Week Program</span> · Limited to 8 students · Includes studio visit
              </p>
            </div>
            <button
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FF4D00] text-white text-[14px] font-bold uppercase px-8 py-3 rounded-lg border-2 border-[#FF4D00] cta-transition hover:bg-black hover:text-[#FF4D00] whitespace-nowrap"
              data-testid="button-register"
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
