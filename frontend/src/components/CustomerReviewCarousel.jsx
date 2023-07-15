import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styling/CustomerReviewCarousel.css";
import "animate.css";

const CustomerReviewCarousel = () => {
  const [autoplay, setAutoplay] = React.useState(true);
  const handleAutoplayToggle = () => {
    setAutoplay(!autoplay);
  };
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    centerMode: true, // Center the active card
    centerPadding: "10px", // Space between cards
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 2.9, // Display 1 card at a time on smaller screens
          slidesToScroll: 3, // Display 1 card at a time on smaller screens
          infinite: true,
          dots: true,
          centerMode: true, // Center the active card
          centerPadding: "40px", // Adjust spacing for smaller screens
        },
      },
    ],
    autoplay: true, // Enable autoplay
    autoplaySpeed: 300, // Set autoplay speed (in milliseconds)
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <div class="carousel">
      <div class="carousel-container">

          <Slider
            {...settings}
            autoplay={autoplay}
            autoplaySpeed={1500}
          >

          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <h3 class="desc">Dawn</h3>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <h3 class="desc">Lorna</h3>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <h3 class="desc">Cassie</h3>
              </div>
            </div>
          </div>

          </Slider>
        </div>
    </div>
  );
};

export default CustomerReviewCarousel;
