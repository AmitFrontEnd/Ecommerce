import { Skeleton } from "./ui/skeleton";

const ProductShimmer = () => (
  <div className="max-w-[1280px] mx-auto px-6">
    <div className="flex gap-9 max-[820px]:flex-col">
      <Skeleton className="min-[820px]:w-1/2 shrink-0 h-92 bg-slate-200 dark:bg-slate-800" />
      <div className="min-[820px]:w-1/2 space-y-4">
        <Skeleton className="w-[120px] h-10 bg-slate-200 dark:bg-slate-800" />
        <Skeleton className="w-[300px] h-10 bg-slate-200 dark:bg-slate-800" />
        <Skeleton className="w-[400px] h-10 bg-slate-200 dark:bg-slate-800" />
        <Skeleton className="w-[400px] h-52 bg-slate-200 dark:bg-slate-800" />
      </div>
    </div>
  </div>
);

export default ProductShimmer;
