import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Findus from "./pages/Findus/Findus";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Notfound from "./pages/Notfound/Notfound";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/find-us" element={<Findus />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <FloatingWhatsApp
        className="footer-whats"
        phoneNumber="971501077848"
        accountName="Tout De Sweet"
        allowEsc
        allowClickAway
      />
    </div>
  );
}

export default App;
