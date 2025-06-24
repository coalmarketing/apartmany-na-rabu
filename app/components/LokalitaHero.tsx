'use client';

import OptimizedImage from './OptimizedImage';
import { useI18n } from '../i18n/client';

export default function LokalitaHero() {
  const t = useI18n();

  return (
    <section className="relative h-[60vh] flex flex-col justify-center items-center text-white">
      {/* Pozadí */}
      <div className="absolute inset-0 -z-10">
        <OptimizedImage
          src="/img/Photo_HP copy.png"
          alt="Ostrov Rab"
          width={1920}
          height={1080}
          className="object-cover w-full h-[60vh]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2A40]/90 to-transparent" />
      </div>

      {/* Obsah */}
      <div className="flex flex-col items-center justify-center flex-1 mt-32">
        <h1 className="md:text-[64px] font-light text-center leading-tight drop-shadow-lg">
          {t('home.hero_title')}<br/>
          {t('home.hero_subtitle')}
        </h1>
      </div>
    </section>
  );
} 