import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BrandSection from '@/components/BrandSection';
import AboutSection from '@/components/AboutSection';
import PhilosophySection from '@/components/PhilosophySection';
import WorkshopSection from '@/components/WorkshopSection';
import GallerySection from '@/components/GallerySection';
import StatsSection from '@/components/StatsSection';
import SignupSection from '@/components/SignupSection';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <BrandSection />
        <PhilosophySection />
        <AboutSection />
        <WorkshopSection />
        <GallerySection />
        <StatsSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}