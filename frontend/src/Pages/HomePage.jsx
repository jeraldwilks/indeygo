import React from "react";
import "../styling/homePage.css";
import CustomerReviewCarousel from "../components/CustomerReviewCarousel";
import ImageCarousel from "../components/ImageCarousel.jsx";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import CustomizedDialogs from "../components/CustomizedDialogs";
import InfoContactUs from "../components/InfoContactUs";
import InfoRunFundraiser from "../components/InfoRunFundraiser";

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
                <div style={{ marginBottom: "50px" }}>Step 1</div>

                <Box
                  sx={{
                    border: "5px dotted #0b4d83",
                    borderRadius: "25px",
                    p: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="./images/step1.png"
                    alt="Step 1"
                    style={{ width: "150px", height: "150px" }}
                  />
                </Box>
                <div style={{ marginTop: "50px" }}>
                  <InfoContactUs />
                </div>
              </li>
            </div>
            <div className="step">
              {/* Step 2 Rendering */}
              <li>
             
                  <div style={{ marginTop: "0px" }}>
                    <InfoRunFundraiser />
                  </div>
                
              </li>
            </div>

            <div className="step">
              {/* Step 3 Rendering */}
              <li>
                <div style={{ marginBottom: "50px" }}>Step 3</div>
                <a href="/ProductDeliveryInfo">
                  <Box
                    sx={{
                      border: "5px dotted #0b4d83",
                      borderRadius: "25px",
                      p: "8px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="./images/step3.png"
                      alt="Step 3"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </Box>
                  <div style={{ marginTop: "50px" }}>
                    <Button
                      className="listStyle"
                      style={{ backgroundColor: "#0b4d83", color: "white" }}
                    >
                      Deliver Product
                    </Button>
                  </div>
                </a>
              </li>
            </div>

            <div className="step">
              {/* Step 4 Rendering */}
              <li>
                <div style={{ marginBottom: "50px" }}>Step 4</div>
                <a href="/CountCashInfo">
                  <Box
                    sx={{
                      border: "5px dotted #0b4d83",
                      borderRadius: "25px",
                      p: "8px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="./images/step4.png"
                      alt="Step 4"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </Box>
                  <div style={{ marginTop: "50px" }}>
                    <Button
                      className="listStyle"
                      style={{ backgroundColor: "#0b4d83", color: "white" }}
                    >
                      Count Your Cash
                    </Button>
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
