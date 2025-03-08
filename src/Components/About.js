import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";  
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Redifu App</p>
        <h1 className="primary-heading">
          Food Waste Is Filling Our Landfills, While People Go Hungry
        </h1>
        <p className="primary-text">
        In slum areas like Kibera, food waste is everywhere—from homes and restaurants to events, meetings, and celebrations. Perfectly good meals get tossed while families struggle to find their next one.

        It’s not just waste—it’s a missed opportunity to feed people and protect our environment. Over a third of agricultural land and water worldwide is used to produce food that never gets eaten.

        We’ve all seen it—stacks of untouched food trays at weddings, meetings, and parties. No one needs 30 leftover samosas and a mountain of rice—okay, maybe someone does. Instead of letting it go to waste, why not share it?
        </p>
        <p className="primary-text">
          That’s why we created Redifu—to connect surplus food with those who need it most.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button 
            className="watch-video-button" 
            onClick={() => setShowVideo(true)}
          >
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>

        {/* Video Popup */}
        {showVideo && (
          <div className="video-overlay" role="dialog" aria-modal="true">
            <button 
              className="close-video-button" 
              onClick={() => setShowVideo(false)}
            >
              ❌ Close
            </button>
            <video width="100%" controls autoPlay>
            <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
