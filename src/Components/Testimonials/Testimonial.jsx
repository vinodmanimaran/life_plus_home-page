import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';

const Testimonial = () => {
  const [videoData, setVideoData] = useState([
    {
      title: 'Watch Our Testimonials',
      url: 'https://www.youtube.com/embed/lEL2URLVftU?si=cT4B5o6JEq4cDCgQ',
    },
    {
      title: 'Watch Our Testimonials',
      url: 'https://www.youtube.com/embed/NDiRusEud_Y?si=Hm8I6cZWxiTgsept',
    },
    {
      title: 'Watch Our Testimonials',
      url: 'https://www.youtube.com/embed/4K4SJDMqAIQ?si=Ro9hrWtOSwuaOuLq',
    },
     {
      title: 'Watch Our Testimonials',
      url: 'https://www.youtube.com/embed/gDnCmMePjr0?si=HeOfRRgFRP5lssYk',
    },
     {
      title: 'Watch Our Testimonials',
      url: 'https://www.youtube.com/embed/kGtqZih2NsI?si=m4r7m3NdSb0gM13v',
    },
  ]);

  useEffect(() => {
  }, []); 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  
  };

  return (
    <div className="parent-testimonial" id="youtubeSection">
      <Slider {...settings}>
        {videoData.map((video, index) => (
          <div key={index} className="video-section">
            <h3 className="sub_section_heading" id="subHeading">
              {video.title}
            </h3>
            <div className="video-box">
              <iframe
                src={video.url}
                loading="lazy"
                frameBorder="0"
                id={`youtubePage-${index}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`video-${index}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
