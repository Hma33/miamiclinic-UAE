import { useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryItems = [
  // Crown & Bridge (4 images)
  {
    image: "https://lh3.googleusercontent.com/d/1h2LJnFCxZjNSjEOyffCRj3GVeN0qZZoR",
    title: "Crown & Bridge Restoration",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1YC-gSlIceS3r5A6yUgV_5k63btI_CsCe",
    title: "Crown & Bridge",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1PDcJuoR2y_VBvNiWAZa_GI9_OiMiRkc7",
    title: "Crown & Bridge",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1sJbBiWiuU9T7TpBA-V8WFcJOtWd0FJxr",
    title: "Crown & Bridge",
  },
  // Dentures (3 images)
  {
    image: "https://lh3.googleusercontent.com/d/10Vpj5rpDNQH99Kweu-JH1p5S8fkE0pDx",
    title: "Denture Treatment",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1jG-_dEsAWNLv2GATbKG2699PGq-b44H8",
    title: "Dentures",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1tL3ZSpB9p3Ba1OFseEndnb0xJlkRmG85",
    title: "Dentures",
  },
  // Fillings (3 images)
  {
    image: "https://lh3.googleusercontent.com/d/10wPeaCvNjHdncKnqr14RN1x_UmGA--40",
    title: "Dental Fillings",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1dCA_HaiSDi02_yNPCRJTtgtaWKoqUrQK",
    title: "Fillings",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1_e2W3l13dXDcn5-ONQLp4VBczsb-6uwu",
    title: "Fillings",
  },
  // Scaling & Polishing (2 images)
  {
    image: "https://lh3.googleusercontent.com/d/1EHd0faid36e8SL_4K-J4T51E7rHC3W0P",
    title: "Scaling & Polishing",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1AoIomWreKumU5TgozXXezxyP-LjbS_TG",
    title: "Scaling & Polishing",
  },
  // Teeth Whitening (2 images)
  {
    image: "https://lh3.googleusercontent.com/d/13xh4mdxwYNAIVKRmiYgGtxuPoiK0QREd",
    title: "Teeth Whitening",
  },
  {
    image: "https://lh3.googleusercontent.com/d/14BQis6Np3HXm1RaIWcteVRw8gUNgw-WZ",
    title: "Teeth Whitening",
  },
  // Veneers (4 images)
  {
    image: "https://lh3.googleusercontent.com/d/1PsYbG6MSurmNJHPDOCVYV-AH1LzuDiNl",
    title: "Porcelain Veneers",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1ugKheXXi4s1Fp_04tULxY5STrWi7cfhh",
    title: "Veneers",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1vxqbdUweohoUCBFBNuzOaglo6cszWMpm",
    title: "Veneers",
  },
  {
    image: "https://lh3.googleusercontent.com/d/15PrBICGecF8F-Azvmaod5nMdzUvSEA-t",
    title: "Veneers",
  },
  // X-Rays (2 images)
  {
    image: "https://lh3.googleusercontent.com/d/1GcORCbhcBwfPLENU2RCWrZCBNntPP3Ve",
    title: "Digital X-Rays",
  },
  {
    image: "https://lh3.googleusercontent.com/d/1baOazdchBGc87mmv_c1JdtNrejJ_1kFp",
    title: "X-Rays",
  },
];

export function SmileGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    duration: 25, // Smoother animation
    dragFree: false,
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) return;
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000); // Auto-slide every 4 seconds
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    startAutoplay();

    emblaApi
      .on('pointerDown', stopAutoplay)
      .on('pointerUp', startAutoplay)
      .on('settle', startAutoplay); // Ensure it restarts after any movement settles

    return () => {
      stopAutoplay();
      emblaApi
        .off('pointerDown', stopAutoplay)
        .off('pointerUp', startAutoplay)
        .off('settle', startAutoplay);
    };
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="smile-gallery" className="py-16 md:py-20 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[3400px] mx-auto px-6 md:px-8 relative">
        {/* Header with Navigation Arrows */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl text-[var(--color-navy)] tracking-tight font-medium mb-2">
              Smile Gallery
            </h2>
          </div>

          {/* Navigation Arrows - Top Right */}
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-all"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-all"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pr-4 md:pr-6"
              >
                <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(13,34,63,0.1)] hover:shadow-[0_8px_30px_rgba(13,34,63,0.15)] transition-shadow duration-300">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}