import img1 from '@assets/IMG_4068_1758970285466.jpeg';
import img2 from '@assets/IMG_4089_1758970285467.jpeg';
import img3 from '@assets/IMG_0882_1758970285465.jpeg';

export default function AboutSection() {
  return (
    <section id="about" className="py-[160px] bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-[56px] font-bold text-white text-center mb-8" data-testid="text-about-headline">
          Crafting Meaningful Learning Spaces
        </h2>

        {/* Subcopy */}
        <p className="text-[20px] text-[#CCCCCC] leading-[1.65] text-center max-w-[640px] mx-auto mb-20" data-testid="text-about-description">
          Everything we need is already here if we design our lives around curiosity, mentorship, and connection. Together, families can thrive beyond rigid institutions.
        </p>

        {/* 3 Tiles */}
        <div className="flex justify-center gap-12">
          {[img1, img2, img3].map((img, index) => (
            <div key={index} className="relative w-[300px] h-[300px]" data-testid={`img-tile-${index + 1}`}>
              <img 
                src={img}
                alt={`Workshop scene ${index + 1}`}
                className="w-full h-full object-cover grayscale rounded-xl"
              />
              {/* Orange corner overlay (triangle) */}
              <div 
                className="absolute top-0 right-0 w-0 h-0"
                style={{
                  borderStyle: 'solid',
                  borderWidth: '0 60px 60px 0',
                  borderColor: 'transparent #FF4D00 transparent transparent'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}