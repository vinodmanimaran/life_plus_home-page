import React from 'react'
import './Message.css'
import { Col, Row } from 'react-bootstrap'
import Founder from '../../Assets/about_assets/admin_team.png'


const Message = () => {

  return (
      <>
          {/* <div className="custom-shape-divider-top-1699499828">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
      className="shape-fill"
    />
  </svg>
</div> */}
<Row>
    <Col>
           <h1 className="founder_title">Message from the Founder</h1>
      <p className="founder_content">
        Our 21-year-old hospital, led by our dedicated MBBS MD Doctor founder, offers 24/7 honest, affordable medical care. We prioritize middle-class families' needs, with renowned doctors and transparent pricing. Our strong reputation has grown through word-of-mouth recommendations. To celebrate our 21st anniversary, we offer 50 free health gift cards. The founder encourages continuous improvement and community involvement, offering young individuals a chance to gain valuable experience.
        <br /><br />
        Our legacy is defined by our commitment to quality healthcare and community service under the founder's guidance.
      </p>


              </Col>
              <Col>
              <div className="image-container">
  {/* <div className="blob-background" style={blobBackgroundStyle} /> */}
                      <img src={Founder} alt="Founder" className="image" />
</div>

              </Col>
          </Row>
          <Row>
              <h4 className="founder_name">Dr Thomas Chandy</h4>
              <div className="role">
                  <p className="founder_role">Chairman, MD & Chief Of Orthopedics</p>
<p className = 'founder_role'>Joint Replacement & Arthroscopy Surgeon</p>

              </div>
          </Row>

          
      </>

  )
}

export default Message