import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Symptoms1 from '../../Assets/Images/Symptoms1.png';
import Symptoms2 from '../../Assets/Images/Symptoms2.png';
import Symptoms3 from '../../Assets/Images/Symptoms3.png';
import Symptoms4 from '../../Assets/Images/Symptoms4.png';
import Symptoms5 from '../../Assets/Images/Symptoms5.png';
import Symptoms6 from '../../Assets/Images/Symptoms6.png';
import Symptoms7 from '../../Assets/Images/Symptoms7.png';
import Symptoms8 from '../../Assets/Images/Symptoms8.png';
import Symptoms9 from '../../Assets/Images/Symptoms9.png';
import Symptoms10 from '../../Assets/Images/Symptoms10.png';
import Symptoms11 from '../../Assets/Images/Symptoms11.png';
import Symptoms12 from '../../Assets/Images/Symptoms12.png';
import Symptoms13 from '../../Assets/Images/Symptoms13.png';
import Symptoms14 from '../../Assets/Images/Symptoms14.png';
import Symptoms15 from '../../Assets/Images/Symptoms15.png';
// import Symptoms16 from '../../Assets/Images/Symptoms16.png';

const Symptoms = () => {
  const [showAllSymptoms, setShowAllSymptoms] = useState (false);

  const allSymptoms = [
    Symptoms1,
    Symptoms2,
    Symptoms3,
    Symptoms4,
    Symptoms5,
    Symptoms6,
    Symptoms7,
    Symptoms8,
    Symptoms9,
    Symptoms10,
    Symptoms11,
    Symptoms12,
    Symptoms13,
    Symptoms14,
    Symptoms15,
    // Symptoms16,
  ];

  const symptomsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '3px',
    padding:"10px",
    width:"700px",
    height: "30px",
    justifyContent:"center",
    placeItems:"center",
    marginLeft:"15%"
  };

  const displayedSymptoms = showAllSymptoms
    ? allSymptoms
    : allSymptoms.slice (0, 9);

  return (
    <>
      <Container style={{ margin: '50px' }}>
        <Row>
          <Col sm={12} md={12}>
            <div className="symptoms-heading">
              <h2>Choose Your Symptoms</h2>
            </div>
            <div className="Symptoms-Container" style={symptomsContainerStyle}>
              {displayedSymptoms.map((symptom, index) => (
                <Col key={index} className="Symptoms">
                  <img
                    src={symptom}
                    alt={`Symptom ${index + 1}`}
                    className="symptom_img"
                  />
                </Col>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <div className="view">
        <button
          onClick={() => setShowAllSymptoms(!showAllSymptoms)}
          className="view_more view_all"
          style={{ marginTop: '35%'}}
        >
          {showAllSymptoms ? 'View Less' : 'View More'}
        </button>
      </div>
    </>

  );
};

export default Symptoms;
