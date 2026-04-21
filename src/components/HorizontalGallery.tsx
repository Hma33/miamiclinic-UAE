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
    'https://lh3.googleusercontent.com/d/10wPeaCvNjHdncKnqr14RN1x_UmGA--40',
    'https://lh3.googleusercontent.com/d/1dCA_HaiSDi02_yNPCRJTtgtaWKoqUrQK',
    'https://lh3.googleusercontent.com/d/13xh4mdxwYNAIVKRmiYgGtxuPoiK0QREd',
];

export function HorizontalGallery() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl text-[var(--color-navy)] tracking-tight font-medium mb-8">
                    Our Happy Patients
                </h2>

                {/* Horizontal Scroll Container */}
                <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    <div className="flex gap-4 md:gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[300px] h-[250px] rounded-[10px] overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_12px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-105"
                            >
                                <ImageWithFallback
                                    src={image}
                                    alt={`Happy patient ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional: View All Button */}
                <div className="text-center mt-8">
                    <a
                        href="/gallery"
                        className="inline-block px-8 py-3 bg-[var(--color-navy)] text-white text-sm uppercase tracking-widest hover:bg-[var(--color-navy)]/90 transition-colors rounded-full font-medium shadow-[0_4px_20px_rgba(13,34,63,0.2)]"
                    >
                        View Full Gallery
                    </a>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
        </section>
    );
}
