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

const Gynecology = () => {
  const teamMembers = [
    {name: 'Dr. John Doe', role: 'Gynecologist'},
    {name: 'Dr. Jane Smith', role: 'Gynecologist'},
    // Add more team members as needed
  ];

  return (
    <Container >
      <Header />
      <Row>
        <Col>
          <h1 style={styles.sectionTitle}>Gynecology Department</h1>
          <p style={styles.paragraph}>
            Welcome to the Gynecology Department at LifePlus Hospital. Our team
            of experienced gynecologists is committed to providing
            comprehensive and compassionate care for women's health.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>
            Why Choose LifePlus Gynecology Department?
          </h2>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              <FaCheck /> Comprehensive Women's Health Services
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              <FaUserMd /> Experienced Gynecologists
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
          <h2 style={styles.sectionTitle}>Common Gynecological Services</h2>
          <Card style={styles.card}>
            <ListGroup variant="flush">
              <ListGroup.Item>Well-Woman Exams</ListGroup.Item>
              <ListGroup.Item>Obstetric Care</ListGroup.Item>
              <ListGroup.Item>Gynecological Surgeries</ListGroup.Item>
              <ListGroup.Item>Fertility Services</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Services Offered</h2>
          <ListGroup>
            <ListGroup.Item style={styles.listItem}>
              Prenatal and Postnatal Care
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Minimally Invasive Gynecological Procedures
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Family Planning Consultations
            </ListGroup.Item>
            <ListGroup.Item style={styles.listItem}>
              Hormone Therapy
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
            Our Gynecology Department adopts a holistic approach to women's
            health, focusing on preventive care, early detection, and
            patient-centered treatment plans tailored to each individual's
            needs.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 style={styles.sectionTitle}>Our Gynecology Team</h2>
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
            For appointments or inquiries, please contact our Gynecology
            Department at <strong>+91 8884481850</strong>.
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

export default Gynecology;
