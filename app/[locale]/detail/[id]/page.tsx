import DetailClient from './DetailClient'
import { apartments } from '../../../data/apartments'

export async function generateStaticParams() {
  const locales = ['cs', 'en']
  const paths = apartments.flatMap((apartment) =>
    locales.map((locale) => ({
      id: apartment.id.toString(),
      locale: locale,
    }))
  )
  return paths
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ApartmentDetailPage({ params }: { params: Promise<{ id: string; locale: 'cs' | 'en' }> }) {
  const { id } = await params;
  return <DetailClient id={id} />
} 