import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          800 Million People Go Hungry While Food Goes to Waste
          </h1>
          <p className="primary-text">
          Every year, millions of meals end up in landfills while families struggle to find their next meal. That’s not just waste—it’s a missed opportunity to help.

We (yes, YOU) can do better. Redifu makes it easy to share surplus food with those who need it—quickly, legally, and sustainably.

You know that extra meal sitting in your fridge? Instead of letting it become a science experiment, list it on Redifu and make a difference!

Oh, and don’t worry—we’re keeping track of your good deeds (wink, wink).

To partner with us, reach out at partnerships@redifu.com or investors@redifu.com.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
