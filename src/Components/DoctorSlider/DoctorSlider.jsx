import React, {useState, useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Shape1 from '../../Assets/Images/Vector.png';
import Shape2 from '../../Assets/Images/Vector (1).png';
import Shape3 from '../../Assets/Images/Vector (2).png';
import Doctor1 from '../../Assets/Images/unsplash_pTrhfmj2jDA 1.png';
import Doctor2 from '../../Assets/about_assets/doc2.png';
import Doctor3 from '../../Assets/about_assets/doc3.png';
import Doctor4 from '../../Assets/about_assets/doc4.png';
import {FaPhone} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

import OfferSlider from './OfferSlider';

const DoctorSlider = () => {
  const [currentSlide, setCurrentSlide] = useState (0);
  const navigate = useNavigate ();

  const slideContent = [
    {
      id: 1,
      imgSrc: Doctor1,
    },
    {
      id: 2,
      imgSrc: Doctor2,
    },
    {
      id: 3,
      imgSrc: Doctor3,
    },
    {
      id: 4,
      imgSrc: Doctor4,
    },
    // Add more slides as needed
  ];

  useEffect (
    () => {
      const interval = setInterval (() => {
        const nextSlide = (currentSlide + 1) % slideContent.length;
        setCurrentSlide (nextSlide);
      }, 5000); // Change the interval time as needed (in milliseconds)

      return () => clearInterval (interval);
    },
    [currentSlide, slideContent.length]
  );

  // Styles for the "Book Appointment" button
  const bookAppointmentButtonStyle = {
    backgroundColor: '#e74c3c', // Red background color
    color: '#fff', // Text color
    cursor: 'pointer',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    marginLeft: '-55%',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const contactButtonStyle = {
    backgroundColor: '#001f3f', 
    color: '#fff', 
    cursor: 'pointer',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    marginLeft: '-40%',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={6} lg={6} className="content-grid">
          <div className="heading" style={{marginLeft: '-60%'}}>
            <h2>Life Plus Hospital Offers %</h2>
          </div>
          <div className="content-all" style={{marginLeft: '10%'}}>
            <OfferSlider />
          </div>
          <div className="record-btn mx-auto cta-btns" >
            <button
              onClick={() => {
                var phoneNumber = 'tel:9993331110';
                window.location.href = phoneNumber;
              }}
              style={contactButtonStyle}
              className="cta-btn"
            >
              <FaPhone style={{marginRight: '5px'}} />
              Contact us +91 9844447766
            </button>

            <button
              onClick={() => {
                navigate ('/bookappointment'); 
              }}
              style={bookAppointmentButtonStyle}
              className="cta-btn"
            >
              Book Appointment
            </button>
          </div>
        </Col>
        <div className="doctor_slider" style={{marginTop: '-3%'}}>
          <Col sm={12} md={6} lg={6} className="img-grid">
            <div className="all-img">
              <div className="img-1">
                <img
                  style={{width: '250px', height: '300px'}}
                  src={Shape1}
                  alt=""
                />
              </div>
              <div className="img-2">
                <img
                  style={{width: '200px', height: '300px'}}
                  src={Shape2}
                  alt=""
                />
              </div>
              <div className="img-3">
                <img
                  style={{width: '200px', height: '300px'}}
                  src={Shape3}
                  alt=""
                />
              </div>
              <div className="img-4">
                <img
                  style={{width: '230px', height: '300px'}}
                  src={slideContent[currentSlide].imgSrc}
                  alt={slideContent[currentSlide].id}
                />
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default DoctorSlider;
