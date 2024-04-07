import { Routes, Route, Navigate } from "react-router-dom";

import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />

      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>
  );
};

export default App;
