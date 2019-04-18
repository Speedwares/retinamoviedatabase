import React, { Component } from "react";
import Slider from "react-slick";

class ItemCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            speed: 2000,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            speed: 2000,
            autoplaySpeed: 2000
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 2000,
            autoplaySpeed: 2000
          }
        }
      ]
    };
    return (
      <div>
      
        <Slider {...settings}>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="second slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
        </Slider>
      </div>
    );
  }
}
export default ItemCarousel;
