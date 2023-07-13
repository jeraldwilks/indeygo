
import React from "react";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";





const ImageCarousel = () => {
  const CarouselContainer = styled("div")`
    width: 100%;
    height:500px;
    transform: scale(1);
    transform-origin: center;
    justify-content: center;
  
  `;

  const CarouselSlide = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }`;

  const images = [ './images/carouselImage1.jpeg', './images/carouselImage2.jpeg','./images/carouselImage3.jpeg'
  ];

  return (
  
  <CarouselContainer>
  <Carousel
    NextIcon={
      <IconButton
        sx={{
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
    }
    PrevIcon={
      <IconButton
        sx={{
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
    }
  >
    {images.map((image, index) => (
      <CarouselSlide key={index}>
        <img src={image} alt={`Slide ${index}`} />
      </CarouselSlide>
    ))}
  </Carousel>
</CarouselContainer>
);
};

  


export default ImageCarousel;
