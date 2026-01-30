import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20">
        <Badge className="bg-blue-600 text-white mb-4">
          About This Project
        </Badge>

        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          E-Commerce Platform
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          A full-featured e-commerce web application built with React,
          showcasing modern frontend development practices. This project
          demonstrates responsive design, state management, and UI/UX
          implementation for an internship portfolio.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="p-3 w-fit rounded-lg bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-300 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Hero Slider
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Responsive Swiper carousel with autoplay, pagination, and smooth
              animations.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="p-3 w-fit rounded-lg bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-300 mb-4">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Product Filters
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Advanced filtering by category, price range with real-time
              updates.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="p-3 w-fit rounded-lg bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-300 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Responsive UI
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Mobile-first design using Tailwind CSS and Shadcn UI components.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React",
            "React Router",
            "Tailwind CSS",
            "Shadcn UI",
            "Swiper JS",
            "Lucide Icons",
            "DummyJSON API",
            "ES6+",
          ].map((tech, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center text-sm font-medium text-slate-900 dark:text-slate-100"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Pages Included
        </h2>

        <div className="space-y-3">
          {[
            { name: "Home", desc: "Hero slider + featured products" },
            { name: "Collection", desc: "Product listing with filters" },
            {
              name: "Product Detail",
              desc: "Individual product page (optional)",
            },
            { name: "Contact", desc: "Contact form with info cards" },
            { name: "About", desc: "Project information page" },
          ].map((page, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {page.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {page.desc}
                </p>
              </div>
              <Badge
                variant="outline"
                className="dark:border-slate-700 dark:text-slate-200"
              >
                {page.name.toLowerCase()}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Why This Project?
        </h2>

        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-blue-50 dark:bg-blue-500/10">
          <ul className="space-y-3 text-slate-700 dark:text-slate-200">
            {[
              "Demonstrates real-world e-commerce UI/UX implementation",
              "Shows proficiency with modern React libraries and tools",
              "Responsive design across all devices (mobile-first approach)",
              "Integration with external APIs (DummyJSON for products)",
              "Clean code structure and component organization",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Ready to explore?
        </h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl cursor-pointer">
          <Link to="/" className="cursor-pointer">
            Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
