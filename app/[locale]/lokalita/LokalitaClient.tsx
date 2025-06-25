'use client'

import LokalitaHero from '../../components/LokalitaHero';
import ContactSection from '@/app/components/ContactSection';
import LokalitaMap from '@/app/components/lokalita/LokalitaMap';
import LokalitaInfo from '@/app/components/lokalita/LokalitaInfo';
import LokalitaActivities from '@/app/components/lokalita/LokalitaActivities';
import Footer from '@/app/components/Footer';

export default function LokalitaClient() {
  return (
    <>
      <LokalitaHero />
      <LokalitaMap />
      <LokalitaInfo />
      <LokalitaActivities />
      <ContactSection />
      <Footer />
    </>
  );
} 