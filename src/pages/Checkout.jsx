import React, { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ShoppingBag, CreditCard, Truck, ShieldCheck } from "lucide-react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cartItems) || [];
  const [paymentMethod, setPaymentMethod] = useState("card");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const delivery = 40;

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items],
  );
  const shipping = subtotal > 300 ? 0 : 19.99;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax + delivery;

  const handlePlaceOrder = (data) => console.log("FORM DATA:", data);

  const onValid = (data) => {
    handlePlaceOrder(data);
  };

  if (!items.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6 text-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/15 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-7 h-7 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Your cart is empty
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Add some items to checkout.
          </p>
          <Button
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white w-full cursor-pointer"
            onClick={() => navigate("/collection")}
          >
            Continue Shopping
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 py-10 px-3 sm:px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-2">
            Secure Checkout
          </p>
          <div className="flex items-center gap-2 mb-2">
            <ShoppingBag className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Complete your order
            </h1>
          </div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Review your items and enter details to place the order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)] gap-6 lg:gap-8 items-start">
          <div className="space-y-6">
            <Card className="border border-slate-200/80 dark:border-slate-800 shadow-sm rounded-xl bg-white dark:bg-slate-950">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                      Shipping address
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Where should we deliver your order?
                    </p>
                  </div>
                  <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      First name
                    </Label>
                    <Input
                      className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      Last name
                    </Label>
                    <Input
                      className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      Street address
                    </Label>
                    <Input
                      className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                      {...register("street", {
                        required: "Street address is required",
                      })}
                    />
                    {errors.street && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.street.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      City
                    </Label>
                    <Input
                      className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      State
                    </Label>
                    <Input
                      className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                      {...register("state", { required: "State is required" })}
                    />
                    {errors.state && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.state.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      ZIP / Postal code
                    </Label>
                    <Input
                      className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                      {...register("zip", { required: "ZIP is required" })}
                    />
                    {errors.zip && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.zip.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      Phone
                    </Label>
                    <Input
                      className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                      {...register("phone", { required: "Phone is required" })}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border border-slate-200/80 dark:border-slate-800 shadow-sm rounded-xl bg-white dark:bg-slate-950">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                      Payment
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      All transactions are secure and encrypted.
                    </p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>

                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-3"
                >
                  <Label
                    htmlFor="card"
                    className="flex items-center justify-between gap-3 border border-slate-200 dark:border-slate-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-500/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="card" value="card" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 flex items-center gap-1">
                          <CreditCard className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          Card payment
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Visa, Mastercard, RuPay
                        </p>
                      </div>
                    </div>
                  </Label>

                  <Label
                    htmlFor="cod"
                    className="flex items-center justify-between gap-3 border border-slate-200 dark:border-slate-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer hover:border-blue-500/80 hover:bg-blue-50/40 dark:hover:bg-blue-500/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="cod" value="cod" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          Cash on Delivery
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Pay when it arrives.
                        </p>
                      </div>
                    </div>
                  </Label>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:col-span-2">
                      <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        Card number
                      </Label>
                      <Input
                        className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                        {...register("cardNumber", {
                          required: "Card number is required",
                        })}
                      />
                      {errors.cardNumber && (
                        <p className="text-xs text-red-600 dark:text-red-400">
                          {errors.cardNumber.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        Name on card
                      </Label>
                      <Input
                        className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                        {...register("cardName", {
                          required: "Name on card is required",
                        })}
                      />
                      {errors.cardName && (
                        <p className="text-xs text-red-600 dark:text-red-400">
                          {errors.cardName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        Expiry (MM/YY)
                      </Label>
                      <Input
                        className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                        {...register("expiry", {
                          required: "Expiry is required",
                        })}
                      />
                      {errors.expiry && (
                        <p className="text-xs text-red-600 dark:text-red-400">
                          {errors.expiry.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        CVV
                      </Label>
                      <Input
                        className="h-9 sm:h-10 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:placeholder:text-slate-400"
                        {...register("cvv", { required: "CVV is required" })}
                      />
                      {errors.cvv && (
                        <p className="text-xs text-red-600 dark:text-red-400">
                          {errors.cvv.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          <div className="space-y-4 lg:space-y-5">
            <Card className="border border-blue-200/80 dark:border-slate-800 shadow-md rounded-xl lg:sticky lg:top-6 bg-white dark:bg-slate-950">
              <div className="p-4 sm:p-5">
                <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Order summary
                </h2>

                <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div
                      key={item.productId}
                      className="flex items-center gap-3 py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
                    >
                      <div className="h-12 w-12 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900 flex-shrink-0">
                        <img
                          src={item.img || item.thumbnail || item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 line-clamp-2">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator className="my-3 dark:bg-slate-800" />

                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>${delivery.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                          Free
                        </span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (18%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-3 dark:bg-slate-800" />

                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                    Total
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base h-10 sm:h-11 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer disabled:cursor-not-allowed"
                  onClick={handleSubmit(onValid)}
                  type="button"
                >
                  Place Order
                </Button>

                <p className="mt-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                  Payments are secured and encrypted.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
