'use client'

import OptimizedImage from './OptimizedImage'
import { useI18n } from '../i18n/client'
import Image from 'next/image'

export default function Hero() {
  const t = useI18n();

  const scrollToApartments = () => {
    const apartmentsSection = document.getElementById('apartmany');
    if (apartmentsSection) {
      apartmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white">
      {/* Pozadí */}
      <div className="absolute inset-0 -z-10">
        <OptimizedImage
          src="/img/Photo_HP.png"
          alt="Apartmány na Rabu"
          width={1920}
          height={1080}
          className="object-cover w-full h-full min-h-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2A40]/90 to-transparent" />
      </div>


      {/* Obsah */}
      <div className="flex flex-col items-center pt-28">
        <img src="/img/Rab_logo_white.svg" alt="Logo Apartmány na Rabu" className="w-[450px] mt-12" />
        <p className="mt-20 text-[60px] lato-light text-center max-w-3xl leading-[1.1]">
          {t('home.title')}<br />{t('home.subtitle')}
        </p>
        <button 
          onClick={scrollToApartments}
          className="mt-20 px-10 py-4 border border-white rounded-full text-[20px] lato-bold w-fit">
          {t('common.buttons.apartments_offer')}
        </button>
      </div>
    </section>
  )
} 