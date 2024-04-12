import { Routes, Route, Navigate } from "react-router-dom";

import CartProvider from "./components/providers/CartProvider";

import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />

        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
