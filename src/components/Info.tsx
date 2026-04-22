import { Phone } from 'lucide-react';

export function Info() {
  return (
    <section id="visit-us">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visit Us */}
          <div className="p-16 border-b border-black md:border-r md:border-b-0">
            <h2 className="mb-4">Visit Us</h2>

            <p>
              <strong>Address:</strong><br />
              Muraqqabat road, REQA bldg. 1st floor,<br />
              office no. 104. Dubai, UAE.<br />
              The same building of Rigga Restaurant.<br />
              Al Rigga Metro is the nearest metro station exit 2
            </p>
            <p className="mt-4">
              <a
                href="https://maps.app.goo.gl/ehSWvb1f4zYEanbs8?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:no-underline"
              >
                View on Google Maps →
              </a>
            </p>

            <br />
            <p>
              <strong className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact:
              </strong><br />
              Landline: +971 54 888 3372<br />
              Mobile / Hotline: +971 54 888 3372<br />
              WhatsApp: +971 54 888 3372<br />
              Email: miamigeneraldentalclinic@gmail.com
            </p>
          </div>

          {/* Opening Hours */}
          <div className="p-16 bg-[#f9f9f9] border-b border-black">
            <h2 className="mb-4">Opening Hours</h2>
            <table className="w-full border-collapse mt-5">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3">Mon, Thu, Fri, Sat, Sun</td>
                  <td className="py-3 text-right">10:00 AM - 12:00 AM</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3">Tuesday</td>
                  <td className="py-3 text-right">12:00 PM - 10:00 PM</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3">Wednesday</td>
                  <td className="py-3 text-right">02:00 PM - 12:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}