import ProductShimmer from "@/components/ProductShimmer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "@/services/apiSlice";
import { skipToken } from "@reduxjs/toolkit/query";
import React, { useEffect, useMemo, useState } from "react";
import { MdStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { addCartItem } from "store/cartSlice";
import { Heart } from "lucide-react";
import { addToWishList } from "store/wishListSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { product: productId } = useParams();

  const wishlistItems = useSelector((state) => state.wishlist) || [];
  const isWishlisted = wishlistItems.some(
    (w) => w.productId === Number(productId),
  );

  const { data: allProducts } = useGetAllProductsQuery();
  const productInList = allProducts?.find((p) => p.id === Number(productId));

  const {
    data: detailProduct,
    isLoading: loading,
    isError: error,
  } = useGetProductByIdQuery(productInList ? skipToken : productId);

  const product = productInList || detailProduct;

  const [mainImage, setMainImage] = useState(null);

  const cartItems = useSelector((state) => state.cartItems) || [];
  const isInCart = cartItems.some(
    (item) => item.productId === Number(productId),
  );

  useEffect(() => {
    if (product?.images?.length) setMainImage(product.images[0]);
  }, [product]);

  const rating = useMemo(() => Number(product?.rating || 4.8), [product]);

  const similarProducts = useMemo(() => {
    if (!allProducts || !product) return [];
    return allProducts
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [allProducts, product]);

  if (loading || !product) return <ProductShimmer />;

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center text-red-600 dark:text-red-400 font-semibold border border-red-200 dark:border-red-500/30 bg-red-50 dark:bg-red-500/10 rounded-xl p-6">
          Failed to load product details.
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addCartItem({
        productId: Number(productId),
        img: product.images?.[0],
        price: product.price,
        title: product.title,
      }),
    );
    toast.success("Added to cart");
  };

  const stock = product.stock;
  const availability =
    typeof stock === "number" ? (stock > 10 ? "In stock" : "Low stock") : null;

  const infoRows = [
    product?.id ? { label: "Product ID", value: String(product.id) } : null,
    typeof stock === "number" ? { label: "Stock", value: String(stock) } : null,
    product.brand ? { label: "Brand", value: product.brand } : null,
    product.category ? { label: "Category", value: product.category } : null,
    product.sku ? { label: "SKU", value: product.sku } : null,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f6f7f8] dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-8">
        <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-start">
              <div>
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                  <img
                    src={mainImage}
                    alt={product.title}
                    className="w-full h-[320px] sm:h-[420px] object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 flex gap-3 flex-wrap">
                  {product.images?.slice(0, 5).map((img, i) => {
                    const active = img === mainImage;
                    return (
                      <button
                        key={i}
                        onClick={() => setMainImage(img)}
                        className={`h-16 w-16 rounded-xl overflow-hidden border transition cursor-pointer ${
                          active
                            ? "border-blue-600 ring-2 ring-blue-600/20"
                            : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                        aria-label={`Thumbnail ${i + 1}`}
                        type="button"
                      >
                        <img
                          src={img}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  {product.category && (
                    <Badge className="bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                      {product.category}
                    </Badge>
                  )}
                  {product.brand && (
                    <Badge className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                      {product.brand}
                    </Badge>
                  )}
                  {product.discountPercentage > 0 && (
                    <Badge className="bg-blue-600 text-white border border-blue-600">
                      Save {product.discountPercentage}%
                    </Badge>
                  )}
                  {availability && (
                    <Badge
                      className={
                        availability === "Low stock"
                          ? "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30"
                          : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30"
                      }
                    >
                      {availability}
                    </Badge>
                  )}
                </div>

                <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  {product.title}
                </h1>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                    ${product.price}
                  </p>

                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <MdStar
                          key={i}
                          size={18}
                          color={i < Math.round(rating) ? "#FFCC07" : "#E5E7EB"}
                        />
                      ))}
                    </div>
                    <span className="text-slate-600 dark:text-slate-300">
                      {rating.toFixed(1)}/5
                    </span>
                  </div>
                </div>

                <Separator className="my-5 dark:bg-slate-800" />

                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Product info
                  </p>

                  <div className="mt-3 divide-y divide-slate-200 dark:divide-slate-800">
                    {infoRows.map((row) => (
                      <div
                        key={row.label}
                        className="py-2 flex items-center justify-between gap-4"
                      >
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {row.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 text-right">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Product details
                  </p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <Button
                    variant="outline"
                    className={`h-11 rounded-xl border-slate-200 dark:border-slate-800 cursor-pointer bg-transparent dark:text-slate-100 dark:hover:bg-slate-900 ${
                      isWishlisted
                        ? "text-red-600 dark:text-red-300 border-red-200 dark:border-red-500/30 bg-red-50 dark:bg-red-500/10 hover:bg-red-50 dark:hover:bg-red-500/10"
                        : ""
                    }`}
                    onClick={() => {
                      dispatch(addToWishList({ productId: Number(productId) }));
                      toast.success(
                        isWishlisted
                          ? "Removed from wishlist"
                          : "Added to wishlist",
                      );
                    }}
                    type="button"
                  >
                    <Heart
                      className={`w-4 h-4 mr-2 ${
                        isWishlisted ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                    {isWishlisted ? "Wishlisted" : "Wishlist"}
                  </Button>

                  <Button
                    disabled={isInCart}
                    onClick={handleAddToCart}
                    className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex-1 cursor-pointer disabled:cursor-not-allowed"
                    type="button"
                  >
                    {isInCart ? "Added in cart" : "Add to cart"}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Similar products
                </h2>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {similarProducts.length} items
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {similarProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="block cursor-pointer"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <Card className="group relative overflow-hidden rounded-2xl border-0 bg-white dark:bg-slate-950 shadow-lg hover:shadow-2xl transition-all duration-500 p-0">
                      <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-900 aspect-square">
                        <img
                          src={p.thumbnail || p.images?.[0]}
                          alt={p.title}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="p-2.5 sm:p-3 text-center">
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
                          {p.title}
                        </p>
                        <p className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
                          ${p.price}
                        </p>
                      </div>

                      <div className="h-10 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold flex items-center justify-center text-sm">
                        View
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Product;
