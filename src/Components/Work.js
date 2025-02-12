import React from "react";
import PickMeals from "../Assets/balanced-diet.png";
import ChooseMeals from "../Assets/navigator.png";
import DeliveryMeals from "../Assets/bell.png";
import ImpactTrack from "../Assets/bar-graph.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Food Donation Matching",
      text: " Connects food donors with local organizations and individuals in need, ensuring surplus food is distributed to those who need it most.",
    },
    {
      image: ChooseMeals,
      title: "Real-Time Location-Based Matching",
      text: "Uses location services to help users find the nearest food distribution points and donation centers quickly and efficiently.",
    },
    {
      image: DeliveryMeals,
      title: "Instant Notifications",
      text: "Sends real-time alerts about available food donations, pickup schedules, and important updates to keep users informed.",
    },
    {
      image: ImpactTrack,
      title: "Impact Tracking",
      text: "Provides insights on the amount of food saved, meals distributed, and the overall impact on the community through data reports.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">Description</h1>
        <p className="primary-text">
        Redifu makes food sharing easy and efficient by connecting donors with those in need. Our platform ensures seamless coordination, real-time updates, and impact tracking to reduce food waste and fight hunger.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
