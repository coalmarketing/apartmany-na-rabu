'use client'

import { useParams } from 'next/navigation'
import OptimizedImage from '../../../components/OptimizedImage'
import { useState } from 'react'
import { apartments } from '../../../data/apartments'
import ApartmentTopBar from '../../../components/ApartmentTopBar'
import DetailApartmentSlider from '../../../components/DetailApartmentSlider'
import Footer from '../../../components/Footer'

export default function ApartmentDetail() {
  const params = useParams()
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;
  const apartmentId = Number(idParam)
  const apartment = apartments.find(a => a.id === apartmentId)
  const [imgIdx, setImgIdx] = useState(0)

  if (!apartment) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-4xl lato-regular text-[#1D2A40]">Apartmán nebyl nalezen</h1>
      </div>
    )
  }

  const rooms = apartment.rooms ?? [];
  const images = apartment.images ?? [];
  const plan = apartment.plan ?? '';

  return (
    <>
      <ApartmentTopBar apartmentId={apartmentId} />
      <DetailApartmentSlider apartmentId={apartmentId} />
      <Footer />
    </>
  )
} 