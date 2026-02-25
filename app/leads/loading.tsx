import { PageSkeleton } from '@/components/ui/page-skeleton';

export default function LeadsLoading() {
  return <PageSkeleton statCards={4} rows={2} />;
}
