import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortContainer = ({
  setQuery,
  query,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];

  const priceError =
    minPrice !== "" && maxPrice !== "" && Number(minPrice) > Number(maxPrice);

  return (
    <div className="max-w-[1000px] mx-auto px-4 pb-6">
      <div className="rounded-2xl border bg-white dark:bg-slate-950 dark:border-slate-800 shadow-sm">
        <div className="px-4 sm:px-5 py-3 border-b border-slate-200 dark:border-slate-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-slate-100">
            Filter products
          </p>
        </div>

        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-end">
            <div className="md:col-span-6">
              <label className="block text-xs font-medium text-gray-600 dark:text-slate-300 mb-1.5">
                Category
              </label>

              <Select value={query} onValueChange={setQuery}>
                <SelectTrigger className="h-11 rounded-full bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-900/80 focus:border-blue-500 focus:ring-blue-500/20 dark:text-slate-100">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent className="bg-white dark:bg-slate-950 dark:border-slate-800">
                  <SelectGroup>
                    <SelectItem value="allcategory">All categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.replaceAll("-", " ")}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-medium text-gray-600 dark:text-slate-300 mb-1.5">
                Min price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 dark:text-slate-400">
                  ₹
                </span>
                <Input
                  type="number"
                  min="1"
                  inputMode="numeric"
                  placeholder="0"
                  onWheel={(e) => e.currentTarget.blur()}
                  className={`h-11 rounded-full pl-8 border-gray-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 ${
                    priceError ? "border-red-400 focus:border-red-500" : ""
                  }`}
                  value={minPrice}
                  onChange={(e) =>
                    setMinPrice(
                      e.target.value === "" ? "" : Number(e.target.value),
                    )
                  }
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-medium text-gray-600 dark:text-slate-300 mb-1.5">
                Max price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 dark:text-slate-400">
                  ₹
                </span>
                <Input
                  type="number"
                  min="1"
                  inputMode="numeric"
                  placeholder="No limit"
                  onWheel={(e) => e.currentTarget.blur()}
                  className={`h-11 rounded-full pl-8 border-gray-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 ${
                    priceError ? "border-red-400 focus:border-red-500" : ""
                  }`}
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(
                      e.target.value === "" ? "" : Number(e.target.value),
                    )
                  }
                />
              </div>
            </div>
          </div>

          {priceError && (
            <p className="mt-3 text-xs text-red-500 dark:text-red-400">
              Min price cannot be greater than max price.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortContainer;
