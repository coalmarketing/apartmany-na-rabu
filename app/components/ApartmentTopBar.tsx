import OptimizedImage from './OptimizedImage';
import { apartments } from '../data/apartments';

interface ApartmentTopBarProps {
  apartmentId: number;
}

export default function ApartmentTopBar({ apartmentId }: ApartmentTopBarProps) {
  const apartment = apartments.find(a => a.id === apartmentId) || apartments[0];

  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Pozadí */}
      <div className="absolute inset-0 -z-10">
        <OptimizedImage
          src={apartment.mainImage}
          alt="Pozadí apartmán"
          width={1920}
          height={600}
          className="object-cover w-full h-full min-h-[60vh]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2A40]/90 to-transparent" />
      </div>
      {/* Název apartmánu dole */}
      <div className="absolute bottom-8 md:bottom-16 left-0 right-0 flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-5xl font-light text-white">{apartment.title}</h1>
      </div>
      {/* Text PRODÁNO přes celý obrázek */}
      {apartment.sold && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-8xl font-light text-white">
            PRODÁNO
          </div>
        </div>
      )}
    </div>
  );
} 