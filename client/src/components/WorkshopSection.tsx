import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import workshopImage from '@assets/IMG_4089_1758970285467.jpeg';

export default function WorkshopSection() {
  const upcomingSessions = [
    {
      date: 'November 8, 2024',
      time: '4:00 PM — 9:00 PM',
      title: 'Opening Circle & Wardrobe Discovery',
      description: 'Introduction to embodied practice, wardrobe assessment, and setting intentions for your creative journey.',
      location: 'Studio A'
    },
    {
      date: 'November 15, 2024',
      time: '4:00 PM — 9:00 PM',
      title: 'Pattern Drafting & Body Awareness',
      description: 'Learn foundational pattern making while exploring your unique body geometry and movement.',
      location: 'Studio A'
    },
    {
      date: 'November 22, 2024',
      time: '4:00 PM — 9:00 PM',
      title: 'Hand Sewing & Intuitive Design',
      description: 'Master hand-sewing techniques and develop your signature style through intuitive creation.',
      location: 'Studio A'
    },
    {
      date: 'November 29, 2024',
      time: '4:00 PM — 9:00 PM',
      title: 'Machine Skills & Flow State',
      description: 'Advance your machine sewing with music journey to access creative flow and authentic expression.',
      location: 'Studio A'
    },
    {
      date: 'December 6, 2024',
      time: '4:00 PM — 9:00 PM',
      title: 'Garment Construction & Storytelling',
      description: 'Build complete garments while exploring the stories woven into your creative practice.',
      location: 'Studio A'
    },
    {
      date: 'December 13, 2024',
      time: '4:00 PM — 9:00 PM',
      title: 'Final Showcase & Community Circle',
      description: 'Share your creations, celebrate growth, and strengthen community bonds through collaborative showcase.',
      location: 'Studio A'
    }
  ];

  return (
    <section id="workshop" className="py-[160px] bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Title and Image */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-[72px] font-bold text-white mb-6 leading-tight" data-testid="text-workshop-title">
              Style Beyond the Material
            </h2>
            <h3 className="text-[28px] font-semibold text-[#FF4D00] mb-4" data-testid="text-workshop-subtitle">
              Embodied Craft Studio for Girls (10–15)
            </h3>
            <p className="text-[20px] text-[#CCCCCC] max-w-3xl mx-auto" data-testid="text-workshop-tagline">
              Upcycle your wardrobe, harness creative flow and awaken your signature style.
            </p>
          </div>

          {/* Hero Image with Date Overlay */}
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <img 
              src={workshopImage}
              alt="Workshop creative practice"
              className="w-full h-[400px] object-cover grayscale"
              data-testid="img-workshop-hero"
            />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Date Range Overlay */}
            <div className="absolute bottom-12 left-12">
              <div className="text-[64px] font-bold text-white leading-none mb-2" data-testid="text-date-range">
                08.11 — 13.12.2024
              </div>
              <div className="text-[20px] text-[#CCCCCC]" data-testid="text-schedule-info">
                Friday Evenings · 4:00 PM — 9:00 PM
              </div>
            </div>

            {/* Price Badge */}
            <div className="absolute top-8 right-8 bg-[#FF4D00] rounded-full w-32 h-32 flex flex-col items-center justify-center" data-testid="badge-price">
              <div className="text-[14px] text-white uppercase font-semibold">Registration</div>
              <div className="text-[32px] text-white font-bold">$480</div>
            </div>
          </div>

          {/* Workshop Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-[#111111] rounded-lg border border-[#333333]" data-testid="info-duration">
              <Calendar className="w-8 h-8 text-[#FF4D00] mx-auto mb-4" />
              <h4 className="text-[20px] font-bold text-white mb-2">Duration</h4>
              <p className="text-[16px] text-[#CCCCCC]">6-Week Intensive Program</p>
            </div>
            <div className="text-center p-6 bg-[#111111] rounded-lg border border-[#333333]" data-testid="info-time">
              <Clock className="w-8 h-8 text-[#FF4D00] mx-auto mb-4" />
              <h4 className="text-[20px] font-bold text-white mb-2">Time Commitment</h4>
              <p className="text-[16px] text-[#CCCCCC]">5 Hours Per Session</p>
            </div>
            <div className="text-center p-6 bg-[#111111] rounded-lg border border-[#333333]" data-testid="info-size">
              <Users className="w-8 h-8 text-[#FF4D00] mx-auto mb-4" />
              <h4 className="text-[20px] font-bold text-white mb-2">Class Size</h4>
              <p className="text-[16px] text-[#CCCCCC]">Limited to 8 Students</p>
            </div>
          </div>
        </div>

        {/* Program Structure */}
        <div className="mb-24">
          <h3 className="text-[40px] font-bold text-white mb-12 text-center" data-testid="text-program-title">
            What We Explore Together
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Themes */}
            <div className="bg-[#111111] p-8 rounded-lg border border-[#333333]" data-testid="section-themes">
              <h4 className="text-[24px] font-bold text-[#FF4D00] mb-6">Themes & Practices</h4>
              <ul className="space-y-4">
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Studio Flow (with music journey)
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Awaken the Senses: embodiment practice
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Theme: story
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Crafting, food and content creation
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Dive into authentic self-expression
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Activate your imagination in creative flow
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Elevate your craft practice through intuition, discipline and body awareness
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Harness your power: seasons and cycles of the creative feminine
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Build community through craft: mentorship, events
                </li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-[#111111] p-8 rounded-lg border border-[#333333]" data-testid="section-skills">
              <h4 className="text-[24px] font-bold text-[#FF4D00] mb-6">Technical Skills</h4>
              <ul className="space-y-4">
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Pattern drafting and garment design
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Sewing by hand and machine mastery
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Garment construction techniques
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Fabric technology and material understanding
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Floor work and embodied creation methods
                </li>
                <li className="text-[18px] text-[#CCCCCC] leading-relaxed">
                  • Food and content creation integration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Session Schedule */}
        <div className="mb-16">
          <h3 className="text-[40px] font-bold text-white mb-12 text-center" data-testid="text-schedule-title">
            Upcoming Session Schedule
          </h3>

          <div className="space-y-6">
            {upcomingSessions.map((session, index) => (
              <div
                key={index}
                className="grid md:grid-cols-12 gap-6 p-6 bg-[#111111] rounded-lg border border-[#333333] hover:border-[#FF4D00]/50 transition-all duration-300"
                data-testid={`session-${index}`}
              >
                {/* Date & Location */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <div className="text-[20px] font-bold text-white mb-1">{session.title.split(' &')[0]}</div>
                  <div className="text-[18px] text-[#FF4D00] font-semibold mb-2">{session.date}</div>
                  <div className="text-[16px] text-[#999999] mb-1">{session.time}</div>
                  <div className="flex items-center gap-2 text-[14px] text-[#999999]">
                    <MapPin className="w-4 h-4" />
                    {session.location}
                  </div>
                </div>

                {/* Session Title & Description */}
                <div className="md:col-span-9 flex flex-col justify-center">
                  <h4 className="text-[24px] font-bold text-white mb-3">{session.title}</h4>
                  <p className="text-[18px] text-[#CCCCCC] leading-relaxed">{session.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Info */}
        <div className="bg-gradient-to-r from-[#FF4D00]/10 to-transparent border-l-4 border-[#FF4D00] p-8 rounded-lg" data-testid="section-registration">
          <h4 className="text-[28px] font-bold text-white mb-4">Ready to Begin?</h4>
          <p className="text-[20px] text-[#CCCCCC] leading-relaxed mb-6">
            Registration includes a studio visit to ensure the right fit, along with access to all materials, 
            tools, and ongoing mentorship. Class packages are available for committed learners.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FF4D00] text-white text-[18px] font-bold uppercase px-12 py-5 rounded-lg border-2 border-[#FF4D00] cta-transition hover:bg-black hover:text-[#FF4D00]"
              data-testid="button-register"
            >
              REGISTER NOW
            </button>
            <div className="text-[16px] text-[#999999]">
              Limited spaces · First come, first served
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
