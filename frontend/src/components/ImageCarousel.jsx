
import React from "react";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";


const ImageCarousel = () => {
  const CarouselContainer = styled("div")`
    width: 100%;
    height:400%;
    transform: scale(1);
    transform-origin: center;
    justify-content: center;
  
  `;

  const CarouselSlide = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    // padding-top: 10px;
    // margin-top: 10%;
    // margin-bottom: 10%;
    // padding-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }`;

  const images = [
    "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/327746120_638931427988873_2080760435192294902_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=2u14H7cC7psAX8Aas1Q&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBtEWn1oqWGayrOP1b6zBon6et6SDplpM_nq31eOn4LfQ&oe=64AA4081",
    "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/314605440_573641271429886_2522308999177210327_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=U7bSlfce0DwAX8EiZjS&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfD-EQ0MBRktc3tR7JK7gws5wchyZFPTUogzal7kNzETYg&oe=64A99BB2",
    "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/283149046_5463373727014244_1061077744442370343_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9267fe&_nc_ohc=9NVTsIxfJzUAX8coD3N&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfCpSrhkrzD3ZIeVDpRsAWfFN_OnbKV5NZFwMnVJQHzj_Q&oe=64AB41BF",
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
