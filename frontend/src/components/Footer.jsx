import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { CiFacebook } from "react-icons/ci";
import { SlSocialPintarest } from "react-icons/sl";
import { TfiTwitter, TfiInstagram } from "react-icons/tfi";

export default function StickyFooter() {
  const footerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "#f2f2f2",
    width: "100%",
    fontFamily: "inherit",
  };

  const columnStyle = {
    flex: 1,
    paddingInline: "30px",
    marginBlock: "5px",
    maxWidth: "250px",
  };

  const headingStyle = {
    fontSize: "18px",
    marginBottom: "10px",
  };

  const listItemStyle = {
    fontSize: "12",
    justifyContent: "left",
    marginBottom: "5px",
    color: "#0B4D83",
  };

  const contactInfoStyle = {
    marginBottom: "19px",
    color: "#565555",
  };

  const IconStyle = {
    justifyContent: "spaceAround",
    padding: 2,
    margin: 2,
    fontSize: 14,
    color: "#0B4D83",
  };

  const imageColumnStyle = {
    flex: 1,
    paddingInline: "10px",
    marginTop: "60px",
    marginRight: "20px",
    maxWidth: "250px",
    minWidth: "150px",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "10vh",
          }}
        >
          <div style={footerStyle}>
            <div style={imageColumnStyle}>
              <img
                src="primaryLogo.jpg"
                alt="Secondary Logo"
                style={imageStyle}
              />
              <div style={columnStyle}>
                <h2 style={headingStyle}>OUR LINKS</h2>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  <li style={listItemStyle}>About Us</li>
                  <li style={listItemStyle}>FAQ</li>
                  <li style={listItemStyle}>Blog</li>
                  <li style={listItemStyle}>Contact Us</li>
                </ul>
              </div>
            </div>
            <div style={columnStyle}>
              <h2 style={headingStyle}>CONTACT US</h2>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                <li style={contactInfoStyle}>Phone</li>
                <li style={listItemStyle}>1-877-463-3946</li>
                <li style={listItemStyle}>(1-877-INDEYGO)</li>
                <li style={contactInfoStyle}>Address</li>
                <li style={listItemStyle}>Indeygo Fundraising</li>
                <li style={listItemStyle}>P.O. Box 8346,</li>
                <li style={listItemStyle}>Canmore, AB T1W 2V1</li>
                <li style={contactInfoStyle}>Email</li>
                <li style={listItemStyle}>info@indeygo.com</li>
              </ul>
              <div style={IconStyle}>
                <a
                  style={IconStyle}
                  href="https://www.facebook.com/indeygofundraising"
                  target="_blank"
                >
                  <CiFacebook />
                </a>
                <a
                  style={IconStyle}
                  href="https://twitter.com/indeygo"
                  target="_blank"
                >
                  <TfiTwitter />
                </a>
                <a
                  style={IconStyle}
                  href="https://www.instagram.com/indeygofundraising/"
                  target="_blank"
                >
                  <TfiInstagram />
                </a>
                <a style={IconStyle} href="">
                  <SlSocialPintarest />
                </a>
              </div>
            </div>

            <div style={columnStyle}>
              <h2 style={headingStyle}>PRODUCTS</h2>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                <li style={listItemStyle}>Cookie Dough</li>
                <li style={listItemStyle}>Muffin Dough</li>
                <li style={listItemStyle}>Cinnamon & Sticky Buns</li>
                <li style={listItemStyle}>Coffee & Tea</li>
                <li style={listItemStyle}>Beef Jerky</li>
                <li style={listItemStyle}>Harvest Bundle Veggies</li>
                <li style={listItemStyle}>Spring Planters And Herbs</li>
                <li style={listItemStyle}>Doggie Dough</li>
              </ul>
            </div>
            <div style={columnStyle}>
              <h2 style={headingStyle}>COORDINATOR INFO</h2>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                <li style={listItemStyle}>How Does A Fundraiser Work?</li>
                <li style={listItemStyle}>Coordinators Checklist</li>
                <li style={listItemStyle}>I Need More Info</li>
                <li style={listItemStyle}>I Am Ready To Book Fundraiser</li>
                <li style={listItemStyle}>Complete Order Here</li>
              </ul>
            </div>
          </div>

          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: "auto",

              backgroundColor: "#0B4D83",
              height: 50,
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="body1" style={{ color: "white" }}>
                Indeygo Fundraising.
              </Typography>
              <Copyright />
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "white" }}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        Indeygo Fundraising
      </Link>{" "}
      {new Date().getFullYear()}
      {". "}
      All Rights Reserved
    </Typography>
  );
}
