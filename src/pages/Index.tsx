import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bremen | Gentlemen’s barbershop</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Gentlemen’s barbershop in Bremen für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bremen"
        />
        <link rel="canonical" href="https://gentlemans-barbershop-bremen.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Gentlemen’s barbershop | Premium Barbershop Bremen" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bremen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentlemans-barbershop-bremen.de" />
        <meta property="og:image" content="https://gentlemans-barbershop-bremen.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gentlemen’s barbershop | Premium Barbershop Bremen" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://gentlemans-barbershop-bremen.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Gentlemen’s barbershop",
            "image": "https://gentlemans-barbershop-bremen.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Osterholzer Landstraße",
              "addressLocality": "Bremen",
              "postalCode": "28327",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "53.0793",
              "longitude": "8.8017"
            },
            "url": "https://gentlemans-barbershop-bremen.de",
            "telephone": "+49 421 1234567",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/gentlemansbarbershopbremen",
              "https://www.instagram.com/gentlemansbarbershopbremen"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

