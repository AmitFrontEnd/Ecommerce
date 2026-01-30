import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import "swiper/css";
import "swiper/css/pagination";

export default function ProductSlider() {
  const banners = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&q=80",
      headline: "Sound That Moves You",
      subtitle:
        "Crystal-clear wireless headphones with industry-leading noise cancellation.",
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&q=80",
      headline: "Timeless Elegance",
      subtitle:
        "Luxury watches crafted with precision to elevate your everyday style.",
      price: 499,
      originalPrice: 699,
      discount: 29,
      rating: 4.9,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1920&q=80",
      headline: "Power In Your Hands",
      subtitle:
        "Next-gen smartphones with stunning cameras and blazing-fast performance.",
      price: 899,
      originalPrice: 1199,
      discount: 25,
      rating: 4.7,
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        slidesPerView={1}
        loop
        speed={650}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="product-hero-swiper w-full h-[420px] sm:h-[460px] md:h-[520px] lg:h-[580px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={banner.image}
                alt={banner.headline}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top sm:object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex items-end">
                <div className="w-full px-4 pb-16 sm:px-10 sm:pb-20">
                  <div className="max-w-xl rounded-2xl bg-black/45 backdrop-blur-md p-4 sm:p-6 space-y-3 shadow-2xl">
                    <Badge className="bg-blue-600 text-white px-3 py-1.5 text-xs font-bold">
                      {banner.discount}% OFF
                    </Badge>

                    <h2 className="text-white font-extrabold leading-tight text-[22px] sm:text-4xl">
                      {banner.headline}
                    </h2>

                    <p className="text-white/85 text-sm sm:text-base line-clamp-2">
                      {banner.subtitle}
                    </p>

                    <div className="flex items-end gap-3">
                      <span className="text-white font-black text-3xl sm:text-4xl">
                        ${banner.price}
                      </span>
                      <span className="text-white/50 line-through text-sm">
                        ${banner.originalPrice}
                      </span>
                      <span className="text-blue-300 text-xs font-semibold">
                        ★ {banner.rating}
                      </span>
                    </div>

                    <Link to="/collection" className="block pt-1">
                      <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white h-11 px-6 font-semibold rounded-xl shadow-lg">
                        Shop Now →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
