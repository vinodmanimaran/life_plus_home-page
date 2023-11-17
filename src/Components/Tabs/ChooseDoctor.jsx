import React from 'react'
import './ChooseDoctor.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {useNavigate} from 'react-router-dom'
import { Row, Col,Container } from 'react-bootstrap'
import {MdCompareArrows} from 'react-icons/md';


const ChooseDoctor = () => {
  const navigate=useNavigate()
  return (
    <>
        <Header/>
      <Container>
        <div className="choose_doctor_container">
          <div className="spl_doctor">
              <button className="spl_btn" style={{marginTop: "100%"}}
    onClick={() => {
      navigate ('/doctors');
    }}
  >
    Choose our Top Speciality Doctors
  </button>
          </div>
          <div className="icon_box">
  <MdCompareArrows className="icon" />

</div>

          <div className="ord_doctor">
  <button
    className="left" style={{marginTop: "100%"}}
    onClick={() => {
      navigate ('/bookappoinment');
    }}
  >
    Choose our Top Medicine Speciality
    <span><p>for general enquiries and medical checkups</p></span>
  </button>
</div>


          </div>
</Container>
<Footer />

    </>
  )
}

export default ChooseDoctor