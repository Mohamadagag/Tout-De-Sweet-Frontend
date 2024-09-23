import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../../components/product/Product";
import axios from "axios";
import "./whishList.css";

const WishList = () => {
  const dispatch = useDispatch();
  const wishLisItems = useSelector((state) => state.wish.wishListItems);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await Promise.all(
        wishLisItems.map(async (wishItem) => {
          const response = await axios.get(
            `https://tout-de-sweet-backend.vercel.app/api/products/${wishItem.id}`
          );
          return response.data.response;
        })
      );
      setProducts(productData);
    };
    fetchProducts();
  }, [wishLisItems]);

  return (
    <div>
      <Navbar />
      <div className="whishList-container">
        <h1>My Wishlist</h1>
        <div className="whishList-grid-container">
          {products.length > 0 ? (
            products.map((product) => (
              <Link to={`/shop/${product._id}`} key={product._id}>
                <Product
                  image={product.image[0]}
                  name={product.name}
                  price={product.price}
                />
              </Link>
            ))
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishList;
