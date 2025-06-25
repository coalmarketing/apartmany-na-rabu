import { useI18n } from '@/app/i18n/client';

export default function LokalitaInfo() {
  const t = useI18n();

  return (
    <section className="container max-w-6xl mx-auto bg-white py-0">
      <div className="max-w-6xl mx-auto flex flex-col mx-4">
        <p className="mb-16 text-lg font-regular">
          {t('location.info.address')}: č.p. 534<br/>
          51280, Lopar, Chorvatsko<br/>
          44.828383, 14.740995
        </p>

        <h2 className="text-3xl font-light mb-10">{t('location.info.title')}</h2>
        <ul className="text-lg space-y-2">
          <li>• {t('location.info.distances.beach')} 750 m</li>
          <li>• {t('location.info.distances.restaurant')} 350 m</li>
          <li>• {t('location.info.distances.bakery')} 400 m</li>
          <li>• {t('location.info.distances.shop')} 550 m</li>
          <li>• {t('location.info.distances.pharmacy')} 1,1 km</li>
          <li>• {t('location.info.distances.marina')} 1,2 km</li>
          <li>• {t('location.info.distances.ferry')} 4,1 km</li>
        </ul>
      </div>
    </section>
  );
} 