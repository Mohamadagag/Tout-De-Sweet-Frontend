import { useEffect, useState } from "react";
import Logo from "../../assets/Logo-without-background.png";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import axios from "axios";
import "./Navbar.css";
import CartRndItem from "../CartRndItem/CartRndItem";
import Carousel from "react-multi-carousel";
import CartItem from "../CartItem/CartItem";
import { GrFormClose } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";

import {
  fetchProductsPending,
  fetchProductsFulfilled,
  fetchProductsFailed,
} from "../../redux/slices/productsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rndData, setRndData] = useState([]);
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const openCart = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getProducts();
    getRndData();

    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cartItems]);

  const getProducts = async () => {
    dispatch(fetchProductsPending());
    try {
      const res = await axios.get(
        `https://tout-de-sweet-backend.vercel.app/api/products/allproducts`
      );
      dispatchEvent(fetchProductsFulfilled(res.data.response));
    } catch (error) {
      console.log(error);
      dispatchEvent(fetchProductsFailed(error.message));
    }
  };

  function calculateCartTotal(products, cartItems) {
    let total = 0;
    for (const item of cartItems) {
      const product = products.find((p) => p._id === item.id);
      if (product) {
        total += product.price * item.quantity;
      }
    }
    return total;
  }

  const cartTotal = cartItems.reduce((total, cartItem) => {
    const product = products.find((product) => product._id === cartItem.id);
    console.log("Products:", products);
    return product ? total + product.price * cartItem.quantity : total;
    console.log("Cart Items:", cartItems);
    console.log("Cart Total Calculation:", cartTotal);
  }, 0);

  const totalPrice = cartItems.reduce((acc, cartItem) => {
    const product = products.find((product) => product._id === cartItem.id);
    if (product) {
      return acc + product.price * cartItem.quantity;
    } else {
      return acc;
    }
  }, 0);

  const cartItemDetails = cartItems.map((cartItem) => {
    const product = products.find((product) => product._id === cartItem.id);
    return product ? `${cartItem.quantity} ${product.name}` : null;
  });

  const getRndData = async () => {
    const res = await axios.get(
      `https://tout-de-sweet-backend.vercel.app/api/products/randomfive`
    );
    try {
      setRndData(res.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="header">
      <div className={isScrolled ? "hide-top-section" : "show-top-section"}>
        <div className="promotion-container">
          <div className="promotion-section-numbers">
            <p>
              <a href="#">
                <span>
                  <AiOutlineMail className="promotion-icons" />
                </span>
                info@toutdesweet.ae
              </a>
            </p>

            <p className="second-number">
              <a href="#">
                <span>
                  <BsTelephone className="promotion-icons" />
                </span>
                +971 501077848
              </a>
            </p>
          </div>

          <div className="contact-icons">
            <div>
              <a href="#" rel="noreferrer" target="_blank">
                <FaFacebookF className="promotion-icon" />
              </a>
            </div>
            <div className="click-icon">
              <a href="#" rel="noreferrer" target="_blank">
                <AiOutlineInstagram className="promotion-tiktok-icon promotion-icon" />
              </a>
            </div>
            <div className="click-icon">
              <a href="#" rel="noreferrer" target="_blank">
                <TbBrandTiktok className="promotion-tiktok-icon promotion-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="top-header">
        <a href="/wishList" className="wishList">
          <CiHeart className="wishList-btn" />
        </a>
        <div>
          <Cart handleClick={openCart} />
        </div>
      </div>
      <div className={`${isOpen ? "mask_opened" : ""}`}>
        <div className={`cart ${isOpen ? "active-cart" : ""}`}>
          <div>
            <div className="cart-title">
              <h3>Shopping cart</h3>
              <span>
                <GrFormClose
                  className="close-icon"
                  onClick={() => setIsOpen(false)}
                />
              </span>
            </div>
            <hr />
            <div className="cart-products">
              {cartItems.map((item) => (
                <div key={item._id}>
                  <CartItem {...item} />
                  <hr />
                </div>
              ))}
            </div>
          </div>
          <div className="cart-btm-container">
            <div className="nv-you-may-like">
              <p>You may also like</p>
              <Carousel responsive={responsive}>
                {rndData &&
                  rndData.map((item) => {
                    return (
                      <Link
                        to={`/shop/${item._id}`}
                        key={item._id}
                        onClick={() => setIsOpen(false)}
                      >
                        <CartRndItem
                          image={item.image}
                          name={item.name}
                          price={item.price}
                        />
                      </Link>
                    );
                  })}
              </Carousel>
            </div>
            <div className="bottom-cart-container">
              <div className="total-container">
                <p>
                  Total : <span>AED {cartTotal}.00</span>
                </p>
              </div>
              <div className="checkout-container">
                <a
                  target="_blank"
                  href={`https://wa.me/#?text=Hi TDS, I came from your website. I want to order ${cartItemDetails}`}
                  className={cartTotal === 0 ? "disabled" : ""}
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className={"logo"}>
          <NavLink to="/">
            <img rel="preload" src={Logo} alt="logo" draggable={false} />
          </NavLink>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/shop">E-SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/find-us">FIND US</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
