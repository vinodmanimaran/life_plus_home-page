import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import footerIcon from '../../Assets/Images/The life Plus-all logo_Page_5.png';
import { BsTelephone } from 'react-icons/bs';
import { CiMail, CiMobile3 } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer' >
      <Container fluid className='footer-conatiner'>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col sm={12} md={3} lg={3} className='first-section'>
                  <ul>
                    <li>
                      <div className='img-icon-footer'>
                        <img src={footerIcon} alt='' />
                      </div>
                    </li>
                    <li>
                      Address: 266/C, 80 Feet Indranagar Road, near C.M.H
                      HOSPITAL, Bengaluru, Karnataka 560038
                    </li>
                    <li>
                      <CiMobile3 />
                      <span> +91 9526602414</span>
                    </li>
                    <li>
                      <BsTelephone />
                      <span> 080-2525 4444</span>
                    </li>
                    <li>
                      <CiMail />
                      <span> lifepluse@gmail.com</span>
                    </li>
                  </ul>
                </Col>
                <Col className='second-section'>
                  <ul>
                    <li>
                      <h5>Get More Links</h5>
                    </li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Departments</li>
                    <li>Doctor</li>
                    <li>Cost of treatment</li>
                    <li>Contact us </li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                  </ul>
                </Col>
                <Col className='third-section'>
                  <ul>
                    <li>
                      <h5>Department</h5>
                    </li>
                    <li>Gynecology</li>
                    <li>IVF & IUI</li>
                    <li>Pediatrics</li>
                    <li>Gastroenterology</li>
                    <li>General Physician & Diabetologist</li>
                    <li>Proctology</li>
                    <li>ENT</li>
                    <li>Urology</li>
                    <li>Nutrition & Wellness</li>
                  </ul>
                </Col>
                <Col className='fourth-section'>
                  <ul>
                    <li>
                      <h5>Find us</h5>
                    </li>
                    <li>
                      <div className='g-map'></div>
                    </li>
                    <li>Follow us on</li>
                    <li>
                      <FaFacebook fontSize={20} />{' '}
                      <span>
                        {' '}
                        <AiFillInstagram fontSize={23} />
                      </span>
                      <span>
                        {' '}
                        <AiFillTwitterCircle fontSize={23} />
                      </span>
                      <span>
                        {' '}
                        <AiFillYoutube fontSize={24}/>
                      </span>
                    </li>
                    <li>
                      <button>
                        Book Appoinmnet
                      </button>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>{' '}
    </div>
  );
};

export default Footer;
