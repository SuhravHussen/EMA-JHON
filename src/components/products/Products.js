import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = (props) => {
  const { img, name, price, seller, stock, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="details">
        <Link to={"/Product/" + key}>
          {" "}
          <h2 className="name"> {name}</h2>
        </Link>
        <p className="small">
          <small>by:{seller}</small>
        </p>

        <h2>Price:${price}</h2>
        <h4>Only {stock} left in stock - order soon</h4>
       { props.showCartButton && <button onClick={() => props.event(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Add To Cart
        </button>}
      </div>
    </div>
  );
};

export default Products;
