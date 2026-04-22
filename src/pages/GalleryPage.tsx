import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState, useEffect } from 'react';

const galleryCategories = [
  {
    name: 'Crown & Bridge',
    id: 'crown-bridge',
    description: 'Restored strength and aesthetics with custom crowns and bridges',
    images: [
      'https://lh3.googleusercontent.com/d/1h2LJnFCxZjNSjEOyffCRj3GVeN0qZZoR',
      'https://lh3.googleusercontent.com/d/1YC-gSlIceS3r5A6yUgV_5k63btI_CsCe',
      'https://lh3.googleusercontent.com/d/1PDcJuoR2y_VBvNiWAZa_GI9_OiMiRkc7',
      'https://lh3.googleusercontent.com/d/1sJbBiWiuU9T7TpBA-V8WFcJOtWd0FJxr',
      'https://lh3.googleusercontent.com/d/1ysI0rBHBBlu43KnQ3QU7J2QDOJEBxnd2',
      'https://lh3.googleusercontent.com/d/1vB4cHzzCsOXRU2P-LknFwjJfPqa9PQs3',
      'https://lh3.googleusercontent.com/d/14HVrnS5ia_Mmv4cTYeQ5FHW7RRhrhGJ7',
      'https://lh3.googleusercontent.com/d/1QrrKoRMGG_QOcCLhRA0AFOnWb1RsZhI2',
      'https://lh3.googleusercontent.com/d/1-WQ4RfItuEA1kH6UbDCEHNrkFpbpdihV'
    ]
  },
  {
    name: 'Dentures',
    id: 'dentures',
    description: 'Natural-looking dentures for restored function and confidence',
    images: [
      'https://lh3.googleusercontent.com/d/10Vpj5rpDNQH99Kweu-JH1p5S8fkE0pDx',
      'https://lh3.googleusercontent.com/d/1jG-_dEsAWNLv2GATbKG2699PGq-b44H8',
      'https://lh3.googleusercontent.com/d/1tL3ZSpB9p3Ba1OFseEndnb0xJlkRmG85',
      'https://lh3.googleusercontent.com/d/1tRGkwNWs2lsN6Ez3Eeiry9xDQwmHMFl6',
      'https://lh3.googleusercontent.com/d/1Wjo7yhjLF7U7nOv4eB6HjCpcm-KL3GEf'
    ]
  },
  {
    name: 'Fillings',
    id: 'fillings',
    description: 'Seamless repairs that preserve tooth structure and appearance',
    images: [
      'https://lh3.googleusercontent.com/d/10wPeaCvNjHdncKnqr14RN1x_UmGA--40',
      'https://lh3.googleusercontent.com/d/1dCA_HaiSDi02_yNPCRJTtgtaWKoqUrQK',
      'https://lh3.googleusercontent.com/d/1_e2W3l13dXDcn5-ONQLp4VBczsb-6uwu',
      'https://lh3.googleusercontent.com/d/1TFcWUs-0N1O_1tKUL2xzjJgEJg0FCNHM'
    ]
  },
  {
    name: 'Scaling & Polishing',
    id: 'cleaning',
    description: 'Thorough cleaning for healthier gums and brighter smiles',
    images: [
      'https://lh3.googleusercontent.com/d/1EHd0faid36e8SL_4K-J4T51E7rHC3W0P',
      'https://lh3.googleusercontent.com/d/1AoIomWreKumU5TgozXXezxyP-LjbS_TG'
    ]
  },
  {
    name: 'Teeth Whitening',
    id: 'whitening',
    description: 'Professional whitening for a brighter, more confident smile',
    images: [
      'https://lh3.googleusercontent.com/d/13xh4mdxwYNAIVKRmiYgGtxuPoiK0QREd',
      'https://lh3.googleusercontent.com/d/14BQis6Np3HXm1RaIWcteVRw8gUNgw-WZ'
    ]
  },
  {
    name: 'Veneers',
    id: 'veneers',
    description: 'Transform your smile with custom-designed porcelain veneers',
    images: [
      'https://lh3.googleusercontent.com/d/1PsYbG6MSurmNJHPDOCVYV-AH1LzuDiNl',
      'https://lh3.googleusercontent.com/d/1ugKheXXi4s1Fp_04tULxY5STrWi7cfhh',
      'https://lh3.googleusercontent.com/d/1vxqbdUweohoUCBFBNuzOaglo6cszWMpm',
      'https://lh3.googleusercontent.com/d/15PrBICGecF8F-Azvmaod5nMdzUvSEA-t',
      'https://lh3.googleusercontent.com/d/1_98deXv5jxAnS4SzPormxJo_yiUs2FvT',
      'https://lh3.googleusercontent.com/d/1VI-JI1OQV_qdI_mzIzaRRb4aGK-FpgL9',
      'https://lh3.googleusercontent.com/d/1nTFAAiEQXwo4Tjbqc1a3cMEDNGB-NxuR',
      'https://lh3.googleusercontent.com/d/1F9qEUb8hDfthY9RukMVMfg8BvsZz2Z4T',
      'https://lh3.googleusercontent.com/d/1Ue9-2dAM1K3YOQJy2YcqqqCaQGjTx-XX',
      'https://lh3.googleusercontent.com/d/1QjFGw5L-EcOPICcxmcj9SgN9HkT2uOUV',
      'https://lh3.googleusercontent.com/d/1-ob0nGlICHtnsH0Lxw2t85mrHCeT-88r'
    ]
  },
  {
    name: 'X-Rays',
    id: 'xrays',
    description: 'Advanced diagnostic imaging for precise treatment planning',
    images: [
      'https://lh3.googleusercontent.com/d/1GcORCbhcBwfPLENU2RCWrZCBNntPP3Ve',
      'https://lh3.googleusercontent.com/d/1baOazdchBGc87mmv_c1JdtNrejJ_1kFp',
      'https://lh3.googleusercontent.com/d/1jc-p4zKznmPomsrHIvRVcskWiS9ShSD_',
      'https://lh3.googleusercontent.com/d/1J6hYQ0AQCy01BZ6Dzk7-sFmxkosF-H67'
    ]
  },
  {
    name: 'Others',
    id: 'others',
    description: 'Comprehensive dental solutions for all your oral health needs',
    images: [
      'https://lh3.googleusercontent.com/d/1LQ0KTOFbREm4bXWJ5TRY3leuccsnYf6F',
      'https://lh3.googleusercontent.com/d/1DnktHAJ6nlwUY5bPB5DzvMf87SNVJ0Ld'
    ]
  }
];


