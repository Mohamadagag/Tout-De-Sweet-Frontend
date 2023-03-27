import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.css";
import Slide1 from "../../assets/Slide1.png";
import Slide2 from "../../assets/Slide2.png";
import Slide3 from "../../assets/Slide3.png";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">ENTREMET</h3>
          <p className="carousel-description">
            The finest and artisanal handcrafted cakes. Experience the different
            layers, textures and flavors married together in each cake.
          </p>
          <Link to="/shop" className="carousel-order-btn">
            ORDER NOW
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Slide3} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">VIENNOISERIES</h3>
          <p className="carousel-description">
            Have special weekend mornings with our exceptional butter
            croissants, pains au chocolat, almond croissants, and others.
          </p>
          <Link to="/shop" className="carousel-order-btn">
            ORDER NOW
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">TARTS</h3>
          <p className="carousel-description">
            A crispy golden crust with diverse and creative twists of mousses or
            cremeux.
          </p>
          <Link to="/shop" className="carousel-order-btn">
            ORDER NOW
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
