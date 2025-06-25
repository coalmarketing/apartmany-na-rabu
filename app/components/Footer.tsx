'use client';

import Image from 'next/image';
import { useI18n } from '../i18n/client';

export default function Footer() {
  const t = useI18n();

  return (
    <div className="bg-black text-white py-3 px-4">
      <div className="w-full px-4 md:px-8 lg:px-32 mx-auto flex flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex items-center gap-2">
          <Image 
            src="/img/copyright.png" 
            alt="copyright" 
            width={25} 
            height={25} 
            style={{ width: 'auto', height: 'auto' }}
          />
          <p className="text-[10px] md:text-xs">{t('footer.copyright')}</p>
        </div>
        <div>
          <Image 
            src="/img/matfix.png" 
            alt="Matfix Logo" 
            width={80} 
            height={30} 
            style={{ width: 'auto', height: 'auto' }}
            className="w-[60px] md:w-[80px]" 
          />
        </div>
      </div>
    </div>
  );
}