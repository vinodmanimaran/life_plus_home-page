import React from 'react';
import {Container, Row, Col, ListGroup, Card, Image} from 'react-bootstrap';
import {
  FaCheck,
  FaUserMd,
  FaHospital,
  FaStethoscope,
  FaCalendarAlt,
  FaUser,
} from 'react-icons/fa';

const ENT = () => {
  const teamMembers = [
    {name: 'Dr. John Doe', role: 'ENT Specialist'},
    {name: 'Dr. Jane Smith', role: 'ENT Specialist'},
    // Add more team members as needed
  ];

  const sectionTitleStyle = {
    color: '#1A1A1A',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginTop: '30px',
  };

  const paragraphStyle = {
    color: '#333',
    fontSize: '1.2rem',
    lineHeight: '1.6',
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  const teamMemberStyle = {
    marginBottom: '30px',
    textAlign: 'center',
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 style={sectionTitleStyle}>ENT Department</h1>
          <p style={paragraphStyle}>
            Welcome to the Ear, Nose, and Throat (ENT) Department at LifePlus Hospital. Our team
            of experienced ENT specialists is dedicated to providing high-quality
            care for patients with ear, nose, and throat conditions.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={sectionTitleStyle}>Why Choose LifePlus ENT Department?</h2>
          <ListGroup>
            <ListGroup.Item>
              <FaCheck /> Comprehensive ENT Services
            </ListGroup.Item>
            <ListGroup.Item>
              <FaUserMd /> Experienced ENT Specialists
            </ListGroup.Item>
            <ListGroup.Item>
              <FaHospital /> State-of-the-Art Facilities
            </ListGroup.Item>
            <ListGroup.Item>
              <FaStethoscope /> Personalized Patient Care
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={sectionTitleStyle}>Common ENT Conditions</h2>
          <Card style={cardStyle}>
            <ListGroup variant="flush">
              <ListGroup.Item>Ear Infections</ListGroup.Item>
              <ListGroup.Item>Nasal Congestion</ListGroup.Item>
              <ListGroup.Item>Throat Disorders</ListGroup.Item>
              <ListGroup.Item>Sinusitis</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={sectionTitleStyle}>Services Offered</h2>
          <ListGroup>
            <ListGroup.Item>Hearing Tests</ListGroup.Item>
            <ListGroup.Item>Rhinoplasty</ListGroup.Item>
            <ListGroup.Item>Tonsillectomy</ListGroup.Item>
            <ListGroup.Item>Endoscopic Sinus Surgery</ListGroup.Item>
            <ListGroup.Item>Voice Disorders Treatment</ListGroup.Item>
            <ListGroup.Item>
              <FaCalendarAlt /> Scheduled Follow-ups
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={sectionTitleStyle}>Treatment Approach</h2>
          <p style={paragraphStyle}>
            Our ENT Department employs a comprehensive approach to
            ear, nose, and throat care. We focus on accurate diagnosis, personalized
            treatment plans, and ongoing patient education. Our goal is to
            improve the quality of life for individuals dealing with
            ENT conditions.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={sectionTitleStyle}>Our ENT Team</h2>
          <Card style={cardStyle}>
            <Card.Body>
              <Row>
                {teamMembers.map ((member, index) => (
                  <Col
                    key={index}
                    md={4}
                    className="mb-3"
                    style={teamMemberStyle}
                  >
                    <Image
                      src={<FaUser />}
                      roundedCircle
                      className="mb-3"
                      style={{fontSize: '2em'}}
                    />
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {member.role}
                    </Card.Subtitle>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={sectionTitleStyle}>Contact Us</h2>
          <p style={paragraphStyle}>
            For appointments or inquiries, please contact our ENT
            Department at <strong>+91 8884481810</strong>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ENT;
