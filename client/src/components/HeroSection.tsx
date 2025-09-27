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
      {/* Background with warm gradient matching the reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#ff4500] to-[#e55100]"></div>
      
      {/* Flowing background shapes inspired by reference */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl transform -rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Flowing text decoration similar to reference */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-white/10 font-serif text-8xl font-bold transform -rotate-12">
          Learn
        </div>
        <div className="absolute bottom-32 right-10 text-white/10 font-serif text-6xl font-bold transform rotate-12">
          Create
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bold Typography like reference */}
          <div className="text-white">
            <div className="mb-8">
              <p className="text-lg font-medium mb-2 tracking-wide">Hi, I'm Amanda</p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] mb-8">
                Let's Create<br />
                <span className="text-white/90">Learning That</span><br />
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Tells Your Story
                </span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-lg">
              Through my work, I transform learning into something deeper—
              where children thrive, create authentic self-expression, and
              discover the joy of learning beyond traditional boundaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                size="lg"
                className="bg-white text-[#ff4500] hover:bg-white/90 font-semibold text-lg px-8 py-4 rounded-full"
                onClick={() => document.getElementById('workshop')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-learn-more"
              >
                Explore the Workshop
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-full"
                onClick={() => console.log('Play video triggered')}
                data-testid="button-watch-story"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                See My Work
              </Button>
            </div>

            <div className="text-center lg:text-left">
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

          {/* Right Column - Image with style similar to reference */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background decoration */}
              <div className="absolute -inset-8 bg-white/10 rounded-3xl blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative">
                <img 
                  src={amandaPhoto}
                  alt="Amanda Basu Roy - Learning Facilitator"
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='533' viewBox='0 0 400 533'%3E%3Crect width='400' height='533' fill='%23ffffff20'/%3E%3Ctext x='200' y='266' text-anchor='middle' fill='%23ffffff' font-size='16' font-family='Arial'%3EAmanda Basu Roy%3C/text%3E%3C/svg%3E";
                  }}
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <p className="font-semibold text-[#ff4500] text-sm">Mentor &</p>
                    <p className="font-semibold text-[#ff4500] text-sm">Learning Guide</p>
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