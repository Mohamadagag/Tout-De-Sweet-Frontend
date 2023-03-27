import "./RandomProducts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import HomeProduct from "../HomeProduct/HomeProduct";

const RandomProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getLastProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const getLastProducts = async () => {
    const res = await axios.get(
      "https://tout-de-sweet-backend.vercel.app/api/products/last"
    );
    try {
      setProduct(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {product.map((product) => {
          return (
            <div key={product._id}>
              <Link to={`/shop/${product._id}`}>
                <HomeProduct
                  image={product.image[0]}
                  name={product.name}
                  price={product.price}
                />
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default RandomProducts;
