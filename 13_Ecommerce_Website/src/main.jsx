import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Cart from "./pages/Cart.jsx";
import Products from "./pages/Products.jsx";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { DataProvider } from "./context/DataContext.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import CategoryProducts from "./pages/CategoryProducts.jsx";
import Protected from "./components/Protected.jsx";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products />} />
      <Route path="category/:category" element={<CategoryProducts />} />
      <Route path="products/:id" element={<SingleProduct />} />
      <Route path="cart" element={<Protected > <Cart /></Protected>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <CartProvider>
      <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <RouterProvider router={router}>
            {/* <App /> */}
           
          </RouterProvider>
        </ClerkProvider>
      </StrictMode>
    </CartProvider>
  </DataProvider>
);
