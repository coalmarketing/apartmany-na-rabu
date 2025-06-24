'use client'

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import OptimizedImage from './OptimizedImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const sliderImages = [
  '/img/hero-img.jpg',
  '/img/Photo_HP.png',
  '/img/hero-img.jpg',
  '/img/Photo_HP.png',
  '/img/hero-img.jpg',
  '/img/Photo_HP.png',
  '/img/hero-img.jpg',
  '/img/Photo_HP.png',
  '/img/hero-img.jpg',
  '/img/Photo_HP.png',
];

export default function Slider() {
  const swiperRef = useRef<{ swiper: SwiperType }>(null);
  // Poměr stran obrázků 4:3 (šířka : výška)
  const aspectRatio = 4 / 3;
  const [imageHeight, setImageHeight] = useState(600);
  const [imageWidth, setImageWidth] = useState(Math.round(600 * aspectRatio));

  useEffect(() => {
    const height = 0.6 * window.innerHeight;
    setImageHeight(height);
    setImageWidth(Math.round(height * aspectRatio));
  }, [aspectRatio]);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center pt-0 pb-0 bg-white overflow-hidden">
      <div className="w-full flex items-center justify-center" style={{ height: imageHeight }}>
        <Swiper
          ref={swiperRef}
          grabCursor={false}
          allowTouchMove={false}
          simulateTouch={false}
          touchRatio={0}
          touchAngle={0}
          touchMoveStopPropagation={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={0}
          initialSlide={1}
          speed={800}
          effect="slide"
          loop={true}
          slideToClickedSlide={true}
          watchSlidesProgress={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className="w-full custom-swiper"
          style={{ 
            height: imageHeight,
            width: imageWidth * 3
          }}
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index} className="custom-slide" style={{ width: imageWidth }}>
              <div style={{ width: imageWidth, height: imageHeight, overflow: 'hidden' }}>
                <OptimizedImage
                  src={image}
                  alt={`slider-image-${index}`}
                  width={imageWidth}
                  height={imageHeight}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Ovládání */}
      <div className="flex items-center justify-center gap-24 mt-8 mb-4">
        
        <div className="flex items-center gap-4">
          <button onClick={handlePrev}>
            <Image
              src="/img/Arrow_L_icon.svg"
              alt="Previous"
              width={40}
              height={40}
            />
          </button>
          <Image
            src="/img/Mouse_icon.svg"
            alt="Current"
            width={35}
            height={35}
            className="mx-16"
            style={{ width: 'auto' }}
          />
          <button onClick={handleNext}>
            <Image
              src="/img/Arrow_R_icon.svg"
              alt="Next"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .custom-swiper {
          position: relative;
          overflow: visible;
          margin: 0;
          padding: 0;
        }
        .custom-swiper .swiper-slide {
          transition: transform 0.3s ease;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        .custom-swiper .swiper-slide-active {
          transform: scale(1);
          z-index: 2;
        }
        .custom-swiper .swiper-slide-prev,
        .custom-swiper .swiper-slide-next {
          transform: scale(1);
          z-index: 1;
        }
        .custom-swiper .swiper-wrapper {
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        .custom-swiper .swiper-slide > div {
          margin: 0;
          padding: 0;
        }
        .custom-swiper .swiper-slide img {
          margin: 0;
          padding: 0;
          display: block;
        }
      `}</style>
    </section>
  );
} 