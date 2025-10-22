import { useRef, useEffect } from 'react';
import img1 from '@assets/IMG_0848_1758970285463.jpeg';
import img2 from '@assets/IMG_0853_1758970285464.jpeg';
import img3 from '@assets/IMG_2125_1758970285465.jpeg';
import img4 from '@assets/IMG_4081_1758970285467.jpeg';
import img5 from '@assets/IMG_4089_1758970285467.jpeg';
import img6 from '@assets/IMG_0882_1758970285465.jpeg';
import img7 from '@assets/IMG_4068_1758970285466.jpeg';
import img8 from '@assets/IMG_4060_1758970285466.jpeg';
import img9 from '@assets/IMG_4045_1758970285466.jpeg';
import img10 from '@assets/IMG_4060_1758970285466.jpeg';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Pause animation on hover and touch
  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running';
    }
  };
  
  // Touch events for mobile control
  const handleTouchStart = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleTouchEnd = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section id="work" className="py-16 lg:py-24 bg-background">
      {/* Headline */}
      <h2 className="text-[clamp(3rem,10vw,8rem)] font-display text-foreground text-center mb-8 lg:mb-12 px-4 sm:px-6 lg:px-8 uppercase tracking-wide" data-testid="text-carousel-headline">
        My Work
      </h2>

      {/* Edge-to-edge animated gallery */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden py-12 -mx-4 sm:-mx-6 lg:-mx-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main gallery container with slow lateral movement creating a left-to-right visual effect */}
        <div className="flex animate-marquee" style={{ display: 'flex', width: 'max-content' }}>
          {[...galleryImages, ...galleryImages].map((img, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-64 lg:w-80 h-80 lg:h-96 mx-4 relative group transition-all duration-300"
              data-testid={`gallery-item-${index}`}
            >
              <div 
                className="w-full h-full rounded-xl overflow-hidden relative border-2 border-transparent group-hover:border-[#AD2E2C] transition-all duration-300"
                style={{
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                }}
              >
                <img 
                  src={img}
                  alt={`Work example ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="text-base lg:text-lg text-muted-foreground text-center mt-12 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="text-carousel-caption">
        The studio brings together craft, movement and collaboration as tools for personal and collective transformation. Here, making becomes a form of knowing.
      </p>
      
      {/* Add the marquee animation keyframes to the component */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
        }
        
        /* Hide scrollbars */
        .overflow-hidden {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        .overflow-hidden::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
}