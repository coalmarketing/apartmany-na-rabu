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
    <section className="relative min-h-screen flex flex-col justify-between items-center text-white">
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

      {/* Logo nahoře - pouze na mobilu */}
      <div className="flex justify-center w-full px-4 pt-36 md:hidden">
        <Image 
          src="/img/Rab_logo_white.svg" 
          alt="Logo Apartmány na Rabu" 
          width={300} 
          height={70}
          className="w-[22rem] h-auto"
        />
      </div>

      {/* Obsah dole */}
      <div className="flex flex-col items-center w-full px-4 pb-20 md:pb-28 md:mt-auto md:gap-12">
        {/* Logo na desktopu - nahoře v obsahu */}
        <div className="hidden md:flex justify-center w-full mb-8">
          <Image 
            src="/img/Rab_logo_white.svg" 
            alt="Logo Apartmány na Rabu" 
            width={300} 
            height={70}
            className="w-[450px] h-auto"
          />
        </div>
        
        <p className="text-[32px] md:text-[60px] lato-light text-center max-w-full md:max-w-3xl leading-[1.1]">
          {/* Desktop: jeden řádek */}
          <span className="hidden md:inline">{t('home.title_desktop')}</span>
          {/* Mobil: tři řádky */}
          <span className="md:hidden">
            {t('home.title_mobile1')}<br />
            {t('home.title_mobile2')}<br />
            {t('home.title_mobile3')}
          </span>
        </p>
        <button 
          onClick={scrollToApartments}
          className="mt-10 md:mt-20 px-6 md:px-10 py-3 md:py-4 border border-white rounded-full text-[18px] md:text-[20px] lato-bold w-full max-w-xs md:w-fit md:max-w-none"
        >
          <span className="md:hidden">Nabídka</span>
          <span className="hidden md:inline">{t('common.buttons.apartments_offer')}</span>
        </button>
      </div>
    </section>
  )
} 