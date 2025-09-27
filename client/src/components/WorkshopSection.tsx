import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Calendar, MapPin, Star, ArrowRight, Music, Scissors, Heart } from 'lucide-react';

const workshopFeatures = [
  {
    icon: Music,
    title: "Studio Flow",
    description: "Music journey with embodiment practice"
  },
  {
    icon: Scissors,
    title: "Technical Skills",
    description: "Pattern drafting, garment construction, sewing"
  },
  {
    icon: Heart,
    title: "Creative Expression", 
    description: "Authentic self-expression and imagination"
  }
];

const skillsOffered = [
  "Pattern drafting",
  "Garment construction", 
  "Sewing by hand and machine",
  "Fabric technology",
  "Working on the floor",
  "Upcycling techniques"
];

export default function WorkshopSection() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <section id="workshop" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Featured Workshop</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Style Beyond the Material
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Embodied Craft Studio for Girls (Ages 10-15)
          </p>
        </div>

        {/* Workshop Details Card */}
        <Card className="p-8 mb-12 border-card-border">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Key Info */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-xl text-foreground mb-6">Workshop Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Friday Evenings</p>
                    <p className="text-sm text-muted-foreground">4:00 PM - 9:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Ages 10-15</p>
                    <p className="text-sm text-muted-foreground">Small group setting</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">5-Hour Sessions</p>
                    <p className="text-sm text-muted-foreground">Deep dive learning</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Studio Location</p>
                    <p className="text-sm text-muted-foreground">Visit required for fit</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-accent-foreground" />
                  <span className="font-medium text-accent-foreground">Registration Process</span>
                </div>
                <p className="text-sm text-muted-foreground">Right fit assessment, studio visit, and class packages available</p>
              </div>
            </div>

            {/* Right Column - Content Tabs */}
            <div className="lg:col-span-2">
              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 border-b border-border">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'themes', label: 'Themes' },
                  { id: 'skills', label: 'Skills' }
                ].map((tab) => (
                  <Button
                    key={tab.id}
                    variant="ghost"
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 py-2 rounded-none border-b-2 ${
                      selectedTab === tab.id 
                        ? 'border-primary text-primary' 
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                    data-testid={`button-tab-${tab.id}`}
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>

              {/* Tab Content */}
              {selectedTab === 'overview' && (
                <div className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>Upcycle your wardrobe, harness creative flow and awaken your signature style.</strong>
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    This workshop combines embodiment practice with technical craft skills, 
                    creating a unique learning environment where girls can explore authentic 
                    self-expression through sustainable fashion and creative storytelling.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {workshopFeatures.map((feature, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4 bg-muted/20 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-medium text-foreground mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'themes' && (
                <div className="space-y-6">
                  <div className="grid gap-4">
                    {[
                      "Dive into authentic self-expression",
                      "Activate your imagination in creative flow",
                      "Elevate your craft practice through intuition, discipline and body awareness",
                      "Harness your power: seasons and cycles of the creative feminine",
                      "Build community through craft: mentorship, events"
                    ].map((theme, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-card-border">
                        <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                        <p className="text-foreground leading-relaxed">{theme}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'skills' && (
                <div className="space-y-6">
                  <p className="text-foreground leading-relaxed">
                    Advance your skills in clothing creation with these comprehensive techniques:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {skillsOffered.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> All techniques are taught through hands-on practice with 
                      individual guidance and group collaboration.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 text-lg"
            data-testid="button-register-workshop"
          >
            Register for Workshop
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}