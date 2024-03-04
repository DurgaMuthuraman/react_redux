import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../feature/cartSlice";

const Product = ({ product }: any) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button
        onClick={() => {
          dispatch(addToCart(product));
          setToggle((current) => !current);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
