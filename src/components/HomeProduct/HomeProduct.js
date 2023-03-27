import "./HomeProduct.css";

const HomeProduct = ({ image, name, price }) => {
  return (
    <div className="product">
      <div className="home-image-container">
        <img src={image} alt={name} />
      </div>
      <span className="name">{name}</span>
      {price === 0 ? null : <span className="price">AED {price}.00</span>}
    </div>
  );
};

export default HomeProduct;
