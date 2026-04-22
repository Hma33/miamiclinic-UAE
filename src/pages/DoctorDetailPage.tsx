import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { teamMembers } from '../data/teamMembers';
import { ArrowLeft } from 'lucide-react';

export function DoctorDetailPage() {
    const { doctorId } = useParams<{ doctorId: string }>();
    const doctor = teamMembers.find(member => member.id === doctorId);

    if (!doctor) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="max-w-[1200px] mx-auto px-8 py-20 text-center">
                    <h1 className="text-3xl text-[var(--color-navy)] mb-4">Doctor Not Found</h1>
                    <Link
                        to="/team"
                        className="inline-flex items-center gap-2 text-[var(--color-navy)] hover:opacity-70 transition-opacity"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Team
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1400px] mx-auto px-8 py-4">
                    <Link
                        to="/team"
                        className="inline-flex items-center gap-2 text-[var(--color-navy)]/70 hover:text-[var(--color-navy)] transition-colors text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Team
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-[var(--color-navy)] to-[#1a3557]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="text-center max-w-[900px] mx-auto">
                        <h1 className="mb-6 text-white tracking-tight">{doctor.name}</h1>
                        <p className="text-[19px] text-white/90 leading-relaxed">
                            {doctor.shortDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Doctor Profile */}
            <section className="py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                        {/* Image */}
                        <div className="w-full lg:w-[45%] flex-shrink-0">
                            <div className="relative rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(13,34,63,0.15)] bg-gradient-to-br from-[var(--color-navy)]/10 to-[var(--color-navy)]/5">
                                <div className="aspect-[4/5] relative">
                                    {doctor.image && (
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className={`w-full h-full absolute inset-0 ${doctor.imageFit} ${doctor.imagePosition}`}
                                        />
                                    )}
                                </div>
                                {/* Overlay Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-[var(--color-navy)]">
                                    <h3 className="text-[28px] font-medium mb-2 tracking-tight">{doctor.name}</h3>
                                    <p className="text-[16px] text-[var(--color-navy)]/80 mb-1">{doctor.role}</p>
                                    <p className="text-[14px] text-[var(--color-navy)]/60">{doctor.credentials}</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-[55%]">
                            <div className="lg:pt-8">
                                {/* Experience Badge */}
                                <div className="inline-block px-5 py-2 bg-[var(--color-navy)]/5 rounded-full mb-6">
                                    <p className="text-[13px] font-medium text-[var(--color-navy)] uppercase tracking-widest">
                                        {doctor.experience}
                                    </p>
                                </div>

                                {/* Bio */}
                                <div className="space-y-5 mb-8">
                                    {doctor.bio.map((paragraph, idx) => (
                                        <p
                                            key={idx}
                                            className="text-[15px] text-[var(--color-navy)]/70 leading-relaxed"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Specialties */}
                                <div className="bg-white rounded-[18px] p-8 shadow-[0_4px_20px_rgba(13,34,63,0.08)]">
                                    <h4 className="text-[18px] font-medium text-[var(--color-navy)] mb-5 tracking-tight">
                                        Areas of Expertise
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {doctor.specialties.map((specialty, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-2"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-[var(--color-navy)] flex-shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2.5}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-[14px] text-[var(--color-navy)]/70">
                                                    {specialty}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
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
