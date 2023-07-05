// import React from 'react';
// import Carousel from '@mui/material';
// import { styled } from '@mui/system';

// const ImageCarousel = () => {
//   const images = [
//     "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/327746120_638931427988873_2080760435192294902_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=2u14H7cC7psAX8Aas1Q&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBtEWn1oqWGayrOP1b6zBon6et6SDplpM_nq31eOn4LfQ&oe=64AA4081",
//     "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/314605440_573641271429886_2522308999177210327_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=U7bSlfce0DwAX8EiZjS&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfD-EQ0MBRktc3tR7JK7gws5wchyZFPTUogzal7kNzETYg&oe=64A99BB2",
//     "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/283149046_5463373727014244_1061077744442370343_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9267fe&_nc_ohc=9NVTsIxfJzUAX8coD3N&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfCpSrhkrzD3ZIeVDpRsAWfFN_OnbKV5NZFwMnVJQHzj_Q&oe=64AB41BF",
//   ];
//   return (
//     <Carousel>
//     {images.map((image, index) => (
//       <CarouselSlide key={index}>
//         <img src={image} alt={`Slide ${index}`} />
//       </CarouselSlide>
//     ))}
//   </Carousel>
// );
// };

// const CarouselSlide = styled("div")`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 400px;
//   margin-top: 0px;

//   img {
//     width: 100%;
//     height: 200%;
//     object-fit: cover;
//   }
// `;

// export default ImageCarousel;


import React from 'react';
import { Carousel } from '@mui/material/Carousel';
import { styled } from '@mui/system';

const ImageCarousel = () => {
  const images = [
    "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/327746120_638931427988873_2080760435192294902_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=2u14H7cC7psAX8Aas1Q&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBtEWn1oqWGayrOP1b6zBon6et6SDplpM_nq31eOn4LfQ&oe=64AA4081",
    "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/314605440_573641271429886_2522308999177210327_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=U7bSlfce0DwAX8EiZjS&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfD-EQ0MBRktc3tR7JK7gws5wchyZFPTUogzal7kNzETYg&oe=64A99BB2",
    "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/283149046_5463373727014244_1061077744442370343_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9267fe&_nc_ohc=9NVTsIxfJzUAX8coD3N&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfCpSrhkrzD3ZIeVDpRsAWfFN_OnbKV5NZFwMnVJQHzj_Q&oe=64AB41BF",
  ];
  
  return (
    <Carousel>
      {images.map((image, index) => (
        <CarouselSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
};

const CarouselSlide = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin-top: 0px;

  img {
    width: 100%;
    height: 200%;
    object-fit: cover;
  }
`;

export default ImageCarousel;
