import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const NewsletterSignup = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Subscribe to our Newsletter
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-2">
          Get updates on new products and offers.
        </p>

        <form className="mt-6 flex flex-col sm:flex-row gap-3 items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow border border-slate-200 dark:border-slate-800">
          <div className="relative flex-1 w-full">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full pl-10 pr-3 py-3 rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>

          <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
