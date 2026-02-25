import { PageSkeleton } from '@/components/ui/page-skeleton';

export default function DashboardLoading() {
  return <PageSkeleton statCards={4} rows={2} />;
}
