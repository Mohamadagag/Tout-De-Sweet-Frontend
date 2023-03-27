import HomeProductSkeleton from "./HomeProductSkeleton";
import "./Product.css";

const HomeSkeletonGrid = () => {
  return (
    <div className="shop-container">
      <div className="skeleton-grid">
        <HomeProductSkeleton />
        <HomeProductSkeleton />
        <HomeProductSkeleton />
        <HomeProductSkeleton />
        <HomeProductSkeleton />
        <HomeProductSkeleton />
        <HomeProductSkeleton />
        <HomeProductSkeleton />
      </div>
    </div>
  );
};

export default HomeSkeletonGrid;
