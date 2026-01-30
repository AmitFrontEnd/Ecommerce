import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2, ShoppingCart, ArrowRight, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, increaseQty, decreaseQty } from "store/cartSlice";
import { useGetAllProductsQuery } from "@/services/apiSlice";
import { toast } from "sonner";

const Cart = () => {
  const dispatch = useDispatch();
  const { data: allProducts = [] } = useGetAllProductsQuery();
  const cartItems = useSelector((state) => state.cartItems) || [];

  const cartData = useMemo(() => {
    return cartItems
      .map((cartItem) => {
        const product = allProducts.find(
          (item) => item.id === cartItem.productId,
        );
        if (!product) return null;
        return {
          ...product,
          quantity: cartItem.quantity,
          productId: product.id,
        };
      })
      .filter(Boolean);
  }, [cartItems, allProducts]);

  const subtotal = cartData.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );
  const delivery = 40;
  const total = subtotal + delivery;

  if (cartData.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-500/15 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold mb-3 text-slate-900 dark:text-slate-100">
            Cart is Empty
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Looks like you haven’t added anything yet.
          </p>
          <Link to="/collection">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
              Continue Shopping <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 sm:py-10 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Shopping Cart
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              {cartData.length} items in your cart
            </p>
          </div>

          <Link to="/collection" className="hidden sm:block">
            <Button
              variant="outline"
              className="rounded-xl cursor-pointer bg-transparent dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              Continue Shopping
            </Button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1">
            <div className="hidden md:block sticky top-18 z-10">
              <div className="grid grid-cols-12 gap-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl font-semibold text-sm mb-4 shadow-sm text-slate-900 dark:text-slate-100">
                <p className="col-span-5">Product</p>
                <p className="col-span-3 text-center">Quantity</p>
                <p className="col-span-2 text-right">Price</p>
                <p className="col-span-1 text-right">Total</p>
                <p className="col-span-1 text-center">Delete</p>
              </div>
            </div>

            <div className="space-y-4">
              {cartData.map((item) => (
                <Card
                  key={item.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm"
                >
                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-3 items-start md:items-center">
                      <div className="md:col-span-5 flex gap-4">
                        <Link
                          to={`/product/${item.productId}`}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 flex-shrink-0 cursor-pointer"
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                        >
                          <img
                            src={item.images?.[0]}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </Link>

                        <div className="min-w-0">
                          <Link
                            to={`/product/${item.productId}`}
                            className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 hover:text-blue-600 transition cursor-pointer"
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                          >
                            {item.title}
                          </Link>

                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            {item.category}
                          </p>

                          <div className="md:hidden mt-3 flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                              ${item.price.toFixed(2)} each
                            </p>
                            <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 flex md:justify-center">
                        <div className="inline-flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden text-slate-900 dark:text-slate-100">
                          <button
                            className="h-10 w-10 grid place-items-center hover:bg-slate-50 dark:hover:bg-slate-900 transition cursor-pointer"
                            onClick={() =>
                              dispatch(
                                decreaseQty({ productId: item.productId }),
                              )
                            }
                            aria-label="Decrease quantity"
                            type="button"
                          >
                            <Minus className="w-4 h-4" />
                          </button>

                          <div className="h-10 min-w-12 px-3 grid place-items-center font-semibold">
                            {item.quantity}
                          </div>

                          <button
                            className="h-10 w-10 grid place-items-center hover:bg-slate-50 dark:hover:bg-slate-900 transition cursor-pointer"
                            onClick={() =>
                              dispatch(
                                increaseQty({ productId: item.productId }),
                              )
                            }
                            aria-label="Increase quantity"
                            type="button"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="hidden md:block md:col-span-2 text-right text-slate-700 dark:text-slate-200">
                        ${item.price.toFixed(2)}
                      </div>

                      <div className="hidden md:block md:col-span-1 text-right font-bold text-slate-900 dark:text-slate-100">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>

                      <div className="hidden md:flex md:col-span-1 justify-center">
                        <button
                          onClick={() => {
                            dispatch(removeItem({ productId: item.productId }));
                            toast.success("Item removed from cart");
                          }}
                          className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl p-2 transition cursor-pointer"
                          aria-label="Remove item"
                          type="button"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="md:hidden flex justify-end">
                        <Button
                          variant="outline"
                          className="rounded-xl text-red-600 dark:text-red-300 border-red-200 dark:border-red-500/40 hover:bg-red-50 dark:hover:bg-red-500/10 cursor-pointer bg-transparent"
                          onClick={() => {
                            dispatch(removeItem({ productId: item.productId }));
                            toast.success("Item removed from cart");
                          }}
                          type="button"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Link to="/collection" className="sm:hidden block mt-6">
              <Button
                variant="outline"
                className="w-full rounded-xl cursor-pointer bg-transparent dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>

          <div className="w-full lg:w-96">
            <Card className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm p-6 lg:sticky lg:top-6">
              <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                Order Summary
              </h2>

              <Separator className="mb-4 dark:bg-slate-800" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-slate-700 dark:text-slate-200">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-700 dark:text-slate-200">
                  <span>Delivery</span>
                  <span>${delivery.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4 dark:bg-slate-800" />

              <div className="flex justify-between font-bold text-lg text-slate-900 dark:text-slate-100">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout">
                <Button className="w-full mt-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
