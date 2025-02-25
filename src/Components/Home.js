import React from "react";
import About from "./About";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/organic-Food-removebg-preview.png";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Team from "./Team";

const Home = () => {
  return (
    <main className="p-4 mt-16">
      <div className="home-container">
      {/* Home Banner Section */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            800 Million People Go Hungry While Food Goes to Waste
          </h1>
          <p className="primary-text">
            Every year, millions of meals end up in landfills while families struggle to find their next meal. 
            That’s not just waste—it’s a missed opportunity to help.
          </p>
          <Link to="/login" className="secondary-button">
  Order Now <FiArrowRight />
</Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner" />
        </div>
      </div>

      {/* Other Sections to be Visible on Home Page */}
      <About />  
      <Team/>     {/* ✅ About section appears on Home */}
      <Work />        {/* ✅ Work section appears on Home */}
      <Testimonial /> {/* ✅ Testimonials section appears on Home */}
      <Contact />     {/* ✅ Contact section appears on Home */}
      <Footer />      {/* ✅ Footer appears on Home */}
    </div>
    </main>
  );
};

export default Home;
