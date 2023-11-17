import React from 'react'
import './AdminTeam.css'
import AdminTeam1 from '../../Assets/about_assets/admin1.jfif';
import AdminTeam2 from '../../Assets/about_assets/admin4.jfif';
import AdminTeam3 from '../../Assets/about_assets/admin3.jfif';
import { Row, Col, Container} from 'react-bootstrap';
import Team from '../../Assets/about_assets/group.png';
import Testimonial from '../../Components/Testimonials/Testimonial';



const AdminTeam = () => {
    const adminteam = [
  {
    name: 'Alexander',
    position: 'Chairman',
    image: AdminTeam1,
  },
  {
    name: 'Vijay',
    position: 'CFO',
    image: AdminTeam2,
  },
  {
    name: 'Ashok',
    position: 'COO',
    image: AdminTeam3,
  },
];

    return (
      <>
<div className="admin_team">
    <h1 className="admin_heading">Our Administrative Team</h1>
    <Row>
      {adminteam.map ((admin, index) => (
        <Col key={index}>
          <img
            src={admin.image}
            alt="admin_team"
            className="admin_image"
            width={200}
            height={200}
          />
          <div className="admin_wrapper">
            <p className="admin_name">{admin.name}</p>
            <p className="admin_position">{admin.position}</p>
          </div>
        </Col>
      ))}
    </Row>
            </div>
            <Container>
  <h1 className="team_heading">Our Team</h1>
  <Row>
    <Col md={6}>
      <img src={Team} alt="Team_1" className="team_img" />
    </Col>
    <Col md={6}>
      <p className="team_content">
        Meet the dedicated professionals who make our hospital a great place for your care.
      </p>
    </Col>
          </Row>
          <Testimonial/>
  </Container>
</>
    )
}

export default AdminTeam 