import { ImageWithFallback } from './figma/ImageWithFallback';

// Gallery images showcasing dental treatments
const galleryImages = [
  'https://lh3.googleusercontent.com/d/1h2LJnFCxZjNSjEOyffCRj3GVeN0qZZoR',
  'https://lh3.googleusercontent.com/d/1YC-gSlIceS3r5A6yUgV_5k63btI_CsCe',
  'https://lh3.googleusercontent.com/d/1PDcJuoR2y_VBvNiWAZa_GI9_OiMiRkc7',
  'https://lh3.googleusercontent.com/d/1sJbBiWiuU9T7TpBA-V8WFcJOtWd0FJxr',
  'https://lh3.googleusercontent.com/d/1PsYbG6MSurmNJHPDOCVYV-AH1LzuDiNl',
  'https://lh3.googleusercontent.com/d/1ugKheXXi4s1Fp_04tULxY5STrWi7cfhh',
  'https://lh3.googleusercontent.com/d/1vxqbdUweohoUCBFBNuzOaglo6cszWMpm',
  'https://lh3.googleusercontent.com/d/15PrBICGecF8F-Azvmaod5nMdzUvSEA-t',
  'https://lh3.googleusercontent.com/d/1_98deXv5jxAnS4SzPormxJo_yiUs2FvT',
  'https://lh3.googleusercontent.com/d/1VI-JI1OQV_qdI_mzIzaRRb4aGK-FpgL9',
  'https://lh3.googleusercontent.com/d/10Vpj5rpDNQH99Kweu-JH1p5S8fkE0pDx',
  'https://lh3.googleusercontent.com/d/1jG-_dEsAWNLv2GATbKG2699PGq-b44H8',
];

export function InfiniteCarousel() {
  return (
    <section className="pt-64 md:pt-80 pb-32 md:pb-40 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 mb-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl text-[var(--color-navy)] tracking-tight font-medium mb-4">
            Smile Gallery
          </h2>
          <p className="text-base text-[var(--color-navy)]/60 leading-relaxed max-w-[700px] mx-auto">
            Explore our portfolio of transformative dental treatments and beautiful smile transformations.
          </p>
        </div>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative">
        <div className="carousel-container">
          <div className="carousel-track">
            {/* First set of images */}
            {galleryImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="carousel-item"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {galleryImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="carousel-item"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* View Full Gallery Button */}
      <div className="text-center mt-16">
        <a
          href="/gallery"
          className="inline-block px-8 py-3 bg-[var(--color-navy)] text-white text-sm uppercase tracking-widest hover:bg-[var(--color-navy)]/90 transition-colors rounded-full font-medium shadow-[0_4px_20px_rgba(13,34,63,0.2)]"
        >
          View Full Gallery
        </a>
      </div>

      {/* Carousel Animation Styles */}
      <style>{`
        .carousel-container {
          width: 100%;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          gap: 1.5rem;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .carousel-item {
          flex-shrink: 0;
          width: 350px;
          height: 450px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(13, 34, 63, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .carousel-item:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(13, 34, 63, 0.15);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-350px * ${galleryImages.length} - 1.5rem * ${galleryImages.length}));
          }
        }

        @media (max-width: 768px) {
          .carousel-item {
            width: 280px;
            height: 360px;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-280px * ${galleryImages.length} - 1.5rem * ${galleryImages.length}));
            }
          }
        }
      `}</style>
    </section>
  );
}
