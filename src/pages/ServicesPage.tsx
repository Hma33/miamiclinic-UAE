import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import {
  ConsultationIcon,
  ScalingIcon,
  FillingsIcon,
  RootCanalIcon,
  WhiteningIcon,
  ExtractionsIcon,
  XrayIcon,
  CrownIcon,
  VeneersIcon,
  KidsIcon,
  DenturesIcon,
  OthersIcon,
} from '../components/ServiceIcons';

const servicesData = [
  {
    name: 'Consult with Professionals',
    icon: ConsultationIcon,
    id: 'consultation',
    description: 'Our dental clinic provides comprehensive dental consultations supported by advanced oral diagnostic protocols. Each consultation includes a detailed clinical examination, periodontal assessment, occlusal analysis, and radiographic evaluation when required. This enables accurate diagnosis, early detection of oral diseases, and development of personalized, evidence-based treatment plans tailored to functional, preventive, and aesthetic needs.'
  },
  {
    name: 'Scaling & Polishing',
    icon: ScalingIcon,
    id: 'scaling-polishing',
    description: 'A thorough cleaning treatment that removes accumulated plaque, tartar, and stains that daily brushing cannot eliminate. This procedure helps protect the gums from inflammation and disease, promotes fresher breath, and leaves teeth feeling noticeably cleaner and smoother. Regular scaling and polishing are fundamental for maintaining long-term oral hygiene.'
  },
  {
    name: 'Dental Fillings & Restorative Dentistry',
    icon: FillingsIcon,
    id: 'fillings',
    description: 'Dental fillings are performed to treat cavities and minor tooth fractures using advanced restorative materials. Our restorative dentistry approach focuses on conservative tooth preparation, structural reinforcement, and long-term protection against recurrent decay while maintaining natural tooth aesthetics.'
  },
  {
    name: 'Root Canal Treatment (RCT)',
    icon: RootCanalIcon,
    id: 'root-canal',
    description: 'Root canal treatment is an advanced endodontic procedure used to treat infected or inflamed dental pulp. The treatment involves removal of infected tissue, thorough disinfection of the root canal system, and sealing of the tooth to prevent reinfection. This procedure relieves pain, preserves natural teeth, and restores chewing function.'
  },
  {
    name: 'Teeth Whitening & Cosmetic Dentistry',
    icon: WhiteningIcon,
    id: 'teeth-whitening',
    description: 'Our professional teeth whitening services use clinically approved bleaching systems to safely remove intrinsic and extrinsic tooth discoloration. Treatment is performed under professional supervision to protect enamel and gum tissues while delivering noticeable and long-lasting cosmetic results.'
  },
  {
    name: 'Tooth Extraction & Wisdom Tooth Removal',
    icon: ExtractionsIcon,
    id: 'extractions',
    description: 'Tooth extractions are recommended for severely damaged, infected, or impacted teeth. Wisdom tooth removal is commonly performed to prevent pain, infection, and dental misalignment. All extractions are planned using digital dental imaging to ensure safety, precision, and optimal post-operative recovery.'
  },
  {
    name: 'Digital Panoramic and Periapical X-Ray',
    icon: XrayIcon,
    id: 'xray',
    description: 'We utilize advanced digital imaging technology to capture detailed views of the teeth, roots, jawbone, sinuses, and surrounding structures. Panoramic and periapical X-rays offer critical information for accurate diagnosis, treatment planning, and monitoring of oral conditions, ensuring that patients receive the most appropriate and effective care.'
  },
  {
    name: 'Crown and Bridge',
    icon: CrownIcon,
    id: 'crown-bridge',
    description: 'Dental crowns and bridges are fixed restorations used to repair damaged teeth and replace missing teeth. Crowns restore strength and function, while bridges restore dental arch continuity. Our prosthodontic solutions are custom-designed to ensure natural aesthetics, bite stability, and long-term durability.'
  },
  {
    name: 'Veneers & Smile Design',
    icon: VeneersIcon,
    id: 'veneers',
    description: 'Dental veneers are thin, custom-made restorations bonded to the front surface of teeth to enhance color, shape, and alignment. We offer Veneers that provide a minimally invasive cosmetic dentistry solution for patients seeking long-lasting smile enhancement with natural-looking results.'
  },
  {
    name: 'Kids\' Treatments & Preventive Dental Care',
    icon: KidsIcon,
    id: 'kids-treatment',
    description: 'Our pediatric dental services focus on preventive dentistry, early diagnosis, and gentle treatment for children. We provide cavity prevention, oral hygiene education, and developmental monitoring in a child-friendly environment to support lifelong oral health.'
  },
  {
    name: 'Partial and Full Denture (Removable Prostodontics)',
    icon: DenturesIcon,
    id: 'dentures',
    description: 'Partial and full dentures are removable dental appliances designed to replace missing teeth and restore chewing ability, speech, and facial aesthetics. We provide modern denture fabrication techniques that ensure improved comfort, stability, and a natural appearance.'
  },
  {
    name: 'Advanced & Specialized Dental Treatments',
    icon: OthersIcon,
    id: 'others',
    description: 'Our dental clinic offers advanced and specialized dental treatments using modern dental technology and evidence-based clinical protocols. Through a multidisciplinary approach and precision-driven care, we deliver comprehensive dental solutions aligned with international healthcare standards.'
  }
];

