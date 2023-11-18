import React from 'react';
import './ChooseDoctor.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { MdCompareArrows } from 'react-icons/md';

const ChooseDoctor = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <div className="choose_doctor_container">
          <div className="spl_doctor">
            <button
              className="spl_btn"
              style={{ marginTop: '100%' }}
              onClick={() => {
                navigate('/doctors');
              }}
            >
              Choose our Top Specialty Doctors
            </button>
          </div>
          <div className="icon_box">
            <MdCompareArrows className="icon" />
          </div>

          <div className="ord_doctor">
            <button
              className="left"
              style={{ marginTop: '100%' }}
              onClick={() => {
                navigate('/bookappointment');
              }}
            >
              Choose our Top Medicine Specialty
              <span>
                <p>for general enquiries and medical checkups</p>
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Next button with a hyperlink to "/doctors" */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{
            backgroundColor: 'red',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/doctors');
          }}
        >
          Next
        </button>
      </div>

      <Footer />
    </>
  );
};

export default ChooseDoctor;
