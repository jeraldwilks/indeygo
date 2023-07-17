import React from "react";
import "../styling/homePage.css";
import CustomerReviewCarousel from "../components/CustomerReviewCarousel";
import ImageCarousel from "../components/ImageCarousel.jsx";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import CustomizedDialogs from "../components/CustomizedDialogs";
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
          <CustomizedDialogs />

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

      <CustomerReviewCarousel />
    </>
  );
};

export default HomePage;
