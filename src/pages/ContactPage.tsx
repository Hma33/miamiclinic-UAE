import { Phone, Smartphone, Mail, MapPin, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 border-b border-black">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Get in touch with Miami Dubai Clinic. We're here to answer your questions and schedule your appointment.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 border-b border-black">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-8">Get In Touch</h2>

                <div className="space-y-6">
                  {/* Landline */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Landline Phone</h3>
                      <a
                        href="tel:+971548883372"
                        className="text-lg hover:opacity-70 transition-opacity"
                      >
                        +971 54 888 3372
                      </a>
                    </div>
                  </div>

                  {/* Mobile/Hotline */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Mobile / Hotline</h3>
                      <a
                        href="tel:+971548883372"
                        className="text-lg hover:opacity-70 transition-opacity"
                      >
                        +971 54 888 3372
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Address</h3>
                      <a
                        href="mailto:Info.miamiclinic@gmail.com"
                        className="text-lg hover:opacity-70 transition-opacity break-all"
                      >
                        Info.miamiclinic@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Our Location</h3>
                      <p className="text-lg leading-relaxed mb-3">
                        Muraqqabat road, REQA bldg. 1st floor, office no. 104.<br />
                        Dubai, UAE.
                      </p>
                      <p className="text-sm opacity-70 mb-3">
                        The same building of Rigga Restaurant.<br />
                        Al Rigga Metro is the nearest metro station (exit 2)
                      </p>
                      <a
                        href="https://maps.app.goo.gl/ehSWvb1f4zYEanbs8?g_st=com.google.maps.preview.copy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 border border-black bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl mb-2">Operating Hours</h2>
                  <p className="text-lg opacity-70">We're here to serve you</p>
                </div>
              </div>

              <div className="border border-black">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="px-6 py-4 font-semibold">Saturday</td>
                      <td className="px-6 py-4 text-right">09:00 AM - 11:00 PM</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="px-6 py-4 font-semibold">Sunday</td>
                      <td className="px-6 py-4 text-right">09:00 AM - 11:00 PM</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="px-6 py-4 font-semibold">Monday</td>
                      <td className="px-6 py-4 text-right">09:00 AM - 11:00 PM</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="px-6 py-4 font-semibold">Tuesday</td>
                      <td className="px-6 py-4 text-right">09:00 AM - 11:00 PM</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="px-6 py-4 font-semibold">Wednesday</td>
                      <td className="px-6 py-4 text-right">09:00 AM - 11:00 PM</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="px-6 py-4 font-semibold">Thursday</td>
                      <td className="px-6 py-4 text-right">09:00 AM - 11:00 PM</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Friday</td>
                      <td className="px-6 py-4 text-right">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-[var(--color-navy)] text-white">
                <h3 className="text-xl mb-3">Book Your Appointment</h3>
                <p className="mb-4 opacity-90">
                  Ready to transform your smile? Schedule your visit today.
                </p>
                <a
                  href="https://wa.me/message/BRARC5HBPTZCC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 border border-white bg-white text-[var(--color-navy)] text-sm uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl mb-8">Find Us</h2>
          <div className="border border-black overflow-hidden" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6177885899773!2d55.321899!3d25.265879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1a0000000%3A0x0!2zMjXCsDE1JzU3LjIiTiA1NcKwMTknMTguOCJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Miami Dubai Clinic Location"
            />
          </div>
          <p className="mt-4 text-sm opacity-70 text-center">
            Conveniently located near Al Rigga Metro Station • Easy parking available
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}