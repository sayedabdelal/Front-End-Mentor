import React from "react";

import cartImge from "./../assets/images/illustration-empty-cart.svg?react";
import { useSelector } from "react-redux";
import PickedDiv from "./PickedDiv";
import carbonNeutral from "./../assets/images/icon-carbon-neutral.svg?react";
import Modal from "../UI/Modal";
import ConfirmSummary from "./ConfirmSummary";


function Cart() {
  const cart = useSelector((state) => state.cart);
  const changed = useSelector((state) => state.cart.changed);
  const [modal, setModal] = React.useState(false);

    const handleConfirm = () => { 
        setModal(true);
    }
    function handleClose() { 
        console.log("close")
        setModal(false);
    }
    const content = (
        <ConfirmSummary  TotalPrice={cart.totalPrice} />
    )
  return (
    <>
      <div className="cart" id="cart">
        <h2 className="cartHeader">Your Cart ({cart.totalQuantity})</h2>
        {changed ? (
          <>
            {cart.items.map((item, index) => (
              <React.Fragment key={index}>
                <PickedDiv
                  Name={item.name}
                  Price={item.price}
                  Quantity={item.quantity}
                  Total={item.totalPrice}
                  Id={item.id}
                />
                <hr className="articleSeperator" />
              </React.Fragment>
            ))}
            <div className="orderTotal">
              <p className="orderTotalText">Order Total</p>
              <p className="orderTotalPrice">${cart.totalPrice}</p>
            </div>
            <div className="carbonNeutral">
              <img
                src={carbonNeutral}
                className="carbonNeutralImage"
              />
              <p className="carbonNeutralText">
                This is a <b>carbon-neutral</b> delivery
              </p>
            </div>
            <div className="confirmButton" onClick={handleConfirm}>confirm order</div>
            {modal &&  <Modal onClose={handleClose}>{content}</Modal>}
          </>
        ) : (
          <>
            <img src={cartImge} className="emptyCartImage" />
            <p className="emptyCartText">Your added items will appear here</p>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
