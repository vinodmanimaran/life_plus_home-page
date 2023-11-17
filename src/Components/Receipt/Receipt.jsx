import React from 'react'
import {Card, Container,Col} from 'react-bootstrap'
import Hos from '../../Assets/about_assets/hos.png'
import Doc from '../../Assets/about_assets/doc.jfif';
import './Receipt.css'
import {FaCalendarAlt,FaHome} from 'react-icons/fa';
import {BsClock} from 'react-icons/bs';
import BeforePayment from '../BeforePayment/BeforePayment';



const Receipt = () => {
    const containerStyles = {
  width: '60rem',
  height: '50rem',
  borderRadius: '37px',
  border: '1px solid rgba(41, 41, 41, 0.15)',
  background: 'var(--White, #f2f3f2)',
  boxShadow: '6px 6px 15px 0px rgba(206, 207, 206, 0.9), ' +
             '-6px -6px 12px 0px rgba(255, 255, 255, 0.9), ' +
             '6px -6px 12px 0px rgba(206, 207, 206, 0.2), ' +
             '-6px 6px 12px 0px rgba(206, 207, 206, 0.2), ' +
             '-1px -1px 2px 0px rgba(206, 207, 206, 0.5) inset, ' +
             '1px 1px 2px 0px rgba(255, 255, 255, 0.3) inset',
margin: '10%'
};

    return (
      <>
     <div className="maincontainer">
                <Col>
                      <div classname='main' style={containerStyles}>
          <h3 className="tab_heading"><span style={{margin:"10px",marginTop:'-2px'}}><FaHome/></span>In-clinic Appointment</h3>
          <hr />
          <div className="slot_details">
                    <h4 className="slot_date"><span><FaCalendarAlt style={{margin:"5px",marginTop:'-2px'}} />On</span> Nov 14th</h4>
                        <p classname="redirect_slot" style={{color:"green",fontWeight:"bold",marginLeft:"10px",cursor:"pointer"}}>Change Date & Time</p>
              <h4 className="slot_time"><span><BsClock style={{margin:"5px",marginTop:"-2px"}} />At</span> 12.30 PM </h4>
          </div>
<hr className="line_br"/>
          <div className="slot_container">
              <img src={Doc} alt="doctor" className="slot_doctor_img" />
              <h3 className='slot_doctor_name'>Dr K A Mohan</h3>
              <div className="slot_doctor_role_details">
                  <p className="slot_doctor_role">BDS,MDS Orthodontics</p>
                                <p className="slot_doctor_role">Orthodontist, Dentist, Dentofacial
</p>
<p className="slot_doctor_role">Orthopedist, Dental Surgeon</p>

              </div>
          </div>
          <hr />
          <div className='clinic_details'>
                          <img src={Hos} alt="clinic_image" className="slot_clinic_img" />

                                  </div>
                        <div className="clinic_address">
                                <h3>Dental De Care</h3>
              <p>111, 4th Main, Bangalore</p>
              <p className = 'slot_directions'>Get Directions</p>
          
</div>

            </div>
            <div className="get_back">
                <p className="get_back_page">Go back to my results</p>
                </div>
                
                </Col>
                <Col>
                <BeforePayment/>
                </Col>
     </div>

</>
  )
}

export default Receipt