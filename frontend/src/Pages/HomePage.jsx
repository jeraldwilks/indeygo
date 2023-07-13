import React from "react";
import "../styling/homePage.css";
import CustomerReviewCarousel from "../components/CustomerReviewCarousel";
import ImageCarousel from "../components/ImageCarousel.jsx";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { Button } from "@mui/material";
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
          <ol className="steps">
            <div className="step">
              <li>
                <div>Step 1</div>
                <a href="/About">
                  <div>
                    <img src="./images/step1.png" alt="Step 1" />
                  </div>
                  <div>
                    <Button className="listStyle">Contact Us</Button>
                  </div>
                </a>
              </li>
            </div>

            <div className="step">
              <li>
                <div>Step 2</div>
                <a href="/FundRaiserInfo">
                  <div>
                    <img src="./images/step2.png" alt="Step 2" />
                  </div>
                  <div>
                    <Button className="listStyle">Run Your Fundraiser</Button>
                  </div>
                </a>
              </li>
            </div>

            <div className="step">
              <li>
                <div>Step 3</div>
                <a href="/About">
                  <div>
                    <img src="./images/step3.png" alt="Step 3" />
                  </div>
                  <div>
                    <Button className="listStyle">Deliver Product</Button>
                  </div>
                </a>
              </li>
            </div>

            <div className="step">
              <li>
                <div>Step 4</div>
                <a href="/About">
                  <div>
                    <img src="./images/step4.png" alt="Step 4" />
                  </div>
                  <div>
                    <Button className="listStyle">Count Your Cash</Button>
                  </div>
                </a>
              </li>
            </div>
          </ol>
        </div>
      </div>

      <CustomerReviewCarousel />
    </>
  );
};

export default HomePage;
