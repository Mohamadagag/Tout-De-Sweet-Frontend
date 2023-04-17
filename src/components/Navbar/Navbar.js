import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/Logo-without-background.png";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import axios from "axios";
import "./Navbar.css";
import CartRndItem from "../CartRndItem/CartRndItem";
import Carousel from "react-multi-carousel";
import CartItem from "../CartItem/CartItem";
import { GrFormClose } from "react-icons/gr";
import { CartContext } from "../../context/CartContext";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [rndData, setRndData] = useState([]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const openCart = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getProducts();
    getRndData();
  }, [cartItems]);

  const getProducts = async () => {
    const res = await axios.get(
      `https://tout-de-sweet-backend.vercel.app/api/products/allproducts`
    );
    try {
      setProducts(res.data.response);
    } catch (error) {
      console.log(error);
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

  const cartTotal = calculateCartTotal(products, cartItems);
  const totalPrice = cartItems.reduce((acc, cartItem) => {
    const product = products.find((product) => product._id === cartItem.id);
    if (product) {
      return acc + product.price * cartItem.quantity;
    } else {
      return acc;
    }
  }, 0);

  const cartItemDetails = cartItems
    .map((cartItem) => {
      const product = products.find((product) => product._id === cartItem.id);
      if (product) {
        return " " + cartItem.quantity + " " + product.name;
      } else {
        return null;
      }
    })
    .filter((cartItem) => cartItem !== null);

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
              <a href="mailto:info@toutdesweet.ae">
                <span>
                  <AiOutlineMail className="promotion-icons" />
                </span>
                info@toutdesweet.ae
              </a>
            </p>

            <p className="second-number">
              <a href="tel:+971 501077848">
                <span>
                  <BsTelephone className="promotion-icons" />
                </span>
                +971 501077848
              </a>
            </p>
          </div>

          <div className="contact-icons">
            <div>
              <a
                href="https://www.facebook.com/toutdesweetae/"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF className="promotion-icon" />
              </a>
            </div>
            <div className="click-icon">
              <a
                href="https://www.instagram.com/toutdesweetae/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineInstagram className="promotion-tiktok-icon promotion-icon" />
              </a>
            </div>
            <div className="click-icon">
              <a
                href="https://www.tiktok.com/@toutdesweet.ae"
                rel="noreferrer"
                target="_blank"
              >
                <TbBrandTiktok className="promotion-tiktok-icon promotion-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="top-header">
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
              {cartItems &&
                cartItems.map((item) => (
                  <>
                    <div>
                      <CartItem key={item._id} {...item} />
                      <hr />
                    </div>
                  </>
                ))}
            </div>
          </div>
          <div>
            <div className="nv-you-may-like">
              <p>You may also like</p>
              <Carousel responsive={responsive}>
                {rndData &&
                  rndData.map((item, i) => {
                    return (
                      <Link to={`/shop/${item._id}`}>
                        <CartRndItem
                          key={i}
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
                  href={`https://wa.me/971501077848?text=Hi TDS, I came from your website. I want to order ${cartItemDetails}`}
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
            <img src={Logo} alt="logo" draggable={false} />
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
