import { PageSkeleton } from '@/components/ui/page-skeleton';

export default function PipelineLoading() {
  return <PageSkeleton statCards={0} rows={3} />;
}
