import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./CartItem.css";
import { GrFormAdd } from "react-icons/gr";
import { CartContext } from "../../context/CartContext";
import { MdRemove } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";

const CartItem = ({ id, quantity }) => {
  const [itemId, setItemId] = useState("");
  const someid = id;

  const { IncreseCartQuantity, DecreseCartQuantity, removeItemFromCart } =
    useContext(CartContext);

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
        <img src={itemId.image} />
      </div>
      <div>
        <p>{itemId.name}</p>
        <span className="cart-item-price">
          {itemId.price === 0 ? <></> : <>AED {itemId.price}.00</>}
        </span>
        <div className="cart-add-rm-container">
          <button
            onClick={() => DecreseCartQuantity(id)}
            className="cart-icons"
          >
            <MdRemove />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => IncreseCartQuantity(id)}
            className="cart-icons"
          >
            <GrFormAdd className="cart-icons" />
          </button>
        </div>
        <div className="remove-cart-item">
          <TfiTrash
            className="remove-cart-item-icon"
            onClick={() => removeItemFromCart(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
