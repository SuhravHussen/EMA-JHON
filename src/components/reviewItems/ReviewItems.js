import React from 'react';
import './reviewItems.css'
const ReviewItems = (props) => {
   
    
    const {name , quantity, img, key} = props.data;
    
    return (
        <div className="productDiv">
           <img src={img} alt=""/>
           <div className="Singleproduct"> 
            <h4>{name}</h4>
            <h5>Quantity: {quantity}</h5>
            <button onClick={(() =>props.onClick(key))} className=""> Remove</button>
            </div>
          
        </div>
      
    );
};

export default ReviewItems;