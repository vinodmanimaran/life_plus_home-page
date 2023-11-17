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

const Laparoscopy = () => {
  const teamMembers = [
    {name: 'Dr. John Doe', role: 'Laparoscopic Surgeon'},
    {name: 'Dr. Jane Smith', role: 'Laparoscopic Surgeon'},
    // Add more team members as needed
  ];

  return (
    <Container >
      <Header />
      <Row>
        <Col>
          <h1 style={styles.sectionTitle}>Laparoscopy Department</h1>
          <p style={styles.paragraph}>
            Welcome to the Laparoscopy Department at LifePlus Hospital. Our team
            of experienced laparoscopic surgeons is dedicated to providing
            high-quality care for patients in need of minimally invasive
            surgical procedures.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>
            Why Choose LifePlus Laparoscopy Department?
          </h2>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              <FaCheck /> Expert Laparoscopic Services
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <FaUserMd /> Skilled Laparoscopic Surgeons
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
          <h2 style={styles.sectionTitle}>Common Laparoscopic Procedures</h2>
          <Card style={styles.card}>
            <ListGroup variant="flush">
              <ListGroup.Item>Appendectomy</ListGroup.Item>
              <ListGroup.Item>Gallbladder Removal</ListGroup.Item>
              <ListGroup.Item>Hernia Repair</ListGroup.Item>
              <ListGroup.Item>Hysteroscopy</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Services Offered</h2>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              Laparoscopic Surgeries
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Diagnostic Laparoscopy
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Minimally Invasive Procedures
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Laparoscopic Hysterectomy
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Laparoscopic Colon Resection
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
            Our Laparoscopy Department follows a patient-centric approach,
            utilizing advanced laparoscopic techniques to minimize recovery
            time, reduce scarring, and enhance overall patient outcomes.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Our Laparoscopy Team</h2>
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
            For appointments or inquiries, please contact our Laparoscopy
            Department at <strong>+91 8884481840</strong>.
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

export default Laparoscopy;
