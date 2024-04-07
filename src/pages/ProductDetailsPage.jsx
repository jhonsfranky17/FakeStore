import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_BASE_URL } from "../lib/globals";
import useHttp from "../hooks/use-http";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  const { isLoading: isLoadingProduct, fireRequest: loadProduct } = useHttp();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await loadProduct(
        `${API_BASE_URL}products/${productId}`
      );
      if (response.isError) return alert("Something went wrong");
      console.log(response);
      setProduct(response.data);
    };

    fetchProduct();
  }, [productId, loadProduct]);

  return (
    <>
      {isLoadingProduct && <p>Loading...</p>}
      <div>{product?.title}</div>
    </>
  );
};

export default ProductDetailsPage;