export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to the category if hash is present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  const categories = ['All', ...galleryCategories.map(cat => cat.name)];

  const filteredGallery = selectedCategory === 'All'
    ? galleryCategories
    : galleryCategories.filter(cat => cat.name === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-navy)] to-[#1a3557]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center max-w-[900px] mx-auto">
            <h1 className="mb-6 text-white tracking-tight">Smile Gallery</h1>
            <p className="text-[19px] text-white/90 leading-relaxed">
              Explore our portfolio of transformative dental treatments. Each smile tells a story of restored confidence, improved health, and exceptional care.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-[var(--color-navy)]/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-[var(--color-navy)] text-white shadow-[0_4px_20px_rgba(13,34,63,0.3)]'
                  : 'bg-[var(--color-navy)]/5 text-[var(--color-navy)] hover:bg-[var(--color-navy)]/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="space-y-20">
            {filteredGallery.map((category, categoryIndex) => (
              <div
                key={category.name}
                id={category.id}
                className="space-y-8 scroll-mt-24"
              >
                {/* Category Header */}
                <div className="text-center max-w-[700px] mx-auto">
                  <h2 className="mb-4 text-[var(--color-navy)] tracking-tight">{category.name}</h2>
                  <p className="text-[16px] text-[var(--color-navy)]/70 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.images.map((image, imageIndex) => (
                    <div
                      key={`${categoryIndex}-${imageIndex}`}
                      onClick={() => setSelectedImage(image)}
                      className="group relative rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(13,34,63,0.1)] hover:shadow-[0_12px_40px_rgba(13,34,63,0.2)] transition-all duration-500 cursor-pointer"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <ImageWithFallback
                          src={image}
                          alt={`${category.name} - ${imageIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                            <svg
                              className="w-8 h-8 text-[var(--color-navy)]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-white/70 transition-colors"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="max-w-6xl max-h-[90vh] relative">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-[12px]"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-[var(--color-navy)]">
        <div className="max-w-[1000px] mx-auto px-8 text-center">
          <h2 className="mb-6 text-white tracking-tight">Ready for Your Smile Transformation?</h2>
          <p className="text-[17px] text-white/80 leading-relaxed mb-8 max-w-[700px] mx-auto">
            Join our gallery of happy patients. Book your consultation today and let us help you achieve the smile you've always dreamed of.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://maimiclinic-bookingdubai.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-[var(--color-navy)] text-sm uppercase tracking-widest hover:bg-white/90 transition-colors rounded-full font-medium shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
            >
              Book Appointment
            </a>
            <a
              href="tel:+971548883372"
              className="inline-block px-10 py-4 border-2 border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-[var(--color-navy)] transition-colors rounded-full font-medium"
            >
              Call Us: +971 54 888 3372
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}