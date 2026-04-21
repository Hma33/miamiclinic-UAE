export function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-[900px] mx-auto mb-24">
          <h2 className="mb-6 text-[var(--color-navy)] tracking-tight">About Miami Dubai Clinic</h2>
          <p className="text-[19px] text-[var(--color-navy)]/70 leading-relaxed">
            A dental practice built on family values, clinical excellence, and a vision for care that truly matters.
          </p>
        </div>

        {/* Founding Story */}
        <div className="max-w-[1100px] mx-auto mb-24">
          <div className="bg-[#f8f9fa] rounded-[24px] p-12 md:p-16">
            <div className="max-w-[850px] mx-auto">
              <h3 className="text-[28px] font-medium text-[var(--color-navy)] mb-8 text-center">Our Story</h3>
              <p className="text-[17px] text-[var(--color-navy)]/75 leading-relaxed mb-6">
                Inspired by a lifelong dream and a shared vision with her father, Dr. Jawaher Nabeel Abuhamra founded Miami Dubai Clinic. From a young age, she envisioned creating a dental space that blends clinical excellence with genuine care, comfort, and trust.
              </p>
              <p className="text-[17px] text-[var(--color-navy)]/75 leading-relaxed">
                What began as a childhood aspiration grew into a purpose-driven clinic, built on family values and a passion for dentistry.
              </p>
            </div>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="max-w-[1100px] mx-auto mb-24">
          <h3 className="text-[28px] font-medium text-[var(--color-navy)] mb-10 text-center">Our Philosophy</h3>
          <div className="space-y-8">
            <p className="text-[17px] text-[var(--color-navy)]/75 leading-relaxed text-center max-w-[900px] mx-auto">
              Miami Dubai Clinic is a dental practice built on the belief that excellent dentistry begins with experience, integrity, and a long-term vision for patient health.
            </p>
            <p className="text-[17px] text-[var(--color-navy)]/75 leading-relaxed text-center max-w-[900px] mx-auto">
              Led by a dedicated team of highly skilled dentists, our clinic blends traditional dental expertise with modern techniques and up-to-date technology to provide care that is both refined and reliable. We take the time to understand each patient's needs, explain treatment options clearly, and recommend solutions that prioritize oral health, function, and longevity.
            </p>
            <p className="text-[17px] text-[var(--color-navy)]/75 leading-relaxed text-center max-w-[900px] mx-auto">
              Our dentists are known for their clinical precision, attention to detail, and conservative approach — always choosing what is best for your oral health. Whether you are visiting us for preventive care, restorative treatment, or smile enhancement, you can expect a thoughtful, personalized experience at every stage.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[28px] font-medium text-[var(--color-navy)] mb-12 text-center">What Defines Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[18px] p-8 shadow-[0_4px_20px_rgba(13,34,63,0.06)] hover:shadow-[0_8px_30px_rgba(13,34,63,0.12)] transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-[20px] font-medium text-[var(--color-navy)] mb-4 text-center">Clinical Excellence</h4>
              <p className="text-[15px] text-[var(--color-navy)]/70 leading-relaxed text-center">
                Experience, precision, and a conservative approach. We choose solutions designed for long-term oral health, not quick fixes.
              </p>
            </div>

            <div className="bg-white rounded-[18px] p-8 shadow-[0_4px_20px_rgba(13,34,63,0.06)] hover:shadow-[0_8px_30px_rgba(13,34,63,0.12)] transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-[20px] font-medium text-[var(--color-navy)] mb-4 text-center">Transparency & Trust</h4>
              <p className="text-[15px] text-[var(--color-navy)]/70 leading-relaxed text-center">
                Clear communication, honest recommendations, and ethical guidance. We believe in informed decisions and building lasting relationships.
              </p>
            </div>

            <div className="bg-white rounded-[18px] p-8 shadow-[0_4px_20px_rgba(13,34,63,0.06)] hover:shadow-[0_8px_30px_rgba(13,34,63,0.12)] transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-[20px] font-medium text-[var(--color-navy)] mb-4 text-center">Patient Comfort</h4>
              <p className="text-[15px] text-[var(--color-navy)]/70 leading-relaxed text-center">
                A welcoming environment where genuine care meets modern comfort. Every visit is designed to be calm, respectful, and personalized.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-[900px] mx-auto mt-24 text-center">
          <div className="border-t border-[var(--color-navy)]/10 pt-12">
            <p className="text-[19px] text-[var(--color-navy)]/80 leading-relaxed italic">
              At Miami Dubai Clinic, patient comfort, transparency, and long-lasting results are at the heart of everything we do. We are proud to offer dentistry that is modern, ethical, and focused on smiles that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}