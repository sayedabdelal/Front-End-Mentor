import React from "react";
import removeImge from "./../assets/images/icon-remove-item.svg?react";
import { cartActions } from "./../store/cart-slice";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
function PickedDiv({Name, Price, Quantity, Total, Id}) {
    console.log(Total)
    const dispatch = useDispatch();
  return (
    <div className="pickedDiv">
      <div className="productOrderSummary">
        <p className="cartItemName">{Name}</p>
        <div className="priceOrderSummary">
          <span className="pickedAmount">{Quantity}x</span>
          <span className="pickedPrice">@ ${Price}</span>
          <span className="pickedPriceTotal">${Total}</span>
        </div>
      </div>
      <img
        src= {removeImge}
        className="removeButton"
        alt="remove"
        onClick={() => {
          dispatch(cartActions.removeItemFinal(Id));
        }}
      />
    </div>
  );
}

export default PickedDiv;
