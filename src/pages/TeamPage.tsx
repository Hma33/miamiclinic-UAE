import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { teamMembers } from '../data/teamMembers';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-navy)] to-[#1a3557]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center max-w-[900px] mx-auto">
            <h1 className="mb-6 text-white tracking-tight">Meet Our Team</h1>
            <p className="text-[19px] text-white/90 leading-relaxed">
              Our team of experienced dental professionals is dedicated to providing exceptional care with expertise, compassion, and precision. Each member brings unique skills and a shared commitment to your oral health and beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(13,34,63,0.08)] hover:shadow-[0_8px_30px_rgba(13,34,63,0.15)] transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[var(--color-navy)]/10 to-[var(--color-navy)]/5">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full absolute inset-0 ${member.imageFit} ${member.imagePosition}`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Experience Badge */}
                  <div className="inline-block px-4 py-1.5 bg-[var(--color-navy)]/5 rounded-full mb-4">
                    <p className="text-[11px] font-medium text-[var(--color-navy)] uppercase tracking-widest">
                      {member.experience}
                    </p>
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-[22px] font-medium text-[var(--color-navy)] mb-2 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[14px] text-[var(--color-navy)]/80 mb-1">
                    {member.role}
                  </p>
                  <p className="text-[13px] text-[var(--color-navy)]/60 mb-4">
                    {member.credentials}
                  </p>

                  {/* Short Description */}
                  <p className="text-[14px] text-[var(--color-navy)]/70 leading-relaxed mb-6">
                    {member.shortDescription}
                  </p>

                  {/* View Profile Button */}
                  <Link
                    to={`/team/${member.id}`}
                    className="inline-flex items-center gap-2 text-[var(--color-navy)] text-[14px] font-medium hover:gap-3 transition-all duration-300 group"
                  >
                    View Full Profile
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--color-navy)]">
        <div className="max-w-[1000px] mx-auto px-8 text-center">
          <h2 className="mb-6 text-white tracking-tight">Schedule Your Consultation</h2>
          <p className="text-[17px] text-white/80 leading-relaxed mb-8 max-w-[700px] mx-auto">
            Experience personalized dental care from our expert team. Book your appointment today and take the first step towards a healthier, more confident smile.
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