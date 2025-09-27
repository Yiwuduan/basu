import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import amandaBackgroundPhoto from '@assets/PHOTO-2025-08-28-14-02-49 3_1758972025432.jpg';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Amanda's background image faded */}
      <div className="absolute inset-0">
        <img 
          src={amandaBackgroundPhoto}
          alt="Amanda Basu Roy"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
      
      {/* Orange gradient overlay to maintain color theme but lighter to show image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/60 via-[#ff4500]/50 to-[#e55100]/60"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Small intro badge with more top space */}
          <div className="mb-16 pt-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              Amanda Basu Roy • Learning Facilitator
            </Badge>
          </div>
          
          {/* Massive BEYOND SCHOOL title on one line across screen */}
          <h1 className="font-serif text-[8vw] sm:text-[10vw] md:text-[12vw] lg:text-[14vw] xl:text-[16vw] font-bold text-white leading-none mb-8 tracking-tight px-4">
            BEYOND SCHOOL
          </h1>
          
          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
              Mentorship, Movement, and Joyful Learning for Families
            </p>
            <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">
              Real learning comes from inquiry, from doing, from people who love what they do passing that energy on.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              className="bg-white/10 border-2 border-white/60 text-white hover:bg-white/20 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-full"
              onClick={() => console.log('Play video triggered')}
              data-testid="button-watch-story"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              See My Story
            </Button>
          </div>

          {/* Scroll indicator */}
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
      </div>
    </section>
  );
}