import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Heart,
  Search,
  Menu,
  X,
  Moon,
  Sun,
  User,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "store/searchSlice";

const Header = ({ menuOpen, setMenuOpen }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartItems);
  const wishlistData = useSelector((state) => state.wishlist);

  const [showSearch, setShowSearch] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  const cartCount = cartData.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistData.length;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "CONTACT", path: "/contact" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 shadow-md sticky top-0 z-50">
      <header className="flex justify-between items-center max-w-[1280px] mx-auto px-3 sm:px-6 py-2 md:py-3">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 grid place-items-center shadow-lg">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-[15px] sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
              ShopKart
            </p>
            <p className="text-[10px] sm:text-[10px] text-slate-500 dark:text-slate-400">
              Online Store
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-600"
                    : "text-slate-700 dark:text-slate-200 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-4">
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-slate-200" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            <Link
              to="/login"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="User"
            >
              <User className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </Link>

            <Link
              to="/wishlist"
              className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-slate-700 dark:text-slate-200" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </Link>
          </div>

          <button
            onClick={() => setShowSearch((p) => !p)}
            className="p-1.5 md:p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>

          <Link
            to="/cart"
            className="relative p-1.5 md:p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] md:text-xs font-bold rounded-full flex items-center justify-center w-4 h-4 md:w-5 md:h-5">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Menu
              className={`absolute w-5 h-5 transition-all ${
                menuOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            />
            <X
              className={`absolute w-5 h-5 transition-all ${
                menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            />
          </button>
        </div>
      </header>

      {showSearch && (
        <div className="max-w-[600px] mx-auto px-4 pb-4">
          <div className="flex gap-2">
            <Input
              placeholder="Search..."
              type="text"
              onChange={(e) => dispatch(setSearchQuery(e.target.value.trim()))}
              className="bg-white dark:bg-slate-900 dark:text-slate-100"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      <nav
        className={`fixed top-0 right-0 w-full h-screen bg-white dark:bg-slate-950 z-40 transition-transform duration-300 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Menu
          </p>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>
        </div>

        <div className="px-4 pb-3 grid grid-cols-2 gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 px-3 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
            Theme
          </button>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 px-3 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            <User className="w-4 h-4" /> Login
          </Link>

          <Link
            to="/wishlist"
            onClick={() => setMenuOpen(false)}
            className="col-span-2 flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4" /> Wishlist
            </span>
            <span className="text-xs font-bold bg-pink-600 text-white rounded-full px-2 py-1">
              {wishlistCount > 99 ? "99+" : wishlistCount}
            </span>
          </Link>
        </div>

        <div className="space-y-1 p-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg font-medium cursor-pointer ${
                  isActive
                    ? "bg-blue-50 dark:bg-slate-900 text-blue-600"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
