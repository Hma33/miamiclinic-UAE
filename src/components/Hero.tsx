import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import img1 from 'figma:asset/c0137f7d6ff9214e72cffa3327ae70be37757617.png';
import img2 from 'figma:asset/23173de7c6ae01277fb29728ab86b156399de830.png';
import img3 from 'figma:asset/b2c511f4d9d8b208eb377cfdc7cd3c607a7a9e22.png';
import img4 from 'figma:asset/c63c215eae3e898b6b46e63dba5eb55e4eb87621.png';
import img5 from 'figma:asset/f276054f00e7389afad29b5ec9de6fd7db5b81d7.png';
import img6 from 'figma:asset/121a26dec824aea056c0f8e0bc5d0a5c66515925.png';

export function Hero() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-20 min-h-[80vh] flex items-center border-b border-black overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentIndex === index ? 1 : 0,
            }}
          >
            <img
              src={img}
              alt={`Dental care ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="max-w-[800px]">
          <span className="text-xl italic mb-8 block text-white">
            Refined & Reliable Care in Dubai
          </span>
          <h1 className="mb-6 text-white text-3xl md:text-5xl lg:text-6xl leading-tight">
            Because great dentistry isn't rushed—it's carefully planned.
          </h1>
          <p className="mb-6 text-white">
            We combine time-tested dental principles with the latest advancements in
            technology to deliver precise, personalized care.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-block px-8 py-3 border border-white bg-white text-black text-sm uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors"
            >
              Our Services
            </a>
            <a
              href="tel:+971548883372"
              className="inline-block px-8 py-3 border border-white bg-transparent text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              <Phone className="inline-block mr-1" /> Call +971 54 888 3372
            </a>
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}