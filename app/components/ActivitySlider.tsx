'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useI18n } from '../i18n/client';

interface ActivitySliderProps {
  title: string;
  description: string;
  images: string[];
}

export default function ActivitySlider({ title, description, images }: ActivitySliderProps) {
  const t = useI18n();
  const [imgIdx, setImgIdx] = useState(0);
  const currentImage = images[imgIdx];

  const handlePrev = () => {
    setImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleNext = () => {
    setImgIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col gap-12">
        <h2 className="text-3xl font-light text-left">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left">
            <p className="text-[18px] font-regular leading-snug w-[70%]">{description}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full h-[320px] md:h-[360px] flex items-center justify-center">
              <Image
                src={currentImage}
                alt={title}
                width={600}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-24 mt-8">
              <button onClick={handlePrev} aria-label="Předchozí obrázek">
                <Image src="/img/Arrow_L_icon.svg" alt="Předchozí" width={40} height={40} />
              </button>
              <button onClick={handleNext} aria-label="Další obrázek">
                <Image src="/img/Arrow_R_icon.svg" alt="Další" width={40} height={40} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 