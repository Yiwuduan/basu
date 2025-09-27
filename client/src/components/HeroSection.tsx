import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';
import amandaPhoto from '@assets/IMG_4045_1758970285466.jpeg';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Beyond School:<br />
              <span className="text-white/90">Mentorship,</span><br />
              <span className="text-white/80">Movement &</span><br />
              <span className="text-white/70">Joyful Learning</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed font-light">
              Real learning comes from inquiry, from doing, from people who love what they do passing that energy on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-4"
                onClick={() => document.getElementById('workshop')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-learn-more"
              >
                Learn About the Workshop
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 border-white/20 text-white hover:bg-white/15 backdrop-blur-sm text-lg px-8 py-4"
                onClick={() => console.log('Play video triggered')}
                data-testid="button-watch-story"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch My Story
              </Button>
            </div>

            <div className="text-center">
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToAbout}
                className="text-white/80 hover:text-white animate-bounce"
                data-testid="button-scroll-down"
              >
                <ArrowDown className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-white/20 rounded-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/10 rounded-2xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <div className="aspect-[3/4] bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
                  <div className="text-white/60 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-2xl">👩‍🏫</span>
                    </div>
                    <p className="text-sm">Amanda Basu Roy</p>
                    <p className="text-xs opacity-80">Mentor & Learning Facilitator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}