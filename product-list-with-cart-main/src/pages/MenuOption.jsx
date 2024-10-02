import PropTypes from "prop-types";
import addToCart from "./../assets/images/icon-add-to-cart.svg?react";
import IncrementIcon from "./../assets/images/icon-increment-quantity.svg?react";
 
import DecrementIcon from "./../assets/images/icon-decrement-quantity.svg?react";
import { useState, useEffect } from "react";
import { cartActions } from "./../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

function MenuOption({ data }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  // Initialize allData state with updated 'changed' status based on cart state
  const [allData, setAllData] = useState(
    data.map((item, index) => ({
      ...item,
      id: index,
      changed: cart.some((cartItem) => cartItem.id === index),
      quantity: cart.find((cartItem) => cartItem.id === index)?.quantity,
    }))
  );

  // This effect updates the allData state when the cart is updated (e.g., items are added)
  useEffect(() => {
    setAllData((prevData) =>
      prevData.map((item, index) => ({
        ...item,
        changed: cart.some((cartItem) => cartItem.id === item.id),
        quantity: cart.find((cartItem) => cartItem.id === index)?.quantity,
      }))
    );
  }, [cart]);

  const handleAdd = (itemIndex) => {
    const item = allData[itemIndex];

    // Dispatch action to add the item to the cart
    dispatch(cartActions.addItemToCart(item));

    // Update local state to mark the item as changed
    setAllData((prevData) =>
      prevData.map((dataItem, index) =>
        index === itemIndex ? { ...dataItem, changed: true } : dataItem
      )
    );
  };
  function handleClickAdd(index) { 
    dispatch(cartActions.addItemToCart(allData[index]));
  }
    function handleClickDecrese(index) { 
    dispatch(cartActions.removeItemFromCart(index));
    }

  return (
    <>
      {allData.map((item, index) => (
        <div className="menuOption" key={index}>
          <img
            src={`/src/${item.image.desktop}`}
            className={item.changed ? "menuExample selected" : "menuExample"}
            alt="menu example"
          />
          {!item.changed && (
            <div className="button cartButton" onClick={() => handleAdd(index)}>
              <img src={addToCart} className="cartImage" alt="add to cart" />
              <span className="addCart">Add to Cart</span>
            </div>
          )}

          {item.changed && (
            <div className="button amountButton">
              <div className="amountChange" onClick={()=> handleClickAdd(index)}>
                <img
                  src={IncrementIcon}
                  className="incrementIcon"
                  alt="increment"
                />
               
              </div>
              <span className="amount">{item.quantity}</span>
              <div className="amountChange"  onClick={()=> handleClickDecrese(index)}>
                <img
                  src={DecrementIcon}
                  className="decrementIcon"
                  alt="decrement"
                />
              </div>
            </div>
          )}

          <p className="category">{item.category}</p>
          <p className="name">{item.name}</p>
          <p className="price">${item.price}</p>
        </div>
      ))}
    </>
  );
}

MenuOption.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
      }).isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MenuOption;
