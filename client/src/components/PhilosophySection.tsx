import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Music, Palette, Users2, Clock, MapPin } from 'lucide-react';

const principles = [
  {
    icon: Brain,
    title: "Embodied Learning",
    description: "Our bodies and senses carry wisdom. We slow down and listen to unlock natural learning pathways.",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Music,
    title: "Creative Flow",
    description: "Learning through music, movement, and creative expression that awakens the senses and imagination.",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: Palette,
    title: "Authentic Expression",
    description: "Every child has a unique voice. We create space for authentic self-expression and personal storytelling.",
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    icon: Users2,
    title: "Community Building",
    description: "Learning happens in relationship. We build community through shared craft, mentorship, and celebration.",
    color: "bg-green-500/10 text-green-600"
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
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <Card key={index} className="p-8 hover-elevate border-card-border">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${principle.color}`}>
                  <principle.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <Card className="p-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">💭</span>
            </div>
            <blockquote className="text-2xl font-light text-foreground mb-6 italic leading-relaxed">
              "Children especially thrive when they're guided by curiosity rather than rigid rules. 
              When we create space for inquiry and authentic expression, wisdom emerges naturally."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-px h-8 bg-border"></div>
              <p className="text-muted-foreground">Amanda's Core Belief</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}