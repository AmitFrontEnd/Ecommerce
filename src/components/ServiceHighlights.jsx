import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Truck, RotateCcw, Headphones, ArrowRight } from "lucide-react";

const ServiceHighlights = () => {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Why Choose Us
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We focus on simple, honest service that makes your shopping easy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5 text-blue-600">
                <Truck className="w-6 h-6" />
              </div>

              <CardHeader className="p-0 mb-6 flex-1">
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Easy Exchange Policy
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Hassle-free exchange within 30 days.
                </CardDescription>
              </CardHeader>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Learn more
                </span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5 text-purple-600">
                <RotateCcw className="w-6 h-6" />
              </div>

              <CardHeader className="p-0 mb-6 flex-1">
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  7 Days Return Policy
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Easy returns within 7 days.
                </CardDescription>
              </CardHeader>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Learn more
                </span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5 text-emerald-600">
                <Headphones className="w-6 h-6" />
              </div>

              <CardHeader className="p-0 mb-6 flex-1">
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  24/7 Customer Support
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  We are always here to help you.
                </CardDescription>
              </CardHeader>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Learn more
                </span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Start Shopping
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
