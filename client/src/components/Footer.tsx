import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#222222] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-12">
          {/* Left - Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold text-[#FF4D00]" data-testid="text-footer-logo">
              Amanda Basu Roy
            </h3>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex flex-col gap-6">
            <a 
              href="#home" 
              className="text-white hover:text-[#FF4D00] transition-colors text-lg"
              data-testid="link-footer-home"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-[#FF4D00] transition-colors text-lg"
              data-testid="link-footer-about"
            >
              About
            </a>
            <a 
              href="#workshop" 
              className="text-white hover:text-[#FF4D00] transition-colors text-lg"
              data-testid="link-footer-workshop"
            >
              Workshop
            </a>
            <a 
              href="#signup" 
              className="text-white hover:text-[#FF4D00] transition-colors text-lg"
              data-testid="link-footer-signup"
            >
              Join
            </a>
          </div>

          {/* Right - Social Icons */}
          <div className="flex gap-6 md:justify-end">
            <a 
              href="#" 
              className="text-white hover:text-[#FF4D00] transition-colors"
              data-testid="link-instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#FF4D00] transition-colors"
              data-testid="link-facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#FF4D00] transition-colors"
              data-testid="link-twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Final Line */}
        <p className="text-center text-[20px] text-[#FF4D00] italic" data-testid="text-footer-tagline">
          Let's build something meaningful together.
        </p>
      </div>
    </footer>
  );
}