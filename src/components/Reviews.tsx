import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Elthie Tolentino",
    rating: 5,
    date: "3 weeks ago",
    text: "Super legit dental clinic and big kudos to all the staff! Everyone was very accommodating and professional from start to finish. The doctor was excellent especially Dr. Sidra, who was very skilled, gentle, and thorough in explaining the procedure. I also want to commend the receptionist (Lorelie) who recommended this clinic to me. From the warm welcome to the quality of service, everything exceeded my expectations. Highly recommended for anyone looking for a reliable and trustworthy dental clinic.",
    avatar: "ET"
  },
  {
    name: "Mahmoud Badr",
    rating: 5,
    date: "a month ago",
    text: "I had an excellent experience with Dr. Mohamed Elsayed at Miami Dubai Clinic in Dubai. From the moment I arrived, the staff was welcoming and professional. Dr. Mohamed is incredibly knowledgeable, gentle, and patient—he took the time to explain every step of the treatment and made sure I felt comfortable throughout. The clinic is clean, modern, and equipped with advanced technology. My procedure was completely pain-free, and the results exceeded my expectations. It's rare to find a dentist who combines expertise, honesty, and compassion so well.",
    avatar: "M"
  },
  {
    name: "Maritess Triñanes",
    rating: 5,
    date: "a month ago",
    text: "To my dentist Dr. Sidrah Ahmed, I wanted to express how impressed I was with your skill and your team's compassion during my visit. Thank you for making a dental procedure so comfortable. God bless you all ❤️",
    avatar: "M"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-7"
            />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="text-[18px] font-medium text-[var(--color-navy)]">4.9</span>
          </div>
          <h2 className="mb-5 text-[var(--color-navy)] tracking-tight">What Our Patients Say</h2>
          <p className="text-[17px] text-[var(--color-navy)]/60 leading-relaxed">
            Don't just take our word for it - hear from our valued patients about their experiences at Miami Dubai Clinic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-[18px] p-8 shadow-[0_4px_20px_rgba(13,34,63,0.06)] hover:shadow-[0_8px_30px_rgba(13,34,63,0.12)] transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[var(--color-navy)]/5 group-hover:text-[var(--color-navy)]/10 transition-colors" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-navy)] to-[#1a3557] rounded-full flex items-center justify-center text-white font-medium flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-[16px] font-medium text-[var(--color-navy)]">{review.name}</h4>
                  <p className="text-[13px] text-[var(--color-navy)]/50">{review.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>

              <p className="text-[15px] text-[var(--color-navy)]/70 leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Miami+General+Dental+Clinic/@25.2636757,55.3230241,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5d1e0d3058ad:0x3a8d8b12b7f74d3b!8m2!3d25.2636757!4d55.325599!16s%2Fg%2F11wjbrtggl?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-navy)] text-white rounded-full px-8 py-4 shadow-[0_4px_20px_rgba(13,34,63,0.15)] hover:shadow-[0_6px_30px_rgba(13,34,63,0.25)] hover:bg-[#1a3557] transition-all duration-300 group"
          >
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
              alt="Google"
              className="h-5"
            />
            <span className="text-[15px] font-medium tracking-wide">Read All Reviews on Google</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
              ))}
            </div>
          </a>

          <p className="text-[14px] text-[var(--color-navy)]/50 mt-6">
            Based on 129 verified Google reviews
          </p>
        </div>
      </div>
    </section>
  );
}