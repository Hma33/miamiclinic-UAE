import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { InfiniteCarousel } from '../components/InfiniteCarousel';
import { Info } from '../components/Info';

import { Location } from '../components/Location';
import { Reviews } from '../components/Reviews';
import { Footer } from '../components/Footer';
import { WhatsAppFab } from '../components/WhatsAppFab';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Team />
      <InfiniteCarousel />
      <Location />
      <Reviews />
      <Info />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
