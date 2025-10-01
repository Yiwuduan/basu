import { useEffect, useRef } from 'react';
import parallaxImg1 from '@assets/PHOTO-2025-08-28-14-02-49 2_1759300881690.jpg';
import parallaxImg2 from '@assets/PHOTO-2025-08-28-14-02-49 3_1759300881690.jpg';
import parallaxImg3 from '@assets/PHOTO-2025-08-28-14-02-49 4_1759300881690.jpg';
import parallaxImg4 from '@assets/PHOTO-2025-08-28-14-02-49 5_1759300881691.jpg';
import parallaxImg5 from '@assets/PHOTO-2025-08-28-14-02-49 6_1759300881691.jpg';
import parallaxImg6 from '@assets/PHOTO-2025-08-28-14-02-49_1759300881691.jpg';

export default function HeroSection() {
  const targetMouse = useRef(0.5);
  const currentMouse = useRef(0.5);
  const rafId = useRef<number>();
  const isAnimating = useRef(false);
  const scrollTimeout = useRef<number>();
  
  // Refs for each parallax image container
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Speed multipliers for each image - 3x faster: [3.6, 5.4, 7.5, 9.6, 11.4, 13.5]
  const speeds = [3.6, 5.4, 7.5, 9.6, 11.4, 13.5];

  useEffect(() => {
    // Wait for refs to be populated, then initialize positions
    const initTimeout = setTimeout(() => {
      // Initialize with current mouse position
      // Changed range: 50% to 60% of viewport (0.5 to 0.6)
      const normalizedOffset = (currentMouse.current - 0.5) / 0.1; // Maps 0.5-0.6 to 0-1
      const clampedOffset = Math.max(0, Math.min(1, normalizedOffset));
      const centerOffset = clampedOffset - 0.5;
      
      imageRefs.current.forEach((el, index) => {
        if (el) {
          const movement = -centerOffset * speeds[index] * 800;
          el.style.transform = `translate3d(0, ${movement}px, 0)`;
        }
      });
    }, 50);

    const handleMouseMove = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const viewportHeight = window.innerHeight;
      const normalizedY = mouseY / viewportHeight;
      targetMouse.current = normalizedY;
      
      // Start animation loop if not already running
      if (!isAnimating.current) {
        isAnimating.current = true;
        animate();
      }
    };

    // Imperative animation - no React state updates
    const animate = () => {
      const diff = Math.abs(targetMouse.current - currentMouse.current);
      
      // Stop animation when settled (epsilon check)
      if (diff < 0.001) {
        isAnimating.current = false;
        return;
      }

      // Heavy momentum with slow lerp
      currentMouse.current += (targetMouse.current - currentMouse.current) * 0.04;
      
      // Update DOM directly - no React re-render
      // Adjusted range: start at 0.5 (50% from top) and end at 0.6 (60% from top)
      const normalizedOffset = (currentMouse.current - 0.5) / 0.1; // Maps 0.5-0.6 to 0-1
      const clampedOffset = Math.max(0, Math.min(1, normalizedOffset)); // Clamp to 0-1
      const centerOffset = clampedOffset - 0.5; // -0.5 to 0.5
      
      imageRefs.current.forEach((el, index) => {
        if (el) {
          const movement = -centerOffset * speeds[index] * 800;
          el.style.transform = `translate3d(0, ${movement}px, 0)`;
        }
      });

      rafId.current = requestAnimationFrame(animate);
    };

    // Scroll event handlers - pause animation during scroll
    const handleScrollStart = () => {
      // Snap animation to target immediately
      currentMouse.current = targetMouse.current;
      
      // Update one final time
      const normalizedOffset = (currentMouse.current - 0.5) / 0.1;
      const clampedOffset = Math.max(0, Math.min(1, normalizedOffset));
      const centerOffset = clampedOffset - 0.5;
      
      imageRefs.current.forEach((el, index) => {
        if (el) {
          const movement = -centerOffset * speeds[index] * 800;
          el.style.transform = `translate3d(0, ${movement}px, 0)`;
        }
      });
      
      // Cancel animation loop
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        isAnimating.current = false;
      }
      
      // Clear any pending restart
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Debounce restart: resume animation 200ms after scroll ends
      scrollTimeout.current = window.setTimeout(() => {
        if (!isAnimating.current && Math.abs(targetMouse.current - currentMouse.current) > 0.001) {
          isAnimating.current = true;
          animate();
        }
      }, 200);
    };

    // Listen for scroll events
    const wheelListener = (e: WheelEvent) => handleScrollStart();
    const touchListener = (e: TouchEvent) => handleScrollStart();
    const keyListener = (e: KeyboardEvent) => {
      if (['PageUp', 'PageDown', 'Home', 'End', ' ', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        handleScrollStart();
      }
    };
    
    window.addEventListener('wheel', wheelListener, { passive: true });
    window.addEventListener('touchstart', touchListener, { passive: true });
    window.addEventListener('keydown', keyListener, { passive: true });
    
    // Mouse move on the entire window - responds even outside image column
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', wheelListener);
      window.removeEventListener('touchstart', touchListener);
      window.removeEventListener('keydown', keyListener);
      
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-row">
      {/* Left 60% - Fixed viewport with parallax images (non-scrollable) */}
      <div 
        className="w-[60%] h-screen overflow-hidden bg-black fixed top-0 left-0 z-10"
        style={{ position: 'fixed' }}
      >
        {/* Container for stacked images with parallax - more spacing between images */}
        <div className="relative h-full flex flex-col justify-center">
          {/* Image 1 - starts higher to be visible when mouse near top */}
          <div 
            ref={(el) => (imageRefs.current[0] = el)}
            className="absolute left-0 w-full h-[70vh]"
            style={{ top: '-10vh', willChange: 'transform' }}
            data-testid="parallax-container-1"
          >
            <img 
              src={parallaxImg1}
              alt="Creative expression"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 2 - more spacing */}
          <div 
            ref={(el) => (imageRefs.current[1] = el)}
            className="absolute left-0 w-full h-[70vh]"
            style={{ top: '10vh', willChange: 'transform' }}
            data-testid="parallax-container-2"
          >
            <img 
              src={parallaxImg2}
              alt="Mentorship"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 3 - Main featured - more spacing */}
          <div 
            ref={(el) => (imageRefs.current[2] = el)}
            className="absolute left-0 w-full h-[80vh]"
            style={{ top: '35vh', willChange: 'transform' }}
            data-testid="img-founder"
          >
            <img 
              src={parallaxImg6}
              alt="Amanda Basu Roy - Founder"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 4 - more spacing */}
          <div 
            ref={(el) => (imageRefs.current[3] = el)}
            className="absolute left-0 w-full h-[70vh]"
            style={{ top: '65vh', willChange: 'transform' }}
            data-testid="parallax-container-4"
          >
            <img 
              src={parallaxImg3}
              alt="Creative flow"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 5 - more spacing */}
          <div 
            ref={(el) => (imageRefs.current[4] = el)}
            className="absolute left-0 w-full h-[70vh]"
            style={{ top: '95vh', willChange: 'transform' }}
            data-testid="parallax-container-5"
          >
            <img 
              src={parallaxImg4}
              alt="Embodied learning"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 6 - extends lower to remain visible near bottom */}
          <div 
            ref={(el) => (imageRefs.current[5] = el)}
            className="absolute left-0 w-full h-[70vh]"
            style={{ top: '125vh', willChange: 'transform' }}
            data-testid="parallax-container-6"
          >
            <img 
              src={parallaxImg5}
              alt="Community connection"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Right 40% - Fixed text block */}
      <div className="w-[40%] h-screen flex items-center justify-center px-12 bg-black fixed top-0 right-0 z-10">
        <div className="max-w-[520px] w-full">
          {/* Small tag line */}
          <p className="text-[18px] uppercase text-[#FF4D00] tracking-[2px] mb-8" data-testid="text-tagline">
            Mentorship • Projects • Community
          </p>

          {/* Main headline */}
          <h1 className="text-[88px] font-bold text-white leading-[1.1] mb-8" data-testid="text-headline">
            Reframing Learning & Life Together
          </h1>

          {/* Subcopy */}
          <p className="text-[20px] text-[#CCCCCC] leading-[1.65] mb-12" data-testid="text-subcopy">
            I believe education should be alive, joyful, and connected. My work is about creating spaces where families learn through craft, movement, and mentorship—not institutions.
          </p>

          {/* CTA Button */}
          <button
            className="bg-[#FF4D00] text-white text-[18px] font-bold uppercase px-14 py-6 rounded-lg cta-transition hover:bg-black hover:text-[#FF4D00] hover:border-2 hover:border-[#FF4D00] border-2 border-transparent"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-see-work"
          >
            SEE MY WORK
          </button>
        </div>
      </div>
    </section>
  );
}
