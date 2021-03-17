import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Products from "../products/Products";

const ProductDetails = () => {
  const { ProductKey } = useParams();
  const product = fakeData.find((pd) => pd.key === ProductKey);

  return (
    <div>
      <Products showCartButton={false} product={product}></Products>
    </div>
  );
};

export default ProductDetails;
