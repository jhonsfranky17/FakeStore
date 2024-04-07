import { useEffect, useState } from "react";

import useHttp from "../hooks/use-http";
import { API_BASE_URL } from "../lib/globals";

import Page from "../components/Page";
import Navbar from "../components/Navbar";
import ProductSummary from "../components/ProductSummary";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  const { isLoading, fireRequest } = useHttp();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fireRequest(`${API_BASE_URL}products`);
      if (response.isError) return alert("Something failed!");
      setProducts(response.data);
    };

    fetchProducts();
  }, [fireRequest]);

  return (
    <>
      {isLoading && <p>Loading....</p>}
      <Page>
        <Navbar />
        <div className="grid grid-cols-4 gap-3">
          {products.map((product) => (
            <ProductSummary key={product.id} product={product} />
          ))}
        </div>
      </Page>
    </>
  );
};

export default ProductListPage;
