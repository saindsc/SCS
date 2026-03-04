import { getServiceBySlug } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import ServiceDetailContent from './ServiceDetailContent';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
