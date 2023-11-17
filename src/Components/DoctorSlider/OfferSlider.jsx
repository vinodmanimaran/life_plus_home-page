import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import offerSideImage from '../../Assets/Images/special-offer-side-image.png';
import DrImg from '../../Assets/Images/Doctors-removebg-preview.png';

const OfferSlider = () => {
  const slides = [
    {
      title: 'Comprehensive Health Checkup',
      listItems: [
        'Full-body examination',
        'Blood tests and screenings',
        'Consultation with specialists',
        'Personalized health report',
      ],
    },
    {
      title: 'Maternity Care Package',
      listItems: [
        'Prenatal checkups and counseling',
        'Delivery with experienced obstetricians',
        'Postnatal care for mother and baby',
        'Educational sessions for new parents',
      ],
    },
    {
      title: 'Cardiac Wellness Program',
      listItems: [
        'Cardiac health assessment',
        'EKG and stress tests',
        'Nutritional counseling',
        'Follow-up consultations',
      ],
    },
    {
      title: 'Orthopedic Care Plan',
      listItems: [
        'Orthopedic consultations',
        'Diagnostic imaging',
        'Physical therapy sessions',
        'Customized treatment plans',
      ],
    },
    {
      title: 'Mental Health and Wellness',
      listItems: [
        'Therapy sessions with licensed counselors',
        'Mindfulness and stress reduction workshops',
        'Psychiatric consultations if needed',
        'Holistic approach to mental well-being',
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState (0);

  useEffect (
    () => {
      const intervalId = setInterval (() => {
        setCurrentSlide (prevSlide => (prevSlide + 1) % slides.length);
      }, 5000); // Change the interval as needed (5000ms = 5 seconds)

      return () => clearInterval (intervalId); // Clear the interval on component unmount
    },
    [slides.length]
  );

  const {title, listItems} = slides[currentSlide];

  return (
    <div
      className="offer"
      style={{marginRight: '55%'}}
    >
      <Row style={{width:"600px",height:"500px"}}>
        <Col sm={3} md={3}>
          <div className="offer-side-img">
            <img style={{height: '150px'}} src={offerSideImage} alt="" />
          </div>
        </Col>
        <Col className="offer-end" sm={9} md={9}>
          <div className="heading-offer">
            <h4 style={{marginTop:"10%"}}>{title}</h4>
            <ul>
              {listItems.map ((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>

        </Col>
      </Row>
      <div className="dr-img" style={{marginLeft: '-2%', marginTop: '-70%'}}>
        <img style={{width: '160px', height: '100px'}} src={DrImg} alt="" />
      </div>

    </div>
  );
};

export default OfferSlider;
