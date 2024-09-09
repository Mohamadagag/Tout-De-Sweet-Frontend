import { useEffect, useState } from "react";
import axios from "axios";
import "./CartItem.css";
import { GrFormAdd } from "react-icons/gr";
import { MdRemove } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";
import { useSelector, useDispatch } from "react-redux";

import {
  increaseCartQuantity,
  decreaseCartQuantity,
  removeItemFromCart,
} from "../../redux/slices/cartSlice";

const CartItem = ({ id, quantity }) => {
  const dispatch = useDispatch();
  const [itemId, setItemId] = useState("");
  const someid = id;

  quantity = useSelector((state) => {
    const item = state.cart.cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      `https://tout-de-sweet-backend.vercel.app/api/products/${someid}`
    );
    try {
      setItemId(res.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={itemId.image} alt={itemId.name} />
      </div>
      <div>
        <p>{itemId.name}</p>
        <span className="cart-item-price">
          {itemId.price === 0 ? <></> : <>AED {itemId.price}.00</>}
        </span>
        <div className="cart-add-rm-container">
          <button
            onClick={() => dispatch(decreaseCartQuantity(id))}
            className="cart-icons"
          >
            <MdRemove />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => dispatch(increaseCartQuantity(id))}
            className="cart-icons"
          >
            <GrFormAdd className="cart-icons" />
          </button>
        </div>
        <div className="remove-cart-item">
          <TfiTrash
            className="remove-cart-item-icon"
            onClick={() => dispatch(removeItemFromCart(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
