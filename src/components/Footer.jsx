import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-14 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">
                S
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-slate-900 dark:text-slate-100">
                  ShopSphere
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Premium e-commerce
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Trendy products, fast delivery, and secure checkout—built with
              React + shadcn UI.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <a
                href="https://github.com/AmitFrontEnd"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 grid place-items-center transition cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-kumar-342681303/"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 grid place-items-center transition cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-slate-700 dark:text-slate-200" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Shop
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Deals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Help
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Newsletter
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              Get updates on new products and offers.
            </p>

            <div className="mt-4 flex gap-2">
              <Input
                placeholder="Email address"
                className="h-10 rounded-xl bg-white dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800"
                type="email"
              />
              <Button className="h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <Separator className="my-8 dark:bg-slate-800" />

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between text-sm">
          <p className="text-slate-500 dark:text-slate-400">
            © {year} ShopSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
            <Link to="/" className="hover:text-blue-600 transition">
              Privacy
            </Link>
            <Link to="/" className="hover:text-blue-600 transition">
              Terms
            </Link>
            <Link to="contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
