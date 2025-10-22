import { useState, useEffect } from 'react';
import parallaxImg1 from '@assets/PHOTO-2025-08-28-14-02-49 2_1759300881690.jpg';
import parallaxImg2 from '@assets/PHOTO-2025-08-28-14-02-49 3_1759300881690.jpg';
import parallaxImg3 from '@assets/PHOTO-2025-08-28-14-02-49 4_1759300881690.jpg';
import parallaxImg4 from '@assets/PHOTO-2025-08-28-14-02-49 5_1759300881691.jpg';
import parallaxImg5 from '@assets/PHOTO-2025-08-28-14-02-49 6_1759300881691.jpg';
import parallaxImg6 from '@assets/PHOTO-2025-08-28-14-02-49_1759300881691.jpg';
import ScrollSuggestion from './ScrollSuggestion';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 5000); // Change active image every 5 seconds

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  // Generate random starting positions and animations for each image
  const generateRandomAnimations = () => {
    const animations = [];
    for (let i = 0; i < 6; i++) {
      // Randomize speed (10-60s range) - faster so they never fully stop
      const speed = 10 + Math.random() * 50;
      // Randomize color fade duration (10-20s range) - slower refresh
      const colorDuration = 10 + Math.random() * 10;
      // Randomize delay
      const delay = Math.random() * 2;
      // Random starting vertical position (0-5%)
      const startPosition = Math.random() * 5;
      
      animations.push({
        flowDuration: speed,
        colorDuration,
        delay,
        startPosition
      });
    }
    return animations;
  };
  
  const animations = generateRandomAnimations();

  return (
    <section id="home" className="relative min-h-screen lg:h-screen overflow-hidden bg-background">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left/Top - Vertically stacked images with enhanced animation */}
        <div className="w-full lg:w-[60%] relative flex-shrink-0 overflow-hidden bg-background h-[50vh] lg:h-screen order-1 lg:order-1">

          
          {/* Container for vertically stacked images with enhanced animations */}
          <div className="relative h-[600%] lg:h-[400%]">
            {/* Image 1 - Random starting point and animation */}
            <div 
              className={`absolute w-full h-[16.66%] ${isMobile ? 'animate-flow-up animate-color-fade-1' : ''}`}
              style={isMobile ? 
                undefined : 
                { 
                  top: `${animations[0].startPosition}%`, // Consistent random starting vertical position
                  animation: `flowUp ${animations[0].flowDuration * 2}s ease-in-out infinite, colorFade1 ${animations[0].colorDuration}s infinite`,
                  animationDelay: `${animations[0].delay}s, ${animations[0].delay + Math.random() * 2}s`,
                  zIndex: activeImageIndex === 0 ? 10 : 1
                }
              }
            >
              <img 
                src={parallaxImg1}
                alt="Creative expression"
                className="w-full h-full object-cover transition-all duration-1000 opacity-0 animate-fade-in"
              />
            </div>

            {/* Image 2 */}
            <div 
              className={`absolute w-full h-[16.66%] ${isMobile ? 'animate-flow-up-medium animate-color-fade-2' : ''}`}
              style={isMobile ? 
                undefined : 
                { 
                  top: `${animations[1].startPosition}%`, // Consistent random starting vertical position
                  animation: `flowUp ${animations[1].flowDuration * 2}s ease-in-out infinite, colorFade2 ${animations[1].colorDuration}s infinite`,
                  animationDelay: `${animations[1].delay}s, ${animations[1].delay + Math.random() * 2}s`,
                  zIndex: activeImageIndex === 1 ? 10 : 1
                }
              }
            >
              <img 
                src={parallaxImg2}
                alt="Mentorship"
                className="w-full h-full object-cover transition-all duration-1000 opacity-0 animate-fade-in"
              />
            </div>

            {/* Image 3 - Main featured - with adjusted speed */}
            <div 
              className={`absolute w-full h-[16.66%] ${isMobile ? 'animate-flow-up-fast animate-color-fade-3' : ''}`}
              style={isMobile ? 
                undefined : 
                { 
                  top: `${animations[2].startPosition}%`, // Consistent random starting vertical position
                  animation: `flowUp ${animations[2].flowDuration}s ease-in-out infinite, colorFade3 ${animations[2].colorDuration}s infinite`, // Back to normal speed
                  animationDelay: `${animations[2].delay}s, ${animations[2].delay + Math.random() * 2}s`,
                  zIndex: activeImageIndex === 2 ? 10 : 1
                }
              }
            >
              <img 
                src={parallaxImg6}
                alt="Amanda Basu Roy - Founder"
                className="w-full h-full object-cover transition-all duration-1000 opacity-0 animate-fade-in"
              />
            </div>

            {/* Image 4 */}
            <div 
              className={`absolute w-full h-[16.66%] ${isMobile ? 'animate-flow-up-faster animate-color-fade-4' : ''}`}
              style={isMobile ? 
                undefined : 
                { 
                  top: `${animations[3].startPosition}%`, // Consistent random starting vertical position
                  animation: `flowUp ${animations[3].flowDuration * 2}s ease-in-out infinite, colorFade4 ${animations[3].colorDuration}s infinite`, // Slower movement
                  animationDelay: `${animations[3].delay}s, ${animations[3].delay + Math.random() * 2}s`,
                  zIndex: activeImageIndex === 3 ? 10 : 1
                }
              }
            >
              <img 
                src={parallaxImg3}
                alt="Creative flow"
                className="w-full h-full object-cover transition-all duration-1000 opacity-0 animate-fade-in"
              />
            </div>

            {/* Image 5 */}
            <div 
              className={`absolute w-full h-[16.66%] ${isMobile ? 'animate-flow-up-fastest animate-color-fade-5' : ''}`}
              style={isMobile ? 
                undefined : 
                { 
                  top: `${animations[4].startPosition}%`, // Consistent random starting vertical position
                  animation: `flowUp ${animations[4].flowDuration * 2}s ease-in-out infinite, colorFade5 ${animations[4].colorDuration}s infinite`, // Slower movement
                  animationDelay: `${animations[4].delay}s, ${animations[4].delay + Math.random() * 2}s`,
                  zIndex: activeImageIndex === 4 ? 10 : 1
                }
              }
            >
              <img 
                src={parallaxImg4}
                alt="Embodied learning"
                className="w-full h-full object-cover transition-all duration-1000 opacity-0 animate-fade-in"
              />
            </div>

            {/* Image 6 - normal upward movement */}
            <div 
              className={`absolute w-full h-[16.66%] ${isMobile ? 'animate-flow-up-ultra animate-color-fade-6' : ''}`}
              style={isMobile ? 
                undefined : 
                { 
                  top: `${animations[5].startPosition}%`, // Consistent random starting vertical position
                  animation: `flowUp ${animations[5].flowDuration * 2}s ease-in-out infinite, colorFade6 ${animations[5].colorDuration}s infinite`, // Slower movement
                  animationDelay: `${animations[5].delay}s, ${animations[5].delay + Math.random() * 2}s`,
                  zIndex: activeImageIndex === 5 ? 10 : 1
                }
              }
            >
              <img 
                src={parallaxImg5}
                alt="Community connection"
                className="w-full h-full object-cover transition-all duration-1000 opacity-0 animate-fade-in"
              />
            </div>
          </div>
        </div>

        {/* Right/Bottom - Fixed text block with exact copy */}
        <div className="w-full lg:w-[40%] flex-shrink-0 lg:sticky lg:top-0 min-h-[50vh] lg:h-screen flex items-start justify-start bg-background order-2 lg:order-2">
          <div className="w-full px-6 lg:px-12 py-12 lg:py-0">
            <div className="max-w-[520px]">
            {/* Main headline */}
            <h1 className="text-[clamp(5rem,16vw,12rem)] font-display text-foreground leading-[1.1] mb-6 uppercase tracking-wide" data-testid="text-headline">
              Embodied Craft Studio
            </h1>

            {/* Subcopy with exact copy from requirements */}
            <p className="text-base lg:text-lg text-muted-foreground leading-[1.65] mb-8" data-testid="text-subcopy">
              where learning is alive, joyful, and deeply connected. The studio brings together craft, movement and collaboration as tools for personal and collective transformation.
            </p>

            {/* Second paragraph */}
            <p className="text-base lg:text-lg text-muted-foreground leading-[1.65] mb-8" data-testid="text-subcopy-2">
              A circle of shared wisdom, where creativity is not a luxury, but a vital way of being.
            </p>

            {/* CTA Button */}
            <button
              className="bg-[#AD2E2C] text-foreground text-base font-display uppercase px-8 py-4 rounded-lg cta-transition hover:bg-foreground hover:text-[#AD2E2C] hover:border-2 hover:border-[#AD2E2C] border-2 border-transparent transition-colors duration-300"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-see-work"
            >
              SEE MY WORK
            </button>
          </div>
        </div>
        </div>
      </div>
      
      {/* Add the enhanced animation keyframes to the component */}
      <style jsx>{`
        @keyframes flowUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        
        @keyframes colorFade1 {
          0% { filter: grayscale(100%) opacity(0.7); }
          40% { filter: grayscale(50%) opacity(0.8); }
          60% { filter: grayscale(0%) opacity(1); }
          80% { filter: grayscale(50%) opacity(0.8); }
          100% { filter: grayscale(100%) opacity(0.7); }
        }
        
        @keyframes colorFade2 {
          0% { filter: grayscale(100%) opacity(0.7); }
          40% { filter: grayscale(50%) opacity(0.8); }
          60% { filter: grayscale(0%) opacity(1); }
          80% { filter: grayscale(50%) opacity(0.8); }
          100% { filter: grayscale(100%) opacity(0.7); }
        }
        
        @keyframes colorFade3 {
          0% { filter: grayscale(100%) opacity(0.7); }
          40% { filter: grayscale(50%) opacity(0.8); }
          60% { filter: grayscale(0%) opacity(1); }
          80% { filter: grayscale(50%) opacity(0.8); }
          100% { filter: grayscale(100%) opacity(0.7); }
        }
        
        @keyframes colorFade4 {
          0% { filter: grayscale(100%) opacity(0.7); }
          40% { filter: grayscale(50%) opacity(0.8); }
          60% { filter: grayscale(0%) opacity(1); }
          80% { filter: grayscale(50%) opacity(0.8); }
          100% { filter: grayscale(100%) opacity(0.7); }
        }
        
        @keyframes colorFade5 {
          0% { filter: grayscale(100%) opacity(0.7); }
          40% { filter: grayscale(50%) opacity(0.8); }
          60% { filter: grayscale(0%) opacity(1); }
          80% { filter: grayscale(50%) opacity(0.8); }
          100% { filter: grayscale(100%) opacity(0.7); }
        }
        
        @keyframes colorFade6 {
          0% { filter: grayscale(100%) opacity(0.7); }
          40% { filter: grayscale(50%) opacity(0.8); }
          60% { filter: grayscale(0%) opacity(1); }
          80% { filter: grayscale(50%) opacity(0.8); }
          100% { filter: grayscale(100%) opacity(0.7); }
        }
        
        @keyframes fadeIn {
          0% { 
            opacity: 0; 
            transform: scale(0.9);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.95);
          }
          100% { 
            opacity: 1; 
            transform: scale(1);
          }
        }
        
        .animate-flow-up {
          animation: flowUp 60s linear infinite;
        }
        
        .animate-flow-up-medium {
          animation: flowUp 50s linear infinite;
        }
        
        .animate-flow-up-fast {
          animation: flowUp 40s linear infinite;
        }
        
        .animate-flow-up-faster {
          animation: flowUp 35s linear infinite;
        }
        
        .animate-flow-up-fastest {
          animation: flowUp 25s linear infinite;
        }
        
        .animate-flow-up-ultra {
          animation: flowUp 15s linear infinite;
        }
        
        .animate-color-fade-1 {
          animation: colorFade1 6s infinite;
        }
        
        .animate-color-fade-2 {
          animation: colorFade2 7s infinite;
        }
        
        .animate-color-fade-3 {
          animation: colorFade3 6.5s infinite;
        }
        
        .animate-color-fade-4 {
          animation: colorFade4 5.5s infinite;
        }
        
        .animate-color-fade-5 {
          animation: colorFade5 6.5s infinite;
        }
        
        .animate-color-fade-6 {
          animation: colorFade6 5s infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
      <ScrollSuggestion />
    </section>
  );
}
