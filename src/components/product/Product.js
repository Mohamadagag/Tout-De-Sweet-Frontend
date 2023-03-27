import "./Product.css";

const Product = ({ name, price, image, category }) => {
  return (
    <div className="shop-product">
      <div className="shop-product-image">
        <img src={image} alt={name} />
      </div>
      <span className="product-name">{name}</span>
      {price === 0 ? null : (
        <span className="product-price">AED {price}.00</span>
      )}
    </div>
  );
};

export default Product;
