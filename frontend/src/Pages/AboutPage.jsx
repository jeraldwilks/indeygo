import React from "react";
import "../styling/aboutPage.css";
import { Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center", // Center the content horizontally
          margin: "0 75px", // Add margin on either side to leave space
        }}
      >
        <Box>
          <div class="about">
            <h3>About Us</h3>
            <br />
            <p1>
              Indeygo is a 100% Canadian-owned and operated business. We are
              committed to sourcing over 70% of our ingredients locally and from
              Canadian suppliers.
            </p1>
            <br />
            <p2>
              Since 1996, Indeygo Fundraising has provided unparalleled service
              while offering an extensive variety of Canadian-made products
              making it easy for schools and organizations across Canada to
              reach their fundraising goals. We take pride in knowing our
              quality products and excellent service provide a stress-free and
              profitable fundraising option for groups in need of raising money.
            </p2>
            <br />
            <p3>
              We understand your fundraising needs and have helped thousands of
              groups raise millions of dollars! Our message is clear, we want
              you to succeed and the Indeygo Fundraising Team is here to support
              you every step of the way by providing the tools you need to run a
              successful fundraiser, free of charge.{" "}
            </p3>
            <br />
            <br />
            <h3>And about that name…..</h3>
            <p1>People often ask-how did the name Indeygo come about?</p1>
            <br />
            <p2>
              Well, here’s what unfolded. The recipes were good to go. The
              packaging was dialled. Our production facility was soon to be up
              and running. Everything was in place but the name. We needed one,
              we needed it soon, and we wanted it to be fun and catchy.
            </p2>
            <br />
            <p3>
              Lisa figured the best way to do this was to get her friends with
              creative minds to help out. She decided that the best way to aid
              in the creative thinking process was a quick stop to the local
              beer store. Some fine Canadian brew was purchased, friend’s
              glasses were filled and the dialogue started. A half hour later a
              discussion around the favourite colour of blue started (aka
              indigo) which morphed into in..di..go…….in..dey..go….. to
              in-dey-go into the oven!
            </p3>
            <br />
            <br />
            <h3>Giving Back</h3>
            <p1>
              At Indeygo, one measure of our success is our ability to support
              community groups. Every year we donate 1% of our sales to
              non-profit organizations we care about. To date, we are proud to
              say we have donated over $100,000 to a variety of non-profits;
              environmental groups, animal rescue organizations, along with
              women’s and children’s charities.
            </p1>
            <br />
            <br />
            <img
              src="./images/Bear.jpeg"
              alt="About Us"
              className="about-image"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <br />
            <br />
            <p1>Contact us today to organize your fundraiser:</p1>
            <br />
            <br />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box style={{ display: "flex", alignItems: "center" }}>
                <CallIcon />
                <p1 style={{ marginLeft: "5px" }}>
                  877-463-3946 (1-877-INDEYGO)
                </p1>
              </Box>
              <br />
              <Box style={{ display: "flex", alignItems: "center" }}>
                <EmailIcon />
                <p1 style={{ marginLeft: "5px" }}>info@indeygo.com</p1>
              </Box>
            </Box>
          </div>
        </Box>

        <Box style={{ border: "2px solid yellow", height: "1200px", marginTop:"100px" }}>
          <div
            style={{ flexDirection: "column", gap: "10px", padding: "10px" }}
          >
            <img
              src="./images/Cathy.png"
              alt="Cathy Harris"
              className="about-image"
              style={{ width: "200px", height: "200px" }} // Adjust the width and height as needed
            />
            <p1>Cathy Harris </p1>
            <p1>Owner</p1>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <img
              src="./images/Andy.png"
              alt="Andy Harris"
              className="about-image"
              style={{ width: "200px", height: "200px" }} // Adjust the width and height as needed
            />
            <p1>Andy Harris </p1>
            <p1>Co-Owner</p1>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <img
              src="./images/Lisa.jpeg"
              alt="Lisa Downing"
              className="about-image"
              style={{ width: "200px", height: "200px" }} // Adjust the width and height as needed
            />
            <p1>Lisa Downing </p1>
            <p1>Founder</p1>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <img
              src="./images/Shanne.jpeg"
              alt="Shanne Leavitt"
              className="about-image"
              style={{ width: "200px", height: "200px" }} // Adjust the width and height as needed
            />
            <p1>Shanne Leavitt </p1>
            <p1>Co-FOunder</p1>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default About;
