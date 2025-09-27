import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PhilosophySection from '@/components/PhilosophySection';
import WorkshopSection from '@/components/WorkshopSection';
import SignupSection from '@/components/SignupSection';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <WorkshopSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}