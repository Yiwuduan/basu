import { Card } from '@/components/ui/card';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Joyful Learning",
    description: "Learning should spark joy, not drain energy. We believe children thrive when guided by curiosity rather than rigid rules."
  },
  {
    icon: Users,
    title: "Community Mentorship",
    description: "Real growth happens through relationships. My son grows surrounded by mentors, projects, and people who love what they do."
  },
  {
    icon: Lightbulb,
    title: "Embodied Wisdom",
    description: "Our bodies and senses already carry wisdom. When we slow down and listen, we unlock natural learning pathways."
  },
  {
    icon: Target,
    title: "Inquiry-Based Growth",
    description: "Real learning comes from inquiry, from doing, from engaging with the world in meaningful ways."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative">
              {/* Decorative background shapes */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/10 rounded-full"></div>
              
              {/* Main content card */}
              <Card className="p-8 bg-card border-card-border">
                <div className="aspect-square rounded-xl overflow-hidden mb-6">
                  <img 
                    src="@assets/IMG_4060_1758970285466.jpeg"
                    alt="Amanda teaching and mentoring"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <span class="text-3xl">🌱</span>
                              </div>
                              <p class="text-sm text-muted-foreground">Fostering Growth</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                  "I've spent my life questioning the systems we take for granted, especially school, which I never believed in."
                </blockquote>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold text-foreground">Amanda Basu Roy</p>
                  <p className="text-sm text-muted-foreground">Learning Facilitator & Mentor</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              A Different Path to Learning
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I want my son to grow up surrounded by mentors, projects, and joy—not locked in classrooms. 
              Children especially thrive when they're guided by curiosity rather than rigid rules.
            </p>

            <div className="grid gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <value.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}