export function ServicesPage() {
  useEffect(() => {
    // Scroll to the service if hash is present in URL
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-navy)] to-[#1a3557]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center max-w-[900px] mx-auto">
            <h1 className="mb-6 text-white tracking-tight text-3xl md:text-5xl">Our Dental Services</h1>
            <p className="text-[19px] text-white/90 leading-relaxed">
              Comprehensive dental care combining clinical excellence, modern technology, and a patient-centered approach. From routine check-ups to advanced treatments, we're committed to your oral health and beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, & Values Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[60%] bg-[#f8f9fa] -skew-y-2 transform origin-top-left -z-10"></div>

        <div className="max-w-[1200px] mx-auto px-8">

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <div className="bg-[var(--color-navy)] rounded-[32px] p-12 text-white relative overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-500 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-medium mb-6">Our Vision</h2>
                <p className="text-[19px] leading-relaxed text-white/90 font-light">
                  To be the leading dental group through total health for patients, the people who care for them, and the communities we serve.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-[32px] p-12 border border-gray-100 shadow-[0_8px_30px_rgba(13,34,63,0.06)] relative overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-500">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[var(--color-navy)]/5 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-[var(--color-navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-medium text-[var(--color-navy)] mb-6">Our Mission</h2>
                <p className="text-[19px] leading-relaxed text-[var(--color-navy)]/80 font-light">
                  To be the finest, affordable, advanced treatment options & quality care with compassionate & personal touch in a friendly ambiance to exceed the expectations of all our patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  id={service.id}
                  className="bg-white rounded-[24px] p-10 shadow-[0_4px_20px_rgba(13,34,63,0.08)] hover:shadow-[0_12px_40px_rgba(13,34,63,0.15)] transition-all duration-500 group scroll-mt-24"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      {/* Override styles for Services Page */}
                      <Icon className="w-[70px] h-[70px] bg-[#12223d]" svgClassName="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[22px] font-medium text-[var(--color-navy)] mb-4 tracking-tight">
                        {service.name}
                      </h3>
                      <p className="text-[15px] text-[var(--color-navy)]/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section >

      {/* Call to Action */}
      < section className="py-20 bg-[var(--color-navy)]" >
        <div className="max-w-[1000px] mx-auto px-8 text-center">
          <h2 className="mb-6 text-white tracking-tight">Ready to Transform Your Smile?</h2>
          <p className="text-[17px] text-white/80 leading-relaxed mb-8 max-w-[700px] mx-auto">
            Our experienced team is here to provide personalized care tailored to your needs. Book your consultation today and take the first step towards optimal oral health.
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
      </section >

      <Footer />
    </div >
  );
}