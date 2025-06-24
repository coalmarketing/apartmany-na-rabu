import Image from 'next/image';
import { useI18n } from '@/app/i18n/client';

export default function LokalitaMap() {
  const t = useI18n();
  
  return (
    <section className="bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-xl text-left px-4">
          <p className="text-2xl font-light leading-snug mb-16">
            {t('location.map.description')}
          </p>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/img/Mapa cernobila.png"
          alt="Mapa Rab"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
} 