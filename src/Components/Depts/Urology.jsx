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

const Urology = () => {
  const teamMembers = [
    {name: 'Dr. John Doe', role: 'Urologist'},
    {name: 'Dr. Jane Smith', role: 'Urologist'},
    // Add more team members as needed
  ];

  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <h1 style={styles.sectionTitle}>Urology Department</h1>
          <p style={styles.paragraph}>
            Welcome to the Urology Department at LifePlus Hospital. Our team of
            experienced urologists is dedicated to providing high-quality care
            for patients with urological conditions.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>
            Why Choose LifePlus Urology Department?
          </h2>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              <FaCheck /> Comprehensive Urology Services
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <FaUserMd /> Experienced Urologists
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
          <h2 style={styles.sectionTitle}>Common Urological Conditions</h2>
          <Card style={styles.card}>
            <ListGroup variant="flush">
              <ListGroup.Item>Kidney Stones</ListGroup.Item>
              <ListGroup.Item>Prostate Issues</ListGroup.Item>
              <ListGroup.Item>Bladder Disorders</ListGroup.Item>
              <ListGroup.Item>Urinary Tract Infections</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Services Offered</h2>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              Kidney Surgery
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Prostatectomy
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Bladder Reconstruction
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>Cystoscopy</ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Urodynamic Testing
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
            Our Urology Department employs a comprehensive approach to urological
            care. We focus on accurate diagnosis, personalized treatment plans,
            and ongoing patient education. Our goal is to improve the quality of
            life for individuals dealing with urological conditions.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Our Urology Team</h2>
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
            For appointments or inquiries, please contact our Urology Department
            at <strong>+91 8884481820</strong>.
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

export default Urology;
