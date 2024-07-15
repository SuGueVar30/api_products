import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import StorePage from "./pages/StorePage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import ProductsProvider from "./contexts/ProductsContext";
import CartProvider from "./contexts/CartContext";

export default function App() {
  return (
    <div className="w-full h-full">
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}
