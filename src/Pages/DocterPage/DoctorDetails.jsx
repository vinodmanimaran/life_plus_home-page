import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {BsCalendar2Check} from 'react-icons/bs';
import DocterPicture from '../../Assets/Images/Female-Doctor-PNG-File.png';
import lifePluseLogo from '../../Assets/Images/The life Plus-all logo_Page_5.png';
import Scheduler from '../../Components/Scheduler/Scheduler';
import './DoctorDetails.css'
const DoctorDetails = () => {
  const [open, setOpen] = useState (false);

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
              style={{width: '130px', height: '170px'}}
              src={DocterPicture}
              alt=""
            />
            <div>
              <img
                src={lifePluseLogo}
                alt=""
                style={{width: '110px', height: '80px'}}
              />
            </div>
          </div>
        </Col>
              <Col sm={12} md={6}>
                  <div style={{marginTopright:"-20%"}}>
  <button
    className="btn_booking"
    style={{marginTop: '-30%'}}
    onClick={() => {
      setOpen (!open);
    }}
  >
    {open ? 'Cancel' : 'Book appoinment'}
  </button>
</div>

          <div style={{textAlign: 'left', marginLeft: '20px'}}>
            <h3>Dr.Reshma</h3>
            <p>Dentist</p>
            <p>7 Yaers overall experiance</p>
            <p>Jp nagar,Bangalore</p>
            <p>
              BDS, MDS - Orthodontics and Dentofacial Orthopaedics
              Cosmetic/Aesthetic Dentist.
            </p>
            <p>₹ 500 Consultation fee at clinic</p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div style={{textAlign: 'center'}}>
            <h6>543 patient stories</h6>
          </div>
          <div style={{textAlign: 'center', marginTop: '10px'}}>
            <p>
              <BsCalendar2Check /> <span>Available Today</span>
            </p>
          </div>

        </Col>
      </Row>
      {open && <Scheduler />}
    </div>
  );
};

export default DoctorDetails;
