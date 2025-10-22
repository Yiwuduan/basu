import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Music, Palette, Users2, Clock, MapPin } from 'lucide-react';
import img0848 from '@assets/IMG_0848_1758972710502.jpeg';
import img2125 from '@assets/IMG_2125_1758972710502.jpeg';
import img4045 from '@assets/IMG_4045_1758972710502.jpeg';
import img4089 from '@assets/IMG_4089_1758972710503.jpeg';

const principles = [
  {
    icon: Brain,
    title: "Embodied Learning",
    description: "Our bodies and senses carry wisdom. We slow down and listen to unlock natural learning pathways.",
    backgroundImage: img0848
  },
  {
    icon: Music,
    title: "Creative Flow",
    description: "Learning through music, movement, and creative expression that awakens the senses and imagination.",
    backgroundImage: img2125
  },
  {
    icon: Palette,
    title: "Authentic Expression",
    description: "Every child has a unique voice. We create space for authentic self-expression and personal storytelling.",
    backgroundImage: img4045
  },
  {
    icon: Users2,
    title: "Community Building",
    description: "Learning happens in relationship. We build community through shared craft, mentorship, and celebration.",
    backgroundImage: img4089
  }
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-muted/30">
      <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-black">Our Philosophy</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black mb-6">
            Learning Beyond the Material
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Real learning comes from inquiry, from doing, from people who love what they do 
            passing that energy on. We create spaces where wisdom emerges naturally.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16 mb-16">
          {principles.map((principle, index) => (
            <Card key={index} className="w-full h-80 p-4 hover-elevate border border-white/50 relative overflow-hidden rounded-2xl bg-[#F0ECD9] text-black shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={principle.backgroundImage}
                  alt={principle.title}
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Shiny overlay for glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center h-full justify-center p-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-base text-black mb-2">{principle.title}</h3>
                  <p className="text-black/90 text-sm leading-relaxed font-medium">{principle.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <Card className="p-12 border border-white/50 relative overflow-hidden rounded-2xl bg-[#F0ECD9] text-black shadow-xl hover:shadow-2xl transition-all duration-300">
          {/* Background Image for quote section */}
          <div className="absolute inset-0 z-0">
            <img 
              src={img4089}
              alt="Workshop atmosphere"
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/40 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg shadow-white/20">
              <span className="text-2xl">💭</span>
            </div>
            <blockquote className="text-2xl font-bold text-black mb-6 italic leading-relaxed backdrop-blur-sm">
              "Children especially thrive when they're guided by curiosity rather than rigid rules. 
              When we create space for inquiry and authentic expression, wisdom emerges naturally."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-px h-8 bg-black/60 backdrop-blur-sm"></div>
              <p className="text-black/90 font-semibold backdrop-blur-sm">Amanda's Core Belief</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}