import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Speciality1 from '../../Assets/Images/Specialities-1.png';
import Speciality2 from '../../Assets/Images/Specialities-2.png';
import Speciality3 from '../../Assets/Images/Specialities-3.png';
import Speciality4 from '../../Assets/Images/Specialities-4.png';
import Speciality5 from '../../Assets/Images/Specialities-5.png';
import Speciality6 from '../../Assets/Images/Specialities-6.png';

const Specialities = () => {
  const [showAllSpecialities, setShowAllSpecialities] = useState(false);

  const specialitiesData = [
    { imgSrc: Speciality1, linkTo: '/Proctology', title: 'Proctology', description: 'Specialised & advanced treatment for Anorectal Diseases ...' },
    { imgSrc: Speciality2, linkTo: '/laparoscopy', title: 'Laparoscopy', description: 'Keyhole surgery for abdominal and pelvic disorders ...' },
    { imgSrc: Speciality3, linkTo: '/gynecology', title: 'Gynecologists', description: 'Treatment of diseases related to female reproductive organs ....' },
    { imgSrc: Speciality4, linkTo: '/ent', title: 'ENT', description: 'Minimal access surgery (MIS) for ear, nose and throat (ENT) issues ...' },
    { imgSrc: Speciality5, linkTo: '/urology', title: 'Urology', description: 'Specialised & advanced treatment for Anorectal Diseases Surgical treatment for in men and women' },
    { imgSrc: Speciality6, linkTo: '/vascular', title: 'Vascular', description: 'Surgical subspecialty that focuses on the vascular system- arteries, veins and lymphatic...' },
  ];

  const displayedSpecialities = showAllSpecialities ? specialitiesData : specialitiesData.slice(0, 3);

  return (
      <Container className="special_container">
      <Row>
        <div className="symptoms-heading">
          <h2 style={{color:"white"}}>Our Specialties</h2>
        </div>
        <Col sm={12} md={12} className="specialities-container">
          {displayedSpecialities.map((speciality, index) => (
            <div className="specialities" key={index}>
              <Row>
                <Col sm={12} md={5}>
                  <div className="speciality-img">
                    <img src={speciality.imgSrc} alt="" style={{width:"100px",marginTop:"10%"}} />
                  </div>
                </Col>
                <Col sm={12} md={7}>
                  <div className="arrow">
                    <Link to={speciality.linkTo}>
                      <BsArrowRightShort fontSize={22} />
                    </Link>
                  </div>
                  <div className="speciality-name">
                    <h6>{speciality.title}</h6>
                    <p>{speciality.description}</p>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Col>
        <Row>
          <Col className="view-more">
            <button onClick={() => setShowAllSpecialities(!showAllSpecialities)} className="view_more">
              {showAllSpecialities ? 'View Less' : 'View More'}
            </button>
          </Col>
        </Row>
        {/* <Container>
          <Row>
            <Col sm={12} md={12} className="line" />
          </Row>
        </Container> */}
      </Row>
    </Container>
  );
};

export default Specialities;
