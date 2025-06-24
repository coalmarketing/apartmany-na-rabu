'use client'

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useI18n, useCurrentLocale } from '../i18n/client';
import Link from 'next/link';

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const t = useI18n();

  const menuItems = [
    { label: t('common.navigation.home'), href: '/' },
    { label: t('common.navigation.apartments'), href: '#apartmany' },
    { label: t('common.navigation.locality'), href: '/lokalita' },
    { label: t('common.navigation.contact'), href: '#kontakt' },
  ];

  const smoothScrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);

    if (href.startsWith('#')) {
      const homePath = `/${locale}`;
      const isHomePage = pathname === homePath;

      if (isHomePage) {
        smoothScrollTo(href);
      } else {
        sessionStorage.setItem('scrollToSection', href);
        router.push(homePath);
      }
    } else {
      const destination = href === '/' ? `/${locale}` : `/${locale}${href}`;
      router.push(destination);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = sessionStorage.getItem('scrollToSection');
      if (section) {
        smoothScrollTo(section);
        sessionStorage.removeItem('scrollToSection');
      } else if (window.location.hash) {
        smoothScrollTo(window.location.hash);
      }
    };

    const timer = setTimeout(handleScroll, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Tlačítko menu */}
      <button
        className="fixed cursor-pointer top-16 right-48 z-50 w-32 h-32 rounded-full bg-[#1D2A40] text-[white] flex items-center justify-center text-base lato-bold shadow-lg focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label={t('common.buttons.menu')}
      >
        <span className="text-[white] text-md tracking-widest">{t('common.buttons.menu')}</span>
      </button>

      {/* Overlay menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Průhledná část vlevo */}
          <div
            className="hidden md:block flex-1 bg-black/30 cursor-pointer transition-opacity duration-500"
            onClick={() => setOpen(false)}
          />
          {/* Menu panel s animací */}
          <div
            className="w-full md:w-[55vw] h-full bg-[#232c3d] transition-transform duration-500 flex flex-col relative"
            style={{maxWidth: '700px', transform: open ? 'translateX(0)' : 'translateX(100%)'}}
          >
            {/* Zavírací tlačítko */}
            <button
              className="absolute top-10 right-16 w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#1a2236] text-3xl shadow-lg focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label={t('common.buttons.close')}
            >
              <span className="text-3xl">&#10005;</span>
            </button>
            {/* Menu položky */}
            <nav className="flex flex-1 flex-col justify-center items-center gap-10">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-200 text-2xl md:text-3xl lato-light hover:underline hover:text-white transition"
                  onClick={handleClick(item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
} 