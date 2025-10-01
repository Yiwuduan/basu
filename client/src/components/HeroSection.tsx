import { useEffect, useRef, useState } from 'react';
import parallaxImg1 from '@assets/PHOTO-2025-08-28-14-02-49 2_1759300881690.jpg';
import parallaxImg2 from '@assets/PHOTO-2025-08-28-14-02-49 3_1759300881690.jpg';
import parallaxImg3 from '@assets/PHOTO-2025-08-28-14-02-49 4_1759300881690.jpg';
import parallaxImg4 from '@assets/PHOTO-2025-08-28-14-02-49 5_1759300881691.jpg';
import parallaxImg5 from '@assets/PHOTO-2025-08-28-14-02-49 6_1759300881691.jpg';
import parallaxImg6 from '@assets/PHOTO-2025-08-28-14-02-49_1759300881691.jpg';

export default function HeroSection() {
  const [mouseProgress, setMouseProgress] = useState(0.5);
  const targetMouse = useRef(0.5);
  const currentMouse = useRef(0.5);
  const rafId = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (0 to 1)
      const mouseY = e.clientY;
      const viewportHeight = window.innerHeight;
      const normalizedY = mouseY / viewportHeight;
      targetMouse.current = normalizedY;
    };

    // Heavier momentum with slower lerp (0.04 = more weighted, slower response)
    const animate = () => {
      currentMouse.current += (targetMouse.current - currentMouse.current) * 0.04;
      setMouseProgress(currentMouse.current);
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Calculate parallax transforms - 2x sensitivity with 1600px range
  const getParallaxStyle = (speed: number) => {
    const centerOffset = mouseProgress - 0.5; // -0.5 to 0.5
    // Add baseline offset to position images higher initially
    const baselineOffset = -400; // Move images up by 400px from center
    const movement = -centerOffset * speed * 1600 + baselineOffset; // 1600px range for 2x sensitivity
    return {
      transform: `translate3d(0, ${movement}px, 0)`,
      willChange: 'transform',
    };
  };

  return (
    <section id="home" className="relative min-h-screen lg:h-screen">
      <div className="flex flex-col lg:flex-row w-full h-full">
      {/* Left/Top - Vertically stacked parallax images */}
      <div className="w-full lg:w-[60%] relative flex-shrink-0 overflow-hidden bg-black h-[50vh] lg:h-screen order-1 lg:order-1">
        {/* Container for stacked images with parallax */}
        <div className="relative">
          {/* Image 1 */}
          <div 
            className="relative w-full h-[70vh] mb-8"
            style={getParallaxStyle(1.2)}
          >
            <img 
              src={parallaxImg1}
              alt="Creative expression"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 2 */}
          <div 
            className="relative w-full h-[70vh] mb-8"
            style={getParallaxStyle(1.8)}
          >
            <img 
              src={parallaxImg2}
              alt="Mentorship"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 3 - Main featured */}
          <div 
            className="relative w-full h-[80vh] mb-8"
            style={getParallaxStyle(2.5)}
            data-testid="img-founder"
          >
            <img 
              src={parallaxImg6}
              alt="Amanda Basu Roy - Founder"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 4 */}
          <div 
            className="relative w-full h-[70vh] mb-8"
            style={getParallaxStyle(3.2)}
          >
            <img 
              src={parallaxImg3}
              alt="Creative flow"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 5 */}
          <div 
            className="relative w-full h-[70vh] mb-8"
            style={getParallaxStyle(3.8)}
          >
            <img 
              src={parallaxImg4}
              alt="Embodied learning"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Image 6 */}
          <div 
            className="relative w-full h-[70vh]"
            style={getParallaxStyle(4.5)}
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

      {/* Right/Bottom - Fixed text block */}
      <div className="w-full lg:w-[40%] flex-shrink-0 lg:sticky lg:top-0 min-h-[50vh] lg:h-screen flex items-center justify-center px-6 py-12 lg:px-12 lg:py-0 bg-black order-2 lg:order-2">
        <div className="max-w-[520px] w-full">
          {/* Small tag line */}
          <p className="text-[14px] lg:text-[18px] uppercase text-[#FF4D00] tracking-[2px] mb-4 lg:mb-8" data-testid="text-tagline">
            Mentorship • Projects • Community
          </p>

          {/* Main headline */}
          <h1 className="text-[40px] lg:text-[88px] font-bold text-white leading-[1.1] mb-4 lg:mb-8" data-testid="text-headline">
            Reframing Learning & Life Together
          </h1>

          {/* Subcopy */}
          <p className="text-[16px] lg:text-[20px] text-[#CCCCCC] leading-[1.65] mb-8 lg:mb-12" data-testid="text-subcopy">
            I believe education should be alive, joyful, and connected. My work is about creating spaces where families learn through craft, movement, and mentorship—not institutions.
          </p>

          {/* CTA Button */}
          <button
            className="bg-[#FF4D00] text-white text-[16px] lg:text-[18px] font-bold uppercase px-10 py-4 lg:px-14 lg:py-6 rounded-lg cta-transition hover:bg-black hover:text-[#FF4D00] hover:border-2 hover:border-[#FF4D00] border-2 border-transparent"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-see-work"
          >
            SEE MY WORK
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
