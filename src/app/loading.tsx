import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-[10px] w-full rounded-xl" />
      <Skeleton className="h-[10px] w-1/2 rounded-xl" />
      <Skeleton className="h-[10px] w-1/3 rounded-xl" />
      <Skeleton className="h-[10px] w-1/2 rounded-xl" />
    </div>
  );
}
