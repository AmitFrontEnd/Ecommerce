import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      type="button"
      className={`
        fixed z-50 cursor-pointer
        right-4 bottom-20 md:right-6 md:bottom-6
        h-12 w-12 rounded-2xl grid place-items-center
        bg-gradient-to-r from-blue-600 to-blue-700 text-white
        shadow-lg shadow-blue-900/20 dark:shadow-black/30
        ring-1 ring-blue-200/50 dark:ring-slate-700/60
        hover:from-blue-700 hover:to-blue-800
        hover:shadow-xl hover:shadow-blue-900/25 dark:hover:shadow-black/40
        active:scale-95
        transition-all duration-300 ease-in-out
        ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }
      `}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
