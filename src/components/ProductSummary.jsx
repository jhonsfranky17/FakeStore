import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

import { shortenString } from "../lib/globals";

import Card from "./Card";
import Chip from "./Chip";
import Title from "./Title";
import Button from "./Button";

const ProductSummary = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <img
          className="w-full h-80 object-cover object-top rounded-sm"
          src={product.image}
          alt={product.title}
        />
        <Chip>Product Category #{product.id}</Chip>
        <Title>{product.title}</Title>
        <p className="text-slate-700">{shortenString(product.description)}</p>
        <div className="flex justify-between items-center">
          <h1 className="text-slate-950 text-lg font-semibold">
            ${product.price}
          </h1>
          <Button
            endIcon={<IoMdEye />}
            variant="text"
            onClick={() => {
              navigate("/products/" + product.id);
            }}
          >
            View More
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ProductSummary;
