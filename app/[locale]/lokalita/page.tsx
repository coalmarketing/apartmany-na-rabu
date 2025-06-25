import LokalitaClient from './LokalitaClient';

export default async function LokalitaPage({ params }: { params: Promise<{ locale: 'cs' | 'en' }> }) {
  await params; // Await params even if not used
  return <LokalitaClient />;
} 