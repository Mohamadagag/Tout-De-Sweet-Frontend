import Skeleton from "@mui/material/Skeleton";
import "./Product.css";

const HomeProductSkeleton = () => {
  return (
    <div>
      <div className="shop-product">
        <Skeleton variant="rectangular" width={200} height={180} />
        <Skeleton variant="text" width={150} />
        <Skeleton variant="text" width={100} />
      </div>
    </div>
  );
};

export default HomeProductSkeleton;
