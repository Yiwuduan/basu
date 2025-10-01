import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import WorkshopSection from '@/components/WorkshopSection';
import SignupSection from '@/components/SignupSection';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <WorkshopSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}