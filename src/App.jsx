import { Routes, Route, Navigate } from "react-router-dom";

import ProductListPage from "./pages/ProductListPage";

const App = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductListPage />} />

      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>
  );
};

export default App;
