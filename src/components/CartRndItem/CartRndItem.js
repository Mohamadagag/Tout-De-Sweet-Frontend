import "./CartRndItem.css";
const CartRndItem = ({ image, name, price }) => {
  return (
    <div className="cart-rnd-container">
      <div>
        <img src={image} />
      </div>
      <div>
        <p>{name}</p>
        {price === 0 ? <></> : <p>AED {price}.00</p>}
      </div>
    </div>
  );
};

export default CartRndItem;
