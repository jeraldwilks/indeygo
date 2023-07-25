import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styling/CustomerReviewCarousel.css";
import "animate.css";

const CustomerReviewCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);
  const handleAutoplayToggle = () => {
    setAutoplay(!autoplay);
  };
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3.8,
    slidesToScroll: 3,
    centerMode: true, // Center the active card
    centerPadding: "10px", // Space between cards
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1.65, // Display 1 card at a time on smaller screens
          slidesToScroll: 2, // Display 1 card at a time on smaller screens
          infinite: true,
          dots: true,
          centerMode: true, // Center the active card
          centerPadding: "40px", // Adjust spacing for smaller screens
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: .931, // Display 1 card at a time on smaller screens
          slidesToScroll: 1, // Display 1 card at a time on smaller screens
          infinite: true,
          dots: true,
          centerMode: true, // Center the active card
          centerPadding: "40px", // Adjust spacing for smaller screens
        },
      },
    ],
    autoplay: true, // Enable autoplay
    autoplaySpeed: 400, // Set autoplay speed (in milliseconds)
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <div class="carousel" style={{ height: "425px", marginBottom: "40px" , fontFamily: "'Open Sans', sans-serif" }}>
      <h2>What our Customers Are Saying</h2>
      <div class="carousel-container">
        <Slider {...settings} autoplay={autoplay} autoplaySpeed={1500}>
          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <h3 class="desc">Dawn</h3>
                <p>
                  Indeygo Fundraiser is a great company, they were very resourceful and helpful throughout our entire fundraising projects. 
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <h3 class="desc">Lorna</h3>
                <p>
                  Indeygo Fundraiser is a great company, they were very resourceful and helpful throughout our entire fundraising projects. 
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <h3 class="desc">Cassie</h3>
                <p>
                  Indeygo Fundraiser is a great company, they were very resourceful and helpful throughout our entire fundraising projects. 
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <h3 class="desc">Milos</h3>
                <p>
                  Indeygo Fundraiser is a great company, they were very resourceful and helpful throughout our entire fundraising projects. 
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="cardholder">
              <div class="card">
                <h3 class="desc">Marie</h3>
                <p>
                  Indeygo Fundraiser is a great company, they were very resourceful and helpful throughout our entire fundraising projects. 
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviewCarousel;
