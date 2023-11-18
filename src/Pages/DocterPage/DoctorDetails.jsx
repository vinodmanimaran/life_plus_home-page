import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsCalendar2Check } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import DocterPicture from '../../Assets/Images/Female-Doctor-PNG-File.png';
import lifePluseLogo from '../../Assets/Images/The life Plus-all logo_Page_5.png';
import Scheduler from '../../Components/Scheduler/Scheduler';
import './DoctorDetails.css';

const DoctorDetails = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Row>
        <Col sm={12} md={2}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              style={{ width: '130px', height: '170px' }}
              src={DocterPicture}
              alt=""
            />
            <div>
              <img
                src={lifePluseLogo}
                alt=""
                style={{ width: '110px', height: '80px' }}
              />
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div style={{ marginTopright: '-20%' }}>
            <button
              className="btn_booking"
              style={{ marginTop: '-30%' }}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? 'Cancel' : 'Book appointment'}
            </button>
          </div>

          <div style={{ textAlign: 'left', marginLeft: '20px' }}>
            <h3>Dr.Reshma</h3>
            <p>Dentist</p>
            <p>7 Years overall experience</p>
            <p>Jp nagar, Bangalore</p>
            <p>
              BDS, MDS - Orthodontics and Dentofacial Orthopaedics Cosmetic/Aesthetic Dentist.
            </p>
            <p>₹ 500 Consultation fee at clinic</p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div style={{ textAlign: 'center' }}>
            <h6>543 patient stories</h6>
          </div>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <p>
              <BsCalendar2Check /> <span>Available Today</span>
            </p>
          </div>
        </Col>
      </Row>
      {open && <Scheduler />}
      {/* Next button with a hyperlink to "/receipt" - rendered only when scheduler is open */}
      {open && (
        <Link to="/receipt">
          <button
            style={{
              backgroundColor: 'red',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '10px',
              marginLeft:"30%"
            }}
          >
            Next
          </button>
        </Link>
      )}
    </div>
  );
};

export default DoctorDetails;
