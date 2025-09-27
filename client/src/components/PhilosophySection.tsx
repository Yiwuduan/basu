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
    color: "bg-white/20 text-white",
    backgroundImage: img0848
  },
  {
    icon: Music,
    title: "Creative Flow",
    description: "Learning through music, movement, and creative expression that awakens the senses and imagination.",
    color: "bg-white/20 text-white",
    backgroundImage: img2125
  },
  {
    icon: Palette,
    title: "Authentic Expression",
    description: "Every child has a unique voice. We create space for authentic self-expression and personal storytelling.",
    color: "bg-white/20 text-white",
    backgroundImage: img4045
  },
  {
    icon: Users2,
    title: "Community Building",
    description: "Learning happens in relationship. We build community through shared craft, mentorship, and celebration.",
    color: "bg-white/20 text-white",
    backgroundImage: img4089
  }
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Philosophy</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Learning Beyond the Material
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real learning comes from inquiry, from doing, from people who love what they do 
            passing that energy on. We create spaces where wisdom emerges naturally.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((principle, index) => (
            <Card key={index} className="aspect-square p-4 hover-elevate border-card-border relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={principle.backgroundImage}
                  alt={principle.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${principle.color} backdrop-blur-sm border border-white/20 mb-3`}>
                  <principle.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white mb-2 drop-shadow-lg">{principle.title}</h3>
                  <p className="text-white/90 text-xs leading-relaxed font-medium drop-shadow-md">{principle.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <Card className="p-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 relative overflow-hidden">
          {/* Background Image for quote section */}
          <div className="absolute inset-0 z-0">
            <img 
              src="@assets/IMG_4089_1758972710503.jpeg"
              alt="Workshop atmosphere"
              className="w-full h-full object-cover opacity-30"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <span className="text-2xl">💭</span>
            </div>
            <blockquote className="text-2xl font-bold text-white mb-6 italic leading-relaxed drop-shadow-lg">
              "Children especially thrive when they're guided by curiosity rather than rigid rules. 
              When we create space for inquiry and authentic expression, wisdom emerges naturally."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-px h-8 bg-white/30"></div>
              <p className="text-white/90 font-semibold drop-shadow-md">Amanda's Core Belief</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}