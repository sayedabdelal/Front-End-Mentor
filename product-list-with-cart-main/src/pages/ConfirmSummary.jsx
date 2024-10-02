import React from "react";
import ConfirmImg from "./../assets/images/icon-order-confirmed.svg?react";
import { useDispatch, useSelector } from "react-redux";
 
import {cartActions} from "./../store/cart-slice";

// eslint-disable-next-line react/prop-types
function ConfirmSummary({TotalPrice}) {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    

    const handleClear = () => { 
        
        dispatch(cartActions.clearCart());
    }
  return (
    <>
      <div className="confirmSummary">
        <img
          src= {ConfirmImg}
          className="orderConfirmedImage"
        />
        <h1 className="confirmHeader">Order Confirmed</h1>
        <p className="enjoy">We hope you enjoy your food!</p>
        <div className="orderedProducts">
        
            {cart.items.map((item) => (

            <>
                  <div className="productOrderedSummary">
                 <img
                 src= {`${item.img}`}
                 className="thumbnail"
                 alt={item.name}
               />
               <div className="nameAndPrice">
                 <p className="nameOrderedProduct">{item.name}</p>
                 <div className="priceOrderSummary">
                   <span className="pickedAmount">{item.quantity}x</span>
                   <span className="pickedPrice">@ ${item.price}</span>
                 </div>
               </div>
               <p className="total">${item.totalPrice}</p>
              
               </div>
               <hr className="articleSeperator"></hr>
            </>
            ))}
           
        
        

         
          <div className="orderTotal">
            <p className="orderTotalText">Order Total</p>
            <p className="orderTotalPrice">${TotalPrice}</p>
          </div>
        </div>
        <div className="confirmButton" 
            onClick={ handleClear}
        >Start new Order</div>
      </div>
    </>
  );
}

export default ConfirmSummary;
