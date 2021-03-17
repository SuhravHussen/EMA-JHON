import React from 'react';
import './cart.css';
const Cart = (props) => {

    const cart = props.data 
   const totalPrice = cart.reduce((total,pd)=>total+pd.price*pd.quantity,0)
   
   let shipping = 0
   if(totalPrice>35){
       shipping =4.99
   }   
   else if(totalPrice>15){
     shipping = 12.99
   }
   const tax = (totalPrice/10).toFixed(2)
   const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2) 

   return (
        <div className='cart-container'>
             <h1>Order Summary </h1>
             <h3>Product Price:${totalPrice}</h3>
               <h3>items ordered:{cart.length}</h3>
               <h3>Shipping :${shipping} </h3>
               <h3>Tax : $ {Number(tax)}</h3>
               <h3>Quantity: {cart.quantity}</h3>
               <h3>Total price: ${grandTotal}</h3>
            {
              props.children
            }
              
        </div>
    );
};

export default Cart;