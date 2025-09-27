import { Card } from '@/components/ui/card';
import { Users, Clock, Star, Heart } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "15+",
    label: "Girls Mentored",
    description: "Young creators discovering their authentic voice"
  },
  {
    icon: Clock,
    number: "280+",
    label: "Hours of Learning",
    description: "Deep, meaningful engagement with craft"
  },
  {
    icon: Star,
    number: "99%",
    label: "Parent Satisfaction",
    description: "Families seeing genuine growth and joy"
  },
  {
    icon: Heart,
    number: "50",
    label: "Unique Projects",
    description: "Original creations expressing individual stories"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Creating Real Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These numbers tell the story of transformation—but the real impact lives in the 
            confidence, creativity, and joy that each girl carries forward.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover-elevate border-card-border bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="mb-4">
                <div className="font-serif text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground text-lg">{stat.label}</div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
            </Card>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <blockquote className="text-2xl font-light text-foreground italic leading-relaxed mb-6">
              "When children are given space to explore their authentic selves through meaningful work, 
              they don't just learn skills—they discover who they are meant to become."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <p className="font-semibold text-foreground">Amanda Basu Roy</p>
                <p className="text-sm text-muted-foreground">Founder & Lead Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}