import { MapPin, Train, Building2, Navigation } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <h2 className="mb-5 text-[var(--color-navy)] tracking-tight">Our Location</h2>
          <p className="text-[17px] text-[var(--color-navy)]/60 leading-relaxed">
            Visit us at our conveniently located clinic in the heart of Dubai.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          {/* Map */}
          <div className="relative rounded-[18px] overflow-hidden shadow-[0_4px_20px_rgba(13,34,63,0.06)] h-[600px] order-2 lg:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2891956843545!2d55.320827!3d25.2572992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ce4f4bbbbbb%3A0xaaaaaaaaaaaaaaaa!2sMiami%20General%20Dental%20Clinic!5e0!3m2!1sen!2sae!4v1647856789123!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Miami Dubai Clinic Location Map"
            />

            {/* Get Directions button overlay */}
            <a
              href="https://maps.app.goo.gl/ehSWvb1f4zYEanbs8?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-6 bg-[var(--color-navy)] text-white rounded-full px-6 py-3 shadow-[0_4px_16px_rgba(13,34,63,0.25)] hover:bg-[#1a3557] transition-all duration-300 flex items-center gap-2 group"
            >
              <Navigation className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-[14px] font-medium tracking-wide">Get Directions</span>
            </a>
          </div>

          {/* Address Details */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Main Address Card */}
            <div className="bg-[var(--color-navy)] text-white rounded-[18px] p-8 shadow-[0_4px_20px_rgba(13,34,63,0.15)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[20px] font-medium mb-3 tracking-tight">Our Clinic Address</h3>
                  <p className="text-[15px] text-white/90 leading-relaxed">
                    Muraqqabat Road, REQA Building<br />
                    1st Floor, Office No. 104<br />
                    Dubai, UAE
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/ehSWvb1f4zYEanbs8?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-white/80 hover:text-white transition-colors group"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* How to Find Us Cards */}
            <div className="bg-[#f8f9fa] rounded-[18px] p-6 shadow-[0_4px_20px_rgba(13,34,63,0.06)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-navy)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-[var(--color-navy)]" />
                </div>
                <div>
                  <h4 className="text-[16px] font-medium text-[var(--color-navy)] mb-2">Building Landmark</h4>
                  <p className="text-[14px] text-[var(--color-navy)]/70 leading-relaxed">
                    Same building as Rigga Restaurant
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] rounded-[18px] p-6 shadow-[0_4px_20px_rgba(13,34,63,0.06)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-navy)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Train className="w-5 h-5 text-[var(--color-navy)]" />
                </div>
                <div>
                  <h4 className="text-[16px] font-medium text-[var(--color-navy)] mb-2">Nearest Metro</h4>
                  <p className="text-[14px] text-[var(--color-navy)]/70 leading-relaxed">
                    Al Rigga Metro Station, Exit 2
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#f8f9fa] rounded-[18px] p-6 shadow-[0_4px_20px_rgba(13,34,63,0.06)]">
              <h4 className="text-[16px] font-medium text-[var(--color-navy)] mb-4">Opening Hours</h4>
              <div className="space-y-2 text-[14px]">
                <div className="flex justify-between">
                  <span className="text-[var(--color-navy)]/70">Mon, Thu, Fri, Sat, Sun</span>
                  <span className="text-[var(--color-navy)] font-medium">10:00 AM - 12:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-navy)]/70">Tuesday</span>
                  <span className="text-[var(--color-navy)] font-medium">12:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-navy)]/70">Wednesday</span>
                  <span className="text-[var(--color-navy)] font-medium">02:00 PM - 12:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Reach Us Section */}
        <div className="mt-16 bg-gradient-to-br from-[#f8f9fa] to-white rounded-[18px] p-10 shadow-[0_4px_20px_rgba(13,34,63,0.06)]">
          <h3 className="text-[24px] font-medium text-[var(--color-navy)] mb-8 text-center tracking-tight">
            How to Reach Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-[16px] font-medium text-[var(--color-navy)] mb-2">By Metro</h4>
              <p className="text-[14px] text-[var(--color-navy)]/70 leading-relaxed">
                Take the Red Line to Al Rigga Metro Station. Use Exit 2 and walk 3 minutes to REQA Building.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-[16px] font-medium text-[var(--color-navy)] mb-2">By Car</h4>
              <p className="text-[14px] text-[var(--color-navy)]/70 leading-relaxed">
                Navigate to Muraqqabat Road. Look for REQA Building, same as Rigga Restaurant. Parking available.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-[16px] font-medium text-[var(--color-navy)] mb-2">Landmark</h4>
              <p className="text-[14px] text-[var(--color-navy)]/70 leading-relaxed">
                Located in REQA Building, 1st Floor, Office 104. Same building as Rigga Restaurant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}