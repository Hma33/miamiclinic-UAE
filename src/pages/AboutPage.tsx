import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppFab } from '../components/WhatsAppFab';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Split Design */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-32 items-center">
            {/* Left side - Content */}
            <div>
              <div className="inline-block px-4 py-2 border border-[var(--color-navy)]/20 rounded-full mb-8">
                <span className="text-sm uppercase tracking-widest text-[var(--color-navy)]/60">Our Story</span>
              </div>
              <h1 className="mb-8 text-[var(--color-navy)] leading-[1.1]">Excellence<br />Built on Vision</h1>
              <p className="text-[19px] text-[var(--color-navy)]/70 leading-relaxed">
                A dental practice built on family values, clinical excellence, and a vision for care that truly matters.
              </p>
            </div>

            {/* Right side - Large Quote */}
            <div className="relative">
              <div className="bg-[var(--color-navy)] rounded-[32px] p-12 lg:p-16 text-white">
                <div className="text-[120px] leading-none opacity-20 mb-4">"</div>
                <p className="text-[21px] leading-relaxed -mt-16 relative z-10">
                  From a childhood dream to a purpose-driven clinic — blending clinical excellence with genuine care, comfort, and trust.
                </p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm uppercase tracking-widest text-white/60">Dr. Jawaher Nabeel Abuhamra</p>
                  <p className="text-sm text-white/80 mt-1">Founder & Clinical Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Offset Layout */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Decorative Element */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="space-y-3">
                <div className="h-[2px] w-20 bg-[var(--color-navy)]"></div>
                <div className="h-[2px] w-16 bg-[var(--color-navy)]/60"></div>
                <div className="h-[2px] w-12 bg-[var(--color-navy)]/30"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-10">
              <div className="max-w-[900px]">
                <h2 className="mb-12 text-[var(--color-navy)]">The Beginning</h2>
                <div className="space-y-8 text-[18px] text-[var(--color-navy)]/75 leading-[1.8]">
                  <p className="text-[20px] text-[var(--color-navy)]">
                    Inspired by a lifelong dream and a shared vision with her father, Dr. Jawaher Nabeel Abuhamra founded Miami Dubai Clinic.
                  </p>
                  <p>
                    From a young age, she envisioned creating a dental space that blends clinical excellence with genuine care, comfort, and trust. What began as a childhood aspiration grew into a purpose-driven clinic, built on family values and a passion for dentistry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Diagonal Split */}
      <section className="relative py-32 bg-[#f8f9fa]">
        {/* Diagonal Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[var(--color-navy)]/5 to-transparent transform skew-x-[-8deg] origin-top-right"></div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="mb-6 text-[var(--color-navy)]">Our Philosophy</h2>
            <div className="w-16 h-1 bg-[var(--color-navy)] mx-auto"></div>
          </div>

          <div className="max-w-[1000px] mx-auto space-y-10 text-[17px] text-[var(--color-navy)]/75 leading-[1.8]">
            <p className="text-[19px] text-[var(--color-navy)] text-center">
              Miami Dubai Clinic is a dental practice built on the belief that excellent dentistry begins with experience, integrity, and a long-term vision for patient health.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
              <div className="bg-white rounded-[24px] p-10 shadow-[0_8px_30px_rgba(13,34,63,0.08)]">
                <p>
                  Led by a dedicated team of highly skilled dentists, our clinic blends traditional dental expertise with modern techniques and up-to-date technology to provide care that is both refined and reliable.
                </p>
              </div>
              <div className="bg-white rounded-[24px] p-10 shadow-[0_8px_30px_rgba(13,34,63,0.08)]">
                <p>
                  We take the time to understand each patient's needs, explain treatment options clearly, and recommend solutions that prioritize oral health, function, and longevity.
                </p>
              </div>
            </div>

            <p className="text-center pt-8">
              Our dentists are known for their clinical precision, attention to detail, and conservative approach — always choosing what is best for your oral health. Whether you are visiting us for preventive care, restorative treatment, or smile enhancement, you can expect a thoughtful, personalized experience at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values - Card Grid with Hover Effects */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="mb-6 text-[var(--color-navy)]">What Defines Us</h2>
            <p className="text-[17px] text-[var(--color-navy)]/60 max-w-[600px] mx-auto">
              Three pillars that guide every decision we make and every patient we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clinical Excellence */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[var(--color-navy)] rounded-[28px] opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-white border-2 border-[var(--color-navy)]/10 rounded-[28px] p-10 transition-all duration-500 group-hover:border-transparent group-hover:bg-transparent">
                <div className="mb-8">
                  <div className="w-16 h-16 border-2 border-[var(--color-navy)] group-hover:border-white rounded-full flex items-center justify-center transition-colors duration-500">
                    <span className="text-[24px] text-[var(--color-navy)] group-hover:text-white transition-colors duration-500">01</span>
                  </div>
                </div>
                <h3 className="text-[22px] font-medium text-[var(--color-navy)] group-hover:text-white mb-4 transition-colors duration-500">
                  Clinical Excellence
                </h3>
                <p className="text-[15px] text-[var(--color-navy)]/70 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                  Experience, precision, and a conservative approach. We choose solutions designed for long-term oral health, not quick fixes.
                </p>
              </div>
            </div>

            {/* Transparency & Trust */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[var(--color-navy)] rounded-[28px] opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-white border-2 border-[var(--color-navy)]/10 rounded-[28px] p-10 transition-all duration-500 group-hover:border-transparent group-hover:bg-transparent">
                <div className="mb-8">
                  <div className="w-16 h-16 border-2 border-[var(--color-navy)] group-hover:border-white rounded-full flex items-center justify-center transition-colors duration-500">
                    <span className="text-[24px] text-[var(--color-navy)] group-hover:text-white transition-colors duration-500">02</span>
                  </div>
                </div>
                <h3 className="text-[22px] font-medium text-[var(--color-navy)] group-hover:text-white mb-4 transition-colors duration-500">
                  Transparency & Trust
                </h3>
                <p className="text-[15px] text-[var(--color-navy)]/70 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                  Clear communication, honest recommendations, and ethical guidance. We believe in informed decisions and building lasting relationships.
                </p>
              </div>
            </div>

            {/* Patient Comfort */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[var(--color-navy)] rounded-[28px] opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              <div className="relative bg-white border-2 border-[var(--color-navy)]/10 rounded-[28px] p-10 transition-all duration-500 group-hover:border-transparent group-hover:bg-transparent">
                <div className="mb-8">
                  <div className="w-16 h-16 border-2 border-[var(--color-navy)] group-hover:border-white rounded-full flex items-center justify-center transition-colors duration-500">
                    <span className="text-[24px] text-[var(--color-navy)] group-hover:text-white transition-colors duration-500">03</span>
                  </div>
                </div>
                <h3 className="text-[22px] font-medium text-[var(--color-navy)] group-hover:text-white mb-4 transition-colors duration-500">
                  Patient Comfort
                </h3>
                <p className="text-[15px] text-[var(--color-navy)]/70 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                  A welcoming environment where genuine care meets modern comfort. Every visit is designed to be calm, respectful, and personalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement - Full Width Emphasis */}
      <section className="relative py-32 bg-[var(--color-navy)] text-white overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-[1000px] mx-auto px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="w-16 h-1 bg-white/40 mx-auto mb-8"></div>
            <h2 className="text-white mb-12">Our Commitment</h2>
          </div>
          <p className="text-[21px] leading-[1.8] text-white/95">
            At Miami Dubai Clinic, patient comfort, transparency, and long-lasting results are at the heart of everything we do. We are proud to offer dentistry that is modern, ethical, and focused on smiles that stand the test of time.
          </p>
          <div className="mt-16">
            <a
              href="https://wa.me/message/BRARC5HBPTZCC1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-white text-[var(--color-navy)] text-sm uppercase tracking-widest hover:bg-white/90 transition-all duration-300 rounded-full font-medium"
            >
              Book Your Visit
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}