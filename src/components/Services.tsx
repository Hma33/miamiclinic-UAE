import { Link } from 'react-router-dom';
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
} from './ServiceIcons';

const services = [
  { name: 'Consult with Professionals', icon: ConsultationIcon, id: 'consultation' },
  { name: 'Scaling & Polishing', icon: ScalingIcon, id: 'scaling-polishing' },
  { name: 'Fillings', icon: FillingsIcon, id: 'fillings' },
  { name: 'Root Canal Treatment (RCT)', icon: RootCanalIcon, id: 'root-canal' },
  { name: 'Teeth Whitening', icon: WhiteningIcon, id: 'teeth-whitening' },
  { name: 'Wisdom Teeth Extractions', icon: ExtractionsIcon, id: 'extractions' },
  { name: 'Panoramic & Periapical X-ray', icon: XrayIcon, id: 'xray' },
  { name: 'Crown & Bridge', icon: CrownIcon, id: 'crown-bridge' },
  { name: 'Veneers', icon: VeneersIcon, id: 'veneers' },
  { name: 'Kids Treatment', icon: KidsIcon, id: 'kids-treatment' },
  { name: 'Partial & Full Denture', icon: DenturesIcon, id: 'dentures' },
  { name: 'Others', icon: OthersIcon, id: 'others' },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <h2 className="mb-5 text-[var(--color-navy)] tracking-tight">Our Services</h2>
          <p className="text-[17px] text-[var(--color-navy)]/60 leading-relaxed">Modern, ethical, and focused on smiles that stand the test of time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.name}
                to={`/services#${service.id}`}
                className="bg-white rounded-[18px] p-10 text-center shadow-[0_4px_20px_rgba(13,34,63,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(13,34,63,0.15)] hover:-translate-y-2 group block"
              >
                <Icon className="w-[85px] h-[85px] mx-auto mb-6" />
                <h3 className="text-[16px] font-medium font-[family-name:var(--font-body)] text-[var(--color-navy)] leading-snug tracking-wide">
                  {service.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}