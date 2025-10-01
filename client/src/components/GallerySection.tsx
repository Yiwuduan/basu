import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '@assets/IMG_0848_1758970285463.jpeg';
import img2 from '@assets/IMG_0853_1758970285464.jpeg';
import img3 from '@assets/IMG_2125_1758970285465.jpeg';
import img4 from '@assets/IMG_4081_1758970285467.jpeg';
import img5 from '@assets/IMG_4089_1758970285467.jpeg';
import img6 from '@assets/IMG_0882_1758970285465.jpeg';
import img7 from '@assets/IMG_4068_1758970285466.jpeg';
import img8 from '@assets/IMG_4060_1758970285466.jpeg';

const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-[36px] lg:text-[56px] font-bold text-white text-center mb-8 lg:mb-12" data-testid="text-carousel-headline">
          Mentorship in Action
        </h2>

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (240 + 32)}px)` }}
            >
              {carouselImages.map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[240px] h-[300px] relative group transition-all duration-300 -rotate-3 hover:rotate-0"
                  data-testid={`carousel-card-${index}`}
                >
                  <div 
                    className="w-full h-full rounded-[16px] overflow-hidden relative transition-all duration-300 border-2 border-transparent hover:border-[#FF4D00]"
                    style={{
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <img 
                      src={img}
                      alt={`Mentorship moment ${index + 1}`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    {/* Orange stripe overlay */}
                    <div 
                      className="absolute top-0 left-0 w-full h-2 bg-[#FF4D00]"
                      style={{ opacity: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-[#FF4D00] text-white flex items-center justify-center hover:bg-[#ff6b35] transition-colors"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-[#FF4D00] text-white flex items-center justify-center hover:bg-[#ff6b35] transition-colors"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <p className="text-[20px] text-[#CCCCCC] text-center" data-testid="text-carousel-caption">
          A glimpse into our circles of craft, movement, and mentorship.
        </p>
      </div>
    </section>
  );
}