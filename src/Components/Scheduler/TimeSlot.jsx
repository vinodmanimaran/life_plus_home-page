import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';


const TimeSlot = ({time, onClick, selected}) => {
  return (
    <Button style={{width:"80px",borderRadius:"15px"}}
      variant={selected ? 'primary' : 'outline-primary'}
      className="time-slot-btn"
      onClick={() => onClick (time)}
    >
      {time}
    </Button>
  );
};

const TimeSlotRow = ({slots, onSlotSelect, selectedDate}) => {
  const morningSlots = slots.filter (time => time.includes ('AM'));
  const eveningSlots = slots.filter (time => time.includes ('PM'));

    const filteredEveningSlots = eveningSlots.filter (
  time => !['12:00 PM', '12:30 PM'].includes (time)
);

    return (
      <>
        <div className="morning">
          <Row className="time-slot-row">
        <Col className="time-slot-col">
          <h3 className="time_slot_morn"> Morning <FaSun /> </h3>
          <hr className="divider" />

        </Col>
      </Row>
      <Row className="time-slot-row">
        {morningSlots.map (time => (
          <Col key={time} className="time-slot-col" >
            <TimeSlot
              time={time}
              onClick={() => onSlotSelect (selectedDate, time)}
            />
          </Col>
        ))}
          </Row>
          </div>
        <div className="evening">
<Row className="time-slot-row">
  <Col className="time-slot-col">
    <h3 className="time_slot_even">Evening <FaMoon /> </h3>

  </Col>
</Row>
<Row className="time-slot-row">
  {filteredEveningSlots.map (time => (
    <Col key={time} className="time-slot-col">
      <TimeSlot time={time} onClick={() => onSlotSelect (selectedDate, time)} />
    </Col>
  ))}
</Row>

        </div>


            <hr className="divider" />
            </>
  );
};

export default TimeSlotRow;
