'use client'

import OptimizedImage from './OptimizedImage'
import { useRouter } from 'next/navigation'
import { apartments } from '../data/apartments'
import { useI18n, useCurrentLocale } from '../i18n/client'

export default function Apartments() {
  const router = useRouter()
  const locale = useCurrentLocale()
  const t = useI18n()

  const handleApartmentClick = (id: number) => {
    router.push(`/${locale}/detail/${id}`)
  }

  return (
    <section id="apartmany" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto">
        {/* Nadpis a čára */}
        <h2 className="text-[40px] lato-regular text-[#1D2A40] text-left mb-4 px-4">
          {t('apartments.title')}
        </h2>
        <div className="border-t border-gray-300 w-full max-w-3xl mb-12 text-left mx-0" />

        {/* Apartmány */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-72 gap-y-20 mx-auto">
          {apartments.map((a) => (
            <div 
              key={a.title} 
              onClick={() => handleApartmentClick(a.id)}
              className="cursor-pointer hover:opacity-90 transition-opacity"
            >
              <h3 className="text-3xl md:text-4xl lato-light text-[#1D2A40] mb-4 ml-8">{a.title}</h3>
              <div className="text-lg md:text-xl text-[#1D2A40] mb-6 ml-8">
                <span className="lato-bold">{a.floor[locale]}</span><br />
                {a.area[locale]}<br />
                {a.terrace[locale]}
              </div>
              <div className={`overflow-hidden${a.sold ? ' relative' : ''}`}>
                <OptimizedImage
                  src={a.mainImage}
                  alt={a.title}
                  width={500}
                  height={375}
                  className="w-full h-auto object-cover aspect-[16/9]"
                />
                {a.sold && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl lato-light bg-black/30 select-none" style={{letterSpacing: '0.1em'}}>{t('common.buttons.sold')}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 