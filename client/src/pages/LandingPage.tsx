import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import WorkshopSection from '@/components/WorkshopSection';
import SignupSection from '@/components/SignupSection';
import Footer from '@/components/Footer';

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('.fade-in-up');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <div className="fade-in-up">
          <GallerySection />
        </div>
        <div className="fade-in-up">
          <AboutSection />
        </div>
        <div className="fade-in-up">
          <WorkshopSection />
        </div>
        <div className="fade-in-up">
          <SignupSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}