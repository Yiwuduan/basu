import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const galleryImages = [
  {
    src: '@assets/IMG_0848_1758970285463.jpeg',
    alt: 'Creative workshop space',
    caption: 'Our Studio Environment'
  },
  {
    src: '@assets/IMG_0853_1758970285464.jpeg',
    alt: 'Girls working on projects',
    caption: 'Hands-on Learning'
  },
  {
    src: '@assets/IMG_2125_1758970285465.jpeg',
    alt: 'Sewing and craft work',
    caption: 'Technical Skills Development'
  },
  {
    src: '@assets/IMG_4081_1758970285467.jpeg',
    alt: 'Completed projects',
    caption: 'Creative Expression'
  },
  {
    src: '@assets/IMG_4089_1758970285467.jpeg',
    alt: 'Community building',
    caption: 'Building Community'
  },
  {
    src: '@assets/IMG_0882_1758970285465.jpeg',
    alt: 'Mentorship moments',
    caption: 'Guidance & Support'
  }
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Workshop Gallery</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
            See Learning in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step into our creative studio where girls discover their authentic voice through 
            craft, mentorship, and joyful exploration.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover-elevate border-card-border group">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f5f5f5'/%3E%3Ctext x='200' y='180' text-anchor='middle' fill='%23999' font-size='14' font-family='Arial'%3E${encodeURIComponent(image.alt)}%3C/text%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%23666' font-size='12' font-family='Arial'%3E${encodeURIComponent(image.caption)}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm">{image.caption}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to be part of this creative community?
          </p>
          <div className="inline-flex gap-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}