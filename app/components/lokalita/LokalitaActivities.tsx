import { useI18n } from '@/app/i18n/client';
import ActivitySlider from '../ActivitySlider';

type ActivityKey = 'beaches' | 'trips' | 'relax' | 'kids';

const activitySlides: { key: ActivityKey; images: string[] }[] = [
  {
    key: 'beaches',
    images: ['/img/Photo-1.png'],
  },
  {
    key: 'trips',
    images: ['/img/Photo-2.png'],
  },
  {
    key: 'relax',
    images: ['/img/Photo-3.png'],
  },
  {
    key: 'kids',
    images: ['/img/Photo.png'],
  },
];

export default function LokalitaActivities() {
  const t = useI18n();

  return (
    <section className="container max-w-6xl mx-auto pt-24 pb-8">
      <h2 className="text-[40px] lato-regular text-[#1D2A40] text-left mb-4 mx-4">
        {t('location.activities_title')}
      </h2>
      <div className="border-t border-gray-300 w-full max-w-3xl mb-12 text-left mx-0" />
      {activitySlides.map((slide, index) => (
        <ActivitySlider
          key={index}
          title={t(`location.activities.${slide.key}.title`)}
          description={t(`location.activities.${slide.key}.description`)}
          images={slide.images}
        />
      ))}
    </section>
  );
} 