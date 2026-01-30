import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./ui/card";

const CardShimmer = () => {
  return (
    <Card className="h-[430px] p-0 min-w-[300px] max-w-[320px] overflow-hidden pb-4 bg-white border border-slate-200 dark:bg-slate-950 dark:border-slate-800">
      <Skeleton className="h-[350px] bg-slate-200 dark:bg-slate-800" />

      <div className="flex flex-col justify-between items-center h-full gap-4">
        <Skeleton className="h-8 w-5/6 bg-slate-200 dark:bg-slate-800" />
        <Skeleton className="h-8 w-5/6 bg-slate-200 dark:bg-slate-800" />
        <Skeleton className="h-8 w-1/2 bg-slate-200 dark:bg-slate-800" />
      </div>
    </Card>
  );
};

export default CardShimmer;
