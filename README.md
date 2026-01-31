# 🛒 A.K E-Commerce

A modern, fully responsive **E-commerce web application** built using  
**React, Redux Toolkit, RTK Query, and Vite**.

This project focuses on real-world frontend architecture, scalable state
management, performance optimization, and clean UI/UX practices.

🔗 **Live Demo:** https://ecommerce-webapp-byamit.vercel.app/  
📦 **GitHub Repository:** https://github.com/AmitFrontEnd/Ecommerce

---

## Features

-  Product listing with dynamic routing
-  Search functionality
-  Wishlist management
-  Cart with quantity control
-  Persistent cart & wishlist using **localStorage**
-  Fast and efficient data fetching with **RTK Query**
-  Fully responsive UI (mobile, tablet & desktop)
-  Dark mode support
-  Toast notifications for user actions
-  Client-side routing with **React Router**

---

##  Tech Stack

### Frontend
- **React (Vite)**
- **Redux Toolkit**
- **RTK Query**
- **React Router DOM**
- **Tailwind CSS**
- **Lucide Icons**
- **Sonner (Toast Notifications)**

### State Management
- Global state handled using **Redux Toolkit**
- API calls managed via **RTK Query**
- Cart & Wishlist persisted using **localStorage**

---

## 🛒 Cart & Wishlist Persistence

- Cart and Wishlist data are stored in **localStorage**
- Redux store is **preloaded from localStorage** on application startup
- Any update to cart or wishlist automatically syncs back to localStorage

```js
preloadedState: {
  cartItems: loadFromLocalStorage("cart"),
  wishlist: loadFromLocalStorage("wishList"),
}
Routing & Deployment
Client-side routing implemented using React Router

Refresh and direct URL access issues fixed on Vercel using rewrite rules

vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
🧪 Installation & Setup
# Clone the repository
git clone https://github.com/AmitFrontEnd/Ecommerce

# Navigate to the project directory
cd Ecommerce

# Install dependencies
npm install

# Start the development server
npm run dev
📦 Production Build
npm run build
An optimized production build is generated using Vite.

What I Learned
Building a real-world architecture using Redux Toolkit

Efficient API handling with RTK Query

Persisting Redux state with localStorage

Performance optimization using useMemo

Handling client-side routing issues in production

Creating clean, responsive UI using Tailwind CSS

Future Improvements
User authentication

Payment gateway integration

Admin dashboard

Order history

Product filtering and sorting

Acknowledgements
Fake Store API / Public APIs

Redux Toolkit Documentation

Tailwind CSS

⭐ If you like this project, consider giving it a star — it really helps!

