import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "store/cartSlice";
import { toast } from "sonner";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import React, { useState } from "react";
import { addToWishList } from "store/wishListSlice";

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const ProductItem = ({ img, title, desc, price, productId }) => {
  const dispatch = useDispatch();
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Link to={`/product/${productId}`}>
      <Card
        className="group relative overflow-hidden rounded-2xl border-0 bg-white dark:bg-slate-950 shadow-lg hover:shadow-2xl transition-all duration-500 h-[430px] p-0 min-w-[300px] max-w-[300px]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                setIsWishlisted(!isWishlisted);
                dispatch(addToWishList({ productId }));

                toast.success(
                  isWishlisted ? "Removed from wishlist" : "Added to wishlist",
                );
              }}
              className={`p-3 rounded-full cursor-pointer backdrop-blur-md transition-all duration-200 transform hover:scale-110 ${
                isWishlisted
                  ? "bg-red-500/80 text-white"
                  : "bg-white/85 dark:bg-slate-950/80 text-slate-700 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-950"
              }`}
            >
              <Heart
                className="w-5 h-5"
                fill={isWishlisted ? "currentColor" : "none"}
              />
            </button>

            <button
              type="button"
              className="p-3 cursor-pointer rounded-full bg-white/85 dark:bg-slate-950/80 hover:bg-white dark:hover:bg-slate-950 text-slate-700 dark:text-slate-100 transition-all duration-200 backdrop-blur-md transform hover:scale-110"
              aria-label="View product"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-4 left-4 z-10">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              New
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between h-40 gap-3 p-4">
          <div className="text-center">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
              {truncateText(desc, 60)}
            </p>
          </div>

          <div className="text-lg font-bold text-slate-900 dark:text-slate-100 w-full text-center">
            ${price}
          </div>
        </div>

        <Button
          className="absolute cursor-pointer bottom-0 w-full rounded-none bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 flex items-center justify-center gap-2 transition-all duration-300 h-12 group/btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(addCartItem({ productId, img, price }));
            toast.success("Item added in the cart!");
          }}
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </Button>
      </Card>
    </Link>
  );
};

export default ProductItem;
