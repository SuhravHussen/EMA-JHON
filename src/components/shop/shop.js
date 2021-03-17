import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/";
import Cart from "../cart/cart";
import Product from "../products/Products";
import { Link } from 'react-router-dom';
import "./shop.css";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";

const Shop = () => {
  let first10data = fakeData.slice(0, 10);
  const [products, setproducts] = useState(first10data);
  const [cart, setCart] = useState([]);

  useEffect(() => {
   const savedCart = getDatabaseCart();
   const productKeys = Object.keys(savedCart)

   const previousCart = productKeys.map(pdKey => {
   const product = fakeData.find((pd) => pd.key === pdKey)
   product.quantity = savedCart[pdKey]
   return product
   })
   setCart(previousCart)
  },[])

  const HandleCart = (p) => {
    const sameProduct = cart.find((pd) => pd.key === p.key);
    let quantity = 1;
    let newCart;
    if (sameProduct) {
      quantity = sameProduct.quantity + 1;
      sameProduct.quantity = quantity;
      const others = cart.filter((pd) => pd.key !== p.key);
      newCart = [...others, sameProduct];
    } else {
      p.quantity = quantity;
      newCart = [...cart, p];
    }
    setCart(newCart);
    addToDatabaseCart(p.key, quantity);
  };

  return (
    <div className="shop-container">
      <div className="products">
        {products.map((e) => (
          <div>
            <Product
              showCartButton={true}
              event={HandleCart}
              product={e}
              key={e.key}
            ></Product>
          </div>
        ))}
      </div>
      <div className="cart">
        <Cart data={cart}>
              <Link to="/review">
                 <button className='main-button'>Review Order</button>
               </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
