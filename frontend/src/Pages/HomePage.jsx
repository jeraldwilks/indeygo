import React from "react";
import "../styling/homePage.css";
import CustomerReviewCarousel from "../components/CustomerReviewCarousel";
import ImageCarousel from "../components/ImageCarousel.jsx";
import { FaCanadianMapleLeaf } from "react-icons/fa";
// import CustomizedDialogs from "../components/CustomizedDialogs";
import InfoContactUs from "../components/InfoContactUs";
import InfoRunFundraiser from "../components/InfoRunFundraiser";
import InfoProductDelivery from "../components/InfoProductDelivery";
import InfoCountCash from "../components/InfoCountCash";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ImageCarousel />
      <h1
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "48px", // Set the desired font size here (example: 24px)
          color: "#0b4d83",
          textTransform: "none",
        }}
      >
        Welcome To Indeygo Fundraising
      </h1>
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
          <h1 style={{ textTransform: "none", textAlign: "center" }}>
            Our Healthy <br /> Fundraising Products
          </h1>
        </div>
        <div>
          <br />
          <h2>Does your group need to raise some cash?</h2>
          <br />
          <br />
          <h2>With Indeygo, It's Easy!</h2>
          {/* <CustomizedDialogs /> */}
          <ol className="steps">
            <div className="step">
              {/* Step 1 Rendering */}
              <li>
                <InfoContactUs />
              </li>
            </div>
            <div className="step">
              {/* Step 2 Rendering */}
              <li>
                <InfoRunFundraiser />
              </li>
            </div>

            <div className="step">
              {/* Step 3 Rendering */}
              <li>
                <InfoProductDelivery />
              </li>
            </div>

            <div className="step">
              {/* Step 4 Rendering */}
              <li>
                <InfoCountCash />
              </li>
            </div>
          </ol>
        </div>
      </div>
        <CustomerReviewCarousel 
          style={{
            width: "100%", // Adjust the width as needed
            margin: "20px 0", // Add margin as needed
          }}
        />
      
    </>
  );
};

export default HomePage;
