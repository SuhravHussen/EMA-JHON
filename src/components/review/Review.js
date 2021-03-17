import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import './review.css'
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
} from "../../utilities/databaseManager";
import Cart from "../cart/cart";
import ReviewItems from "../reviewItems/ReviewItems";
import happyImage from "../../utilities/images/giphy.gif";
import { useHistory } from "react-router-dom";

const Review = () => {
  const history = useHistory();
  const checkOut = () => {
   history.push("/shipment");
  };

  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const removeProduct = (key) => {
    const remainingProduct = cart.filter((pd) => pd.key !== key);
    setCart(remainingProduct);
    removeFromDatabaseCart(key);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const thankYou = <img src={happyImage} alt="" />;

  return (
    <div className="shop-container">
      <div className="products">
        {cart.map((item) => (
          <ReviewItems
            onClick={removeProduct}
            key={item.key}
            data={item}
          ></ReviewItems>
        ))}
        {orderPlaced && thankYou}
      </div>
      <div className="cart">
        <Cart data={cart}>
          <button onClick={checkOut} className="main-button btn">
            check Out order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
