import { LazyLoadImage } from "react-lazy-load-image-component";
import HomeProductSkeleton from "./HomeProductSkeleton";
import "./Product.css";

const Product = ({ name, price, image, isLoading }) => {
  return isLoading ? (
    <HomeProductSkeleton />
  ) : (
    <div className="shop-product">
      <div className="shop-product-image">
        <LazyLoadImage width={200} height={150} src={image} alt={name} />
      </div>
      <span className="product-name">{name}</span>
      {price === 0 ? null : (
        <span className="product-price">AED {price}.00</span>
      )}
    </div>
  );
};

export default Product;
