import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { X, ShoppingCart, Heart } from "lucide-react";
import { useGetAllProductsQuery } from "@/services/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { removeWishListItem } from "store/wishListSlice";
import { addCartItem } from "store/cartSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { data: allProducts = [] } = useGetAllProductsQuery();

  const wishlistItems = useSelector((state) =>
    state.wishlist
      .map((wishlistitem) => {
        const product = allProducts.find(
          (item) => item.id === wishlistitem.productId,
        );
        if (!product) return null;
        return {
          productId: product.id,
          title: product.title,
          image: product.thumbnail,
          price: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          reviewsCount: product.reviews.length,
        };
      })
      .filter(Boolean),
  );

  const totalOriginal = wishlistItems.reduce(
    (acc, item) => acc + item.price / (1 - item.discountPercentage / 100),
    0,
  );

  const totalDiscounted = wishlistItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-500/10 dark:to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
            Wishlist is empty
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Add items you love to save them for later
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 rounded-xl text-white cursor-pointer"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-500/30 to-transparent"></div>

      <div className="w-full max-w-7xl mx-auto py-8 sm:py-12 px-3 sm:px-4 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                Your Collection
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                My Wishlist
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 sm:mt-3">
                {`${wishlistItems.length} ${
                  wishlistItems.length === 1 ? "item" : "items"
                } saved`}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Total Value
                </p>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  ${totalDiscounted.toFixed(2)}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-500/20 border border-blue-200 dark:border-blue-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                <p className="text-xs font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-1">
                  You Save
                </p>
                <p className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-blue-200">
                  ${(totalOriginal - totalDiscounted).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-500/30 to-transparent"></div>
        </div>

        <div className="hidden lg:block rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-12 text-center text-slate-700 dark:text-slate-200 font-semibold pl-4 sm:pl-6">
                    Remove
                  </TableHead>
                  <TableHead className="text-slate-700 dark:text-slate-200 font-semibold min-w-64 px-3 sm:px-4">
                    Product
                  </TableHead>
                  <TableHead className="text-right text-slate-700 dark:text-slate-200 font-semibold px-3 sm:px-4">
                    Price
                  </TableHead>
                  <TableHead className="text-right text-slate-700 dark:text-slate-200 font-semibold px-3 sm:px-4">
                    Rating
                  </TableHead>
                  <TableHead className="text-right text-slate-700 dark:text-slate-200 font-semibold pr-4 sm:pr-6">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {wishlistItems.map((item) => (
                  <TableRow
                    key={item.productId}
                    className="border-b border-slate-100 dark:border-slate-800 hover:bg-gradient-to-r hover:from-blue-50/50 hover:via-white hover:to-blue-50/50 dark:hover:from-blue-500/10 dark:hover:via-slate-950 dark:hover:to-blue-500/10 transition-colors duration-200 group"
                  >
                    <TableCell className="text-center py-4 sm:py-5 pl-4 sm:pl-6">
                      <button
                        onClick={() =>
                          dispatch(removeWishListItem(item.productId))
                        }
                        className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110 cursor-pointer"
                        aria-label="Remove item"
                        type="button"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </TableCell>

                    <TableCell className="py-4 sm:py-5 px-3 sm:px-4">
                      <div className="flex items-center gap-3 sm:gap-5">
                        <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-slate-900 dark:to-slate-800 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          {item.discountPercentage > 0 && (
                            <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2">
                              <Badge className="bg-blue-600 text-white shadow-lg font-bold text-xs sm:text-sm">
                                -{item.discountPercentage}%
                              </Badge>
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 text-xs sm:text-sm leading-tight">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="text-right py-4 sm:py-5 px-3 sm:px-4">
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                          ${item.price.toFixed(2)}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-through">
                          {(
                            item.price /
                            (1 - item.discountPercentage / 100)
                          ).toFixed(2)}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="text-right py-4 sm:py-5 px-3 sm:px-4">
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1">
                          <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                            {item.rating.toFixed(1)}
                          </span>
                          <span className="text-base sm:text-lg">⭐</span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {item.reviewsCount} reviews
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="text-right py-4 sm:py-5 pr-4 sm:pr-6">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
                        onClick={() =>
                          dispatch(
                            addCartItem({
                              productId: item.productId,
                              title: item.title,
                              img: item.image,
                              price: item.price,
                            }),
                          )
                        }
                        type="button"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <div className="space-y-3">
            {wishlistItems.map((item) => (
              <div
                key={item.productId}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex gap-4 mb-4">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-slate-900 dark:to-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {item.discountPercentage > 0 && (
                      <Badge className="absolute top-2 right-2 bg-blue-600 text-white font-bold text-sm">
                        -{item.discountPercentage}%
                      </Badge>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 text-sm">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.discountPercentage > 0 && (
                            <span className="text-xs text-slate-500 dark:text-slate-400 line-through">
                              {(
                                item.price /
                                (1 - item.discountPercentage / 100)
                              ).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          dispatch(removeWishListItem(item.productId))
                        }
                        className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex-shrink-0 cursor-pointer"
                        type="button"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                      {item.rating.toFixed(1)}
                    </span>
                    <span>⭐</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      ({item.reviewsCount} reviews)
                    </span>
                  </div>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm cursor-pointer"
                    onClick={() =>
                      dispatch(
                        addCartItem({
                          productId: item.productId,
                          title: item.title,
                          img: item.image,
                          price: item.price,
                        }),
                      )
                    }
                    type="button"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-3">
          {wishlistItems.map((item) => (
            <div
              key={item.productId}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex gap-3 mb-3">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-slate-900 dark:to-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {item.discountPercentage > 0 && (
                    <Badge className="absolute top-1 right-1 bg-blue-600 text-white font-bold text-xs">
                      -{item.discountPercentage}%
                    </Badge>
                  )}
                  <button
                    onClick={() => dispatch(removeWishListItem(item.productId))}
                    className="absolute top-1 left-1 bg-white/90 dark:bg-slate-950/70 hover:bg-blue-50 dark:hover:bg-slate-900 p-1 rounded-lg shadow-md cursor-pointer"
                    type="button"
                  >
                    <X className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 text-xs">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.discountPercentage > 0 && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 line-through">
                        {(
                          item.price /
                          (1 - item.discountPercentage / 100)
                        ).toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-0.5 mt-1">
                    <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                      {item.rating.toFixed(1)}
                    </span>
                    <span className="text-sm">⭐</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      ({item.reviewsCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs h-9 cursor-pointer"
                onClick={() =>
                  dispatch(
                    addCartItem({
                      productId: item.productId,
                      title: item.title,
                      img: item.image,
                      price: item.price,
                    }),
                  )
                }
                type="button"
              >
                <ShoppingCart className="w-3 h-3 mr-1" />
                Add to Cart
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8">
            <div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-1">
                You have{" "}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {`${wishlistItems.length} ${
                    wishlistItems.length === 1 ? "item" : "items"
                  }`}
                </span>{" "}
                saved in your wishlist
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Keep shopping and add more to your collection
              </p>
            </div>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full sm:w-auto text-white cursor-pointer"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
