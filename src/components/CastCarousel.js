import React, { Component } from "react";
import Slider from "react-slick";

class CastCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
      
        <Slider {...settings}>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
          <div>
          <img
                className="itemImage d-block w-100 rounded-circle"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
          </div>
        </Slider>
      </div>
    );
  }
}
export default CastCarousel;
