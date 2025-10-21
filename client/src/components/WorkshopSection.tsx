import { useState, useEffect } from 'react';
import img1 from '@assets/IMG_0848_1758970285463.jpeg';
import img2 from '@assets/IMG_0853_1758970285464.jpeg';
import img3 from '@assets/IMG_2125_1758970285465.jpeg';
import img4 from '@assets/IMG_4081_1758970285467.jpeg';

export default function WorkshopSection() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  // Tile data for the CSS poster flyer
  const tiles = [
    {
      id: 1,
      title: "Studio Flow",
      content: "with music journey",
      subtitle: "Awaken the Senses: embodiment practice",
      description: "Theme: story Technical Skills Crafting Food and Content Creation"
    },
    {
      id: 2,
      title: "Themes",
      content: "Dive into authentic self-expression.",
      subtitle: "Activate your imagination in creative flow.",
      description: "Elevate your craft practice through intuition, discipline and body awareness. Harness your power: seasons and cycles of the creative feminine. Build community through craft: mentorship, events."
    },
    {
      id: 3,
      title: "Technical Skills",
      content: "Advance your skills in clothing creation with:",
      subtitle: "Pattern drafting Garment construction Sewing by hand and machine",
      description: "Fabric technology Working on the floor"
    }
  ];

  return (
    <section id="workshop" className="py-16 lg:py-24 bg-background">
      {/* Simplified event poster design with high contrast and typography focus */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative stickers */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-[#AD2E2C] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
          !
        </div>
        <div className="absolute top-24 right-12 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
          NEW
        </div>
        <div className="absolute bottom-24 left-16 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
          ✨
        </div>
        
        <div className="bg-gradient-to-br from-sky-300 to-purple-500 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/30 shadow-xl">
            {/* Main header with high contrast typography */}
            <div className="text-center mb-8 md:mb-12 relative z-10">
              <div className="inline-block px-6 py-2 bg-[#AD2E2C] text-white font-bold text-sm uppercase tracking-wider mb-4">
                Special Workshop
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
                STYLE BEYOND THE MATERIAL
              </h2>
              <div className="bg-gray-900 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-lg inline-block my-2">
                Embodied Craft Studio for Girls (12-16)
              </div>
              <div className="mt-4">
                <div className="bg-gray-800 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-lg inline-block">
                  Friday Evenings (4-9pm)
                </div>
              </div>
            </div>

            {/* Main workshop description */}
            <div className="text-center mb-12 max-w-3xl mx-auto relative z-10">
              <p className="text-xl md:text-2xl font-bold text-foreground mb-3">Upcycle your wardrobe,</p>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-3">harness creative flow and</p>
              <p className="text-2xl md:text-3xl font-black text-foreground">awaken your signature style.</p>
            </div>

            {/* CSS poster tiles grid - simplified with high contrast */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
              {tiles.map((tile) => (
                <div
                  key={tile.id}
                  className={`border border-white/20 rounded-xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    hoveredTile === tile.id 
                      ? 'bg-gradient-to-b from-amber-900/70 via-red-900/60 to-stone-700/50 scale-105 shadow-xl backdrop-blur-sm' 
                      : 'bg-gradient-to-b from-amber-800/60 via-red-800/50 to-stone-600/40 backdrop-blur-sm'
                  }`}
                  onMouseEnter={() => setHoveredTile(tile.id)}
                  onMouseLeave={() => setHoveredTile(null)}
                >
                  {/* Film grain texture overlay for base state */}
                  <div className={`absolute inset-0 rounded-xl pointer-events-none ${
                    hoveredTile === tile.id 
                      ? 'opacity-20' 
                      : hoveredTile 
                        ? 'opacity-0' 
                        : 'opacity-20'
                  }`} 
                       style={{ 
                         background: `repeating-linear-gradient(
                           0deg,
                           rgba(0,0,0,0.15),
                           rgba(0,0,0,0.15) 1px,
                           transparent 1px,
                           transparent 2px
                         )`
                       }}></div>
                  <div className="text-center relative z-10">
                    <h3 className={`text-xl md:text-2xl font-black mb-3 ${
                      hoveredTile === tile.id ? 'text-white' : 'text-white'
                    }`}>{tile.title}</h3>
                    <p className="text-base md:text-lg text-white/90 mb-2 font-semibold">{tile.content}</p>
                    <p className="text-sm md:text-base text-white/80 mb-3 font-medium italic">{tile.subtitle}</p>
                    <p className="text-sm md:text-base text-white/95">{tile.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Workshop images gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 relative z-10">
              {[img1, img2, img3, img4].map((img, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-lg overflow-hidden border-2 border-border"
                >
                  <img 
                    src={img} 
                    alt={`Workshop activity ${index + 1}`} 
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Join our circle CTA - converted to clickable button with glass shine */}
            <button 
              className="w-full text-center bg-gray-900 text-foreground rounded-xl p-8 relative z-10 overflow-hidden group"
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white">Join our Circle</h3>
                <p className="text-base md:text-lg mb-4 font-medium text-white">Tell us about you</p>
                <p className="text-lg font-black bg-white text-gray-900 py-3 px-6 rounded-lg inline-block">
                  $50/month membership: part of the basu community: workshops, work opportunities
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
