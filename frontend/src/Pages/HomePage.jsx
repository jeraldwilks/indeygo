import React from "react";
import "../styling/homePage.css";
import CustomerReviewCarousel from "../components/CustomerReviewCarousel";
import ImageCarousel from "../components/ImageCarousel.jsx";
import { FaCanadianMapleLeaf } from "react-icons/fa";
const HomePage = () => {
  return (
    <>
      <ImageCarousel />
      <h1>Welcome To Indeygo Fundraising</h1>
      <div className="home">
        <button className="learn-more-button">
          <h4 className="text">Learn More</h4>
        </button>

        <p>Making It Easy For You To Reach Your Fundraising Goals</p>
        <p>We believe raising money should be simple and fun for volunteers</p>
        <FaCanadianMapleLeaf className="icon" />
        <p>
          Proudly Canadian: serving schools, clubs, and associations since 1996
        </p>

        <h2>
          Smart cookies create communities <span className="smiley">🙂</span>
        </h2>

        <div className="container">
          <h1>
            Our Healthy <br /> Fundraising Products
          </h1>
        </div>
        <div>
          <p>Does your group need to raise some cash?</p>
          <p>With Indeygo, It's Easy!</p>
          <ol>
            <li className="listStyle">Step 1 - Contact Us</li>
            <li>Step 2 - Run Your Fundraiser</li>
            <li>Step 3 - Deliver Product</li>
            <li>Step 4 - Count Your Cash</li>
          </ol>
        </div>
      </div>

      <CustomerReviewCarousel />
    </>
  );
};

export default HomePage;
