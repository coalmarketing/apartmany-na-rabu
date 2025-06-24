'use client'
import { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import { apartments } from '../data/apartments';
import Image from 'next/image';
import ContactSection from './ContactSection';
import { useI18n, useCurrentLocale } from '../i18n/client';

interface DetailApartmentSliderProps {
  apartmentId: number;
}

export default function DetailApartmentSlider({ apartmentId }: DetailApartmentSliderProps) {
  const apartment = apartments.find(a => a.id === apartmentId) || apartments[0];
  const [imgIdx, setImgIdx] = useState(0);
  const rooms = apartment.rooms ?? [];
  const images = apartment.images ?? [];
  const plan = apartment.plan ?? '';
  const t = useI18n();
  const locale = useCurrentLocale();

  // Vrací pole dvou obrázků podle aktuálního indexu a cyklí, pokud je obrázků více
  const getVisibleImages = () => {
    if (images.length === 0) return [];
    if (images.length === 1) return [images[0]];
    return [images[imgIdx], images[(imgIdx + 1) % images.length]];
  };
  const visibleImages = getVisibleImages();

  return (
    <div className="container max-w-6xl mx-auto px-4 py-24">
      {/* Text a parametry */}
      <div className="mb-12">
        <div className="text-2xl md:text-3xl text-[#757575] mb-6 lato-light max-w-xl">
          {apartment.description[locale]}
        </div>
        <div className="text-lg text-[#1D2A40] mb-6 lato-regular">
          <span>{apartment.floor[locale]}</span><br />
          {t('apartments.interior_area')} {rooms.find(r => r.name[locale] === t('apartments.interior_area'))?.size}<br />
          {apartment.terrace[locale]}
        </div>
      </div>

      {/* Slider obrázků */}
      <div className="flex items-center justify-center gap-8 mb-16">
        <div className="flex gap-8 w-[1320px] justify-center items-center">
          {visibleImages.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[650px] h-[375px] flex items-center justify-center bg-white overflow-hidden">
              <OptimizedImage
                src={img}
                alt={apartment.title}
                width={650}
                height={375}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Ovládání slideru pod obrázky */}
      <div className="flex items-center justify-center gap-48 mt-8 mb-16">
        <button
          aria-label="Předchozí obrázky"
          onClick={() => setImgIdx((imgIdx - 2 + images.length) % images.length)}
          disabled={images.length === 0}
        >
          <Image src="/img/Arrow_L_icon.svg" alt="Předchozí" width={40} height={40} />
        </button>
        <button
          aria-label="Další obrázky"
          onClick={() => setImgIdx((imgIdx + 2) % images.length)}
          disabled={images.length === 0}
        >
          <Image src="/img/Arrow_R_icon.svg" alt="Další" width={40} height={40} />
        </button>
      </div>

      {/* Půdorys a tabulka */}
      <h2 className="text-2xl mb-4 lato-light">{t('apartments.apartment_detail')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          {plan && (
            <OptimizedImage
              src={plan}
              alt={`Půdorys ${apartment.title}`}
              width={600}
              height={400}
              className="w-full h-auto object-contain "
            />
          )}
        </div>
        <div>
          <div className="text-xl mb-10 lato-bold">{apartment.floor[locale]}</div>
          <table className="w-full text-xl lato-light">
            <tbody>
              {(() => {
                let rowNumber = 1;
                return rooms.map((room, i) => (
                  <tr key={i}>
                    <td className={`pr-4 ${room.bold ? 'font-bold' : ''}`}>{room.bold ? '' : rowNumber++ + '.'}</td>
                    <td className={`pr-4 ${room.bold ? 'font-bold' : ''}`}>{room.name[locale]}</td>
                    <td className={`text-right ${room.bold ? 'font-bold' : ''}`}>{room.size}</td>
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cena a poznámky */}
      <div className="mt-24">
        <h2 className="text-2xl mb-6 lato-light">{t('apartments.price.title')}</h2>
        <div className="text-2xl mb-12 lato-bold">{t('apartments.price.on_request')}</div>
        <button 
          className={`bg-[#1D2A40] text-white text-xl px-10 py-4 rounded-full mb-12 lato-bold transition ${apartment.sold ? 'opacity-100 cursor-not-allowed' : 'hover:bg-[#223355]'}`}
          disabled={apartment.sold}
        >
          {apartment.sold ? t('common.buttons.sold') : t('common.buttons.interested')}
        </button>
        <div className="text-xs text-[#757575] leading-relaxed max-w-xl">
          {t('apartments.legal_notice')}<br /><br />
          {t('apartments.disclaimer')}
        </div>
      </div>

      <ContactSection />
    </div>
  );
} 