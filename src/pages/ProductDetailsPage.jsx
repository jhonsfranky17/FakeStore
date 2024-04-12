import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaCartArrowDown, FaStar } from "react-icons/fa6";

import { API_BASE_URL } from "../lib/globals";
import useHttp from "../hooks/use-http";
import cartContext from "../store/cart-context";

import Page from "../components/Page";
import Input from "../components/Input";
import Button from "../components/Button";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useContext(cartContext);

  const { productId } = useParams();

  const { isLoading: isLoadingProduct, fireRequest: loadProduct } = useHttp();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await loadProduct(
        `${API_BASE_URL}products/${productId}`
      );
      if (response.isError) return alert("Something went wrong");
      setProduct(response.data);
    };

    fetchProduct();
  }, [productId, loadProduct]);

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const renderRating = (rating = 0) => {
    const roundedRating = Math.round(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      i >= roundedRating
        ? stars.push(<FaStar color="#ccc" />)
        : stars.push(<FaStar color="orange" />);
    }
    return stars;
  };

  const addToCartHandler = () => {
    addToCart({ ...product, quantity: +quantity });
    setQuantity(0);
  };

  return (
    <>
      {isLoadingProduct && <p>Loading...</p>}
      <Page>
        <div className="flex w-full justify-around gap-3">
          <img src={product?.image} alt={product?.title} />
          <div className="flex flex-1 flex-col gap-2">
            <h1 className="uppercase text-emerald-500 font-semibold">
              In Stock
            </h1>
            <h1 className="text-2xl font-semibold text-slate-950">
              {product?.title}
            </h1>
            <div className="flex items-center gap-1">
              {renderRating(product?.rating?.rate).map((star) => star)}
              <p className="text-slate-500 text-xs">
                ({product?.rating?.count} reviews)
              </p>
            </div>
            <h1 className="text-2xl font-semibold text-slate-950">
              ${product?.price}
            </h1>
            <p className="text-slate-500 text-base">{product?.description}</p>
            <Input
              onChange={quantityChangeHandler}
              config={{
                type: "number",
                min: 0,
                max: 5,
                placeholder: "0",
              }}
            />
            <Button onClick={addToCartHandler} startIcon={<FaCartArrowDown />}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Page>
    </>
  );
};

export default ProductDetailsPage;
