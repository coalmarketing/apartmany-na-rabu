'use client'

import { type Apartment, apartments } from '../../../data/apartments'
import ApartmentTopBar from '../../../components/ApartmentTopBar'
import DetailApartmentSlider from '../../../components/DetailApartmentSlider'
import Footer from '../../../components/Footer'

export default function DetailClient({ id }: { id: string }) {
  const apartmentId = Number(id)
  const apartment = apartments.find((a: Apartment) => a.id === apartmentId)

  if (!apartment) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-4xl lato-regular text-[#1D2A40]">
          Apartmán nebyl nalezen
        </h1>
      </div>
    )
  }

  return (
    <>
      <ApartmentTopBar apartmentId={apartmentId} />
      <DetailApartmentSlider apartmentId={apartmentId} />
      <Footer />
    </>
  )
} 