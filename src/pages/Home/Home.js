import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HomeProduct from "../../components/HomeProduct/HomeProduct";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "../../components/Accordion/Accordion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../assets/TDS-HEADER N IMAGES_our concept.png";
import image2 from "../../assets/TDS-HEADER N IMAGES_our value 3.png";
import image3 from "../../assets/team.png";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";

const Home = () => {
  const [product, setProduct] = useState([]);

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

  useEffect(() => {
    getLastProducts();
  }, []);

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
      <Navbar />
      <div className="home-container">
        <div>
          <CarouselComponent />
        </div>

        <div className="everyday">
          <h1>Experience the cake and desserts artistry</h1>
          <p>
            Tout de Sweet is the manifestation of a passion to create and offer
            exceptional and artisanal cakes and desserts. It's where the finest
            ingredients and lightest feelings meet and merge into beautiful
            creations of unique taste and elegant image. Every color, every
            smell, and every flavor will take you to mystifying places of
            belonging.
          </p>
        </div>
        <div>
          <div className="home-grid">
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
        </div>

        <div className="three-images">
          <Accordion
            image={image1}
            title={"OUR CONCEPT"}
            description={
              "At Tout de Sweet, we offer 100% handcrafted cakes and delights, made from quality raw products without preservatives and using first-in-class ingredients. We prepare our desserts daily to ensure they are offered at all times fresh and to the entire satisfaction of our clients. All our recipes are exceptionally built after rounds and rounds of trial and tasting till full “taste and look” satisfaction."
            }
          />

          <Accordion
            image={image2}
            title={"OUR VALUES"}
            description={
              "In everything we create, we aim to balance “less sugar and less gluten” with “great taste”. We also consider seasonality factor and availability of quality ingredients in every item we prepare, and every time we come up with a new creation. And throughout the process we look for unique flavors and textures combinations beside creative and elegant finishes. Note: all our products are also pregnant-friendly!"
            }
          />
          <Accordion
            image={image3}
            title={"OUR TEAM"}
            description={
              "Our chefs are of the highest caliber of skillsets, creativity, and attention to details assuring the consistent quality of our products and the regular addition of what is new, different, and unique. Our team's passion for both baking and art makes of Tout de Sweet a distinctive desserts artistry and culinary experience beyond just a great pastry store."
            }
          />
        </div>

        <div>
          <div className="findus-section">
            <h1>FIND US</h1>
            <p>We are Located in Shop 14, Block 4, Wasl Square, Dubai-U.A.E.</p>
          </div>
          <div className="findus-map">
            <iframe
              title="ToutDeSweet Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.534106585011!2d55.23520566523074!3d25.18520451747383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d6ee219c35%3A0x372e42ea657fd673!2sTout%20De%20Sweet!5e0!3m2!1sen!2slb!4v1674683219240!5m2!1sen!2slb"
            ></iframe>
            <div className="under-map">
              <div className="under-map-grid">
                <div className="single-under-map-item">
                  <div className="single-under-map-item-img">
                    <img src={pic1} />
                  </div>
                  <div className="single-under-map-item-desc">
                    <h4>Delivery - Cakes & Big orders</h4>
                    <p>
                      Our signature cakes can be pre-ordered upon 2 to 3 days
                      earlier notice, via either direct phone call or whatsapp
                      message. Cakes and big orders can be delivered across all
                      Dubai via our delivery partner.
                    </p>
                  </div>
                </div>
                <div className="single-under-map-item">
                  <div className="single-under-map-item-img">
                    <img src={pic2} />
                  </div>
                  <div className="single-under-map-item-desc">
                    <h4>Delivery - Desserts & Bites</h4>
                    <p>
                      Our tartes, eclairs, and other delights are available for
                      delivery via delivery aggregator “Deliveroo” or for
                      pick-up by simply referring directly to our shop.
                    </p>
                  </div>
                </div>
                <div className="single-under-map-item">
                  <div className="single-under-map-item-img">
                    <img src={pic3} />
                  </div>
                  <div className="single-under-map-item-desc">
                    <h4>Catering events</h4>
                    <p>
                      Tout de Sweet caters for the different types of events in
                      Dubai whether weddings, birthdays and celebrations,
                      business conferences, or others. Please reach out to us
                      via contact details shared on our website.
                    </p>
                  </div>
                </div>
                <div className="single-under-map-item">
                  <div className="single-under-map-item-img">
                    <img src={pic4} />
                  </div>
                  <div className="single-under-map-item-desc">
                    <h4>Hosting events</h4>
                    <p>
                      We can also host small events such as high-tea gatherings,
                      Pop-up exhibitions and others in our homy and cozy venue
                      located in Al Wasl - Dubai. We are always happy to discuss
                      with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
