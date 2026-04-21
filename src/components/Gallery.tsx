import { Link } from 'react-router-dom';
import { useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import local gallery images
import dentalWork1 from '../assets/gallery/dental-work-1.jpg';
import dentalWork2 from '../assets/gallery/dental-work-2.jpg';
import dentalWork3 from '../assets/gallery/dental-work-3.jpg';
import dentalWork4 from '../assets/gallery/dental-work-4.jpg';
import dentalWork5 from '../assets/gallery/dental-work-5.jpg';

// Gallery images showcasing dental treatments
const galleryImages = [
  dentalWork1,
  dentalWork2,
  dentalWork3,
  dentalWork4,
  dentalWork5,
];

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    duration: 25,
    dragFree: false,
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) return;
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);
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
      .on('settle', startAutoplay);

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
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 gap-6">
          <div className="text-center md:text-left max-w-[800px]">
            <h2 className="mb-4 text-3xl md:text-4xl text-[var(--color-navy)] tracking-tight font-medium">
              Gallery
            </h2>
            <p className="text-base md:text-lg text-[var(--color-navy)]/60 leading-relaxed">
              Explore our portfolio of transformative dental treatments and beautiful smile transformations.
            </p>
          </div>

          {/* Navigation Arrows */}
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
        <div className="embla overflow-hidden mb-12" ref={emblaRef}>
          <div className="embla__container flex">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pr-4 md:pr-6"
              >
                <Link
                  to="/gallery"
                  className="block group relative overflow-hidden rounded-lg shadow-[0_4px_20px_rgba(13,34,63,0.1)] hover:shadow-[0_8px_30px_rgba(13,34,63,0.15)] transition-all duration-300"
                >
                  <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                    <ImageWithFallback
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-block px-8 py-3 bg-[var(--color-navy)] text-white text-sm uppercase tracking-widest hover:bg-[var(--color-navy)]/90 transition-colors rounded-full font-medium shadow-[0_4px_20px_rgba(13,34,63,0.2)]"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
