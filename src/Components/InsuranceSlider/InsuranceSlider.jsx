import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../../Assets/insurance/insurance1.jpg';
import Image2 from '../../Assets/insurance/insurance2.jpg';
import Image3 from '../../Assets/insurance/insurance3.jpg';
import Image4 from '../../Assets/insurance/insurance4.jpg';
import Image5 from '../../Assets/insurance/insurance5.jpg';
import Image6 from '../../Assets/insurance/insurance6.jpg';
import Image7 from '../../Assets/insurance/insurance7.jpg';
import Image8 from '../../Assets/insurance/insurance8.jpg';
import Image9 from '../../Assets/insurance/insurance9.jpg';
import Image10 from '../../Assets/insurance/insurance10.jpg';
import Image11 from '../../Assets/insurance/insurance11.jpg';
import Image12 from '../../Assets/insurance/insurance12.jpg';
import './InsuranceSlider.css';
import {Container} from 'react-bootstrap'

const Insurance = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
  ];

  return (
    <div className="slider-container">
      <h1 className="insurance_heading">Insurance Providers</h1>
      <Container>
<Slider {...settings}>

  {images.map ((image, index) => (
    <div key={index} className="slide-item">
      <img src={image} alt={`Slide ${index + 1}`} />
    </div>
  ))}
</Slider>

      </Container>


    </div>
  );
};

export default Insurance;
