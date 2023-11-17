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
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Vascular = () => {
  const teamMembers = [
    {name: 'Dr. John Doe', role: 'Vascular Surgeon'},
    {name: 'Dr. Jane Smith', role: 'Vascular Surgeon'},
    // Add more team members as needed
  ];

  return (
    <Container >
      <Header />
      <Row>
        <Col>
          <h1 style={styles.sectionTitle}>Vascular Department</h1>
          <p style={styles.paragraph}>
            Welcome to the Vascular Department at LifePlus Hospital. Our team of
            experienced vascular surgeons is dedicated to providing
            high-quality care for patients with vascular conditions.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>
            Why Choose LifePlus Vascular Department?
          </h2>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              <FaCheck /> Comprehensive Vascular Services
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <FaUserMd /> Experienced Vascular Surgeons
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <FaHospital /> State-of-the-Art Facilities
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <FaStethoscope /> Personalized Patient Care
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Common Vascular Conditions</h2>
          <Card style={styles.card}>
            <ListGroup variant="flush">
              <ListGroup.Item>Peripheral Artery Disease</ListGroup.Item>
              <ListGroup.Item>Varicose Veins</ListGroup.Item>
              <ListGroup.Item>Deep Vein Thrombosis</ListGroup.Item>
              <ListGroup.Item>Aortic Aneurysm</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Services Offered</h2>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              Vascular Surgery
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Angioplasty and Stenting
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Vein Ablation
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Thrombectomy
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Vascular Imaging
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <FaCalendarAlt /> Scheduled Follow-ups
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Treatment Approach</h2>
          <p style={styles.paragraph}>
            Our Vascular Department employs a comprehensive approach to vascular
            care. We focus on accurate diagnosis, personalized treatment plans,
            and ongoing patient education. Our goal is to improve the quality of
            life for individuals dealing with vascular conditions.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Our Vascular Team</h2>
          <Card style={styles.card}>
            <Card.Body>
              <Row>
                {teamMembers.map ((member, index) => (
                  <Col key={index} md={4} style={styles.teamMember}>
                    <Image
                      src={<FaUser />}
                      roundedCircle
                      style={styles.teamMemberImage}
                    />
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle style={styles.teamMemberRole}>
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
          <h2 style={styles.sectionTitle}>Contact Us</h2>
          <p style={styles.paragraph}>
            For appointments or inquiries, please contact our Vascular
            Department at <strong>+91 8884481830</strong>.
          </p>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

const styles = {
  sectionTitle: {
    color: '#1A1A1A',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginTop: '30px',
    borderBottom: '2px solid #1A1A1A',
    paddingBottom: '10px',
  },
  paragraph: {
    color: '#333',
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },
  listItem: {
    border: 'none',
    borderBottom: '1px solid #ccc',
  },
  card: {
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  teamMember: {
    marginBottom: '30px',
    textAlign: 'center',
  },
  teamMemberImage: {
    borderRadius: '50%',
  },
  teamMemberRole: {
    marginBottom: '20px',
    color: '#666',
  },
};

export default Vascular;
