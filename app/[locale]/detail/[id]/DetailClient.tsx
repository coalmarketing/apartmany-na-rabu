'use client'

import { useParams } from 'next/navigation'
import { apartments } from '../../../data/apartments'
import { useTranslation } from '../../../i18n/client'
import { ApartmentDetail } from '../../../components/ApartmentDetail'

export default function DetailClient() {
  const params = useParams()
  const { t } = useTranslation(params.locale as string)
  const apartment = apartments.find(a => a.id.toString() === params.id)

  if (!apartment) {
    return <div>{t('apartment.notFound')}</div>
  }

  return <ApartmentDetail apartment={apartment} />
} 