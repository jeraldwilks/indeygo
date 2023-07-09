import React from "react";
import "../styling/homePage.css";
import CustomerReviewCarousel from "../components/CustomerReviewCarousel";
import ImageCarousel from "../components/ImageCarousel.jsx";

const HomePage = () => {
  return(
    <>
  <ImageCarousel/>
  {/* <div class="home">Insert content here</div>; */}

  <CustomerReviewCarousel/>
  </>
  ) 
};

export default HomePage;
