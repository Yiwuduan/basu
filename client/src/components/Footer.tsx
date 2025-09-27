import { Heart, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Amanda Basu Roy</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Creating spaces for joyful learning, authentic expression, and meaningful mentorship 
              beyond traditional educational systems.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love for learning</span>
            </div>
          </div>

          {/* Middle Column - Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">hello@amandabasuroy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">Studio visits by appointment</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mission */}
          <div>
            <h4 className="font-semibold mb-4">Our Mission</h4>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              To create learning environments where children thrive through curiosity, 
              creative expression, and authentic relationships with mentors who love what they do.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Amanda Basu Roy. All rights reserved. 
            <span className="mx-2">•</span>
            Privacy Policy
            <span className="mx-2">•</span>
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}