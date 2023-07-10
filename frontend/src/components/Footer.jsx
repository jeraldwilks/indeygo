import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { CiFacebook } from "react-icons/ci";
import { SlSocialPintarest } from "react-icons/sl";
import { TfiTwitter, TfiInstagram } from "react-icons/tfi";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
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

export default function StickyFooter() {
  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    marginTop: 600,
    width: "100%",
    fontFamily: "Roboto, sans-serif",
  };

  const columnStyle = {
    flex: 1,
    marginRight: "20px",
    maxWidth: "250px",
  };

  const headingStyle = {
    fontSize: "16px",
    marginBottom: "10px",
  };

  const listItemStyle = {
    marginBottom: "5px",
  };

  const contactInfoStyle = {
    marginBottom: "10px",
  };

  const IconStyle = {
    justifyContent: "spaceBetween",
    padding: 2,
    margin: 2,
    fontSize: 20,
    color: "#F7E86A",
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <div style={footerStyle}>
          <div style={columnStyle}>
            <h3 style={headingStyle}>CONTACT US</h3>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li style={contactInfoStyle}>Phone</li>
              <li>1-877-463-3946</li>
              <li>(1-877-INDEYGO)</li>
              <li style={contactInfoStyle}>Address</li>
              <li>Indeygo Fundraising</li>
              <li>P.O. Box 8346,</li>
              <li>Canmore, AB T1W 2V1</li>
              <li style={contactInfoStyle}>Email</li>
              <li>info@indeygo.com</li>
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
            <h3 style={headingStyle}>OUR LINKS</h3>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li style={listItemStyle}>About Us</li>
              <li style={listItemStyle}>FAQ</li>
              <li style={listItemStyle}>Blog</li>
              <li style={listItemStyle}>Contact Us</li>
            </ul>
          </div>
          <div style={columnStyle}>
            <h3 style={headingStyle}>COORDINATOR INFO</h3>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li style={listItemStyle}>How Does A Fundraiser Work?</li>
              <li style={listItemStyle}>Coordinators Checklist</li>
              <li style={listItemStyle}>I Need More Info</li>
              <li style={listItemStyle}>I Am Ready To Book Fundraiser</li>
              <li style={listItemStyle}>Complete Order Here</li>
            </ul>
          </div>
          <div style={columnStyle}>
            <h3 style={headingStyle}>PRODUCTS</h3>
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
        </div>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">Indeygo Fundraising.</Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </>
  );
}
