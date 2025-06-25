import ClientRoot from './ClientRoot';
import Hero from '../components/Hero';
import Apartments from '../components/Apartments';
import ContactSection from '../components/ContactSection';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: { params: Promise<{ locale: 'cs' | 'en' }> }) {
  const { locale } = await params;
  
  return (
    <ClientRoot locale={locale}>
      <Hero />
      <Slider />
      <Apartments />
      <ContactSection />
      <Footer />
    </ClientRoot>
  );
} 