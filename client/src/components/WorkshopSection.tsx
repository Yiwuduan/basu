import { Check } from 'lucide-react';
import workshopImage from '@assets/IMG_4089_1758970285467.jpeg';

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-[160px] bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Section Header */}
            <h2 className="text-[56px] font-bold text-white mb-6 leading-tight" data-testid="text-workshop-headline">
              Style Beyond the Material
            </h2>

            {/* Subline */}
            <h3 className="text-[24px] font-semibold text-[#FF4D00] mb-8" data-testid="text-workshop-subline">
              Embodied Craft Studio for Girls (10–15)
            </h3>

            {/* Event Details */}
            <div className="space-y-8 mb-8">
              <p className="text-[20px] text-[#CCCCCC] leading-[2]" data-testid="text-event-schedule">
                Friday Evenings (4–9pm)
              </p>
              <p className="text-[20px] text-[#CCCCCC] leading-[2]" data-testid="text-event-description">
                Upcycle your wardrobe, harness creative flow, awaken your signature style.
              </p>
            </div>

            {/* Bulleted List */}
            <div className="space-y-4 mb-8">
              {[
                "Awaken the Senses: embodiment practice",
                "Technical Skills: pattern drafting, garment construction, sewing by hand & machine",
                "Crafting, food, and content creation",
                "Harness the power of seasons & cycles of the creative feminine"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`list-item-${index}`}>
                  <Check className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p className="text-[18px] text-[#CCCCCC]">{item}</p>
                </div>
              ))}
            </div>

            {/* Closing Line */}
            <p className="text-[20px] text-[#FF4D00] italic" data-testid="text-registration-info">
              Register: right fit, studio visit, class pacs.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={workshopImage}
                alt="Workshop creative scene"
                className="w-full h-full object-cover grayscale"
                data-testid="img-workshop"
              />
              {/* Orange highlight overlay - vertical stripe */}
              <div 
                className="absolute top-0 left-12 w-1 h-full bg-[#FF4D00]"
                style={{ opacity: 0.9 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}