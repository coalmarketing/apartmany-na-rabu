'use client'

import { useI18n } from '@/app/i18n/client';

export default function LokalitaMap() {
  const t = useI18n();
  
  return (
    <section className="bg-white py-16">
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-xl text-left mx-4">
          <p className="text-2xl font-light leading-snug mb-16">
            {t('location.map.description')}
          </p>
        </div>
      </div>
      <div className="w-full h-96 md:h-[500px] lg:h-[600px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2629.9461279434895!2d14.73847611464776!3d44.828413359160976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDQ5JzQyLjIiTiAxNMKwNDQnMjcuNiJF!5e0!3m2!1scs!2scz!4v1751559653717!5m2!1scs!2scz" 
          width="100%" 
          height="100%" 
          style={{ 
            border: 0,
            filter: 'grayscale(100%)'
          }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa apartmánů na Rabu"
          className="w-full h-full"
        />
      </div>
    </section>
  );
} 