import React, {useState} from 'react';
import Slider from 'react-slick';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import {FaSun, FaMoon} from 'react-icons/fa';
import TimeSlotRow from './TimeSlot.jsx';
import './Scheduler.css';

const formatDate = date => {
  const day = date.getDate ();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getMonth ()];

  return `${day} ${month}`;
};

const TimeSlot = ({time, onClick, selected}) => {
  return (
    <Button
      variant={selected ? 'primary' : 'outline-primary'}
      className="time-slot-btn"
      onClick={() => onClick (time)}
    >
      {time}
    </Button>
  );
};

// const TimeSlotRow = ({slots, onSlotSelect, selectedDate}) => {
//   const morningSlots = slots.filter (time => time.includes ('AM'));
//   const eveningSlots = slots.filter (time => time.includes ('PM'));
//   console.log ('Rendering TimeSlotRow');

//   console.log ('Morning Slots:', morningSlots);
//   console.log ('Evening Slots:', eveningSlots);

//   return (
//     <div className="container">
//       <Row className="time-slot-row">
//         <Col className="time-slot-col">
//           <h3>Morning <FaSun /></h3>
//         </Col>
//       </Row>
//       <Row className="time-slot-row">
//         {morningSlots.map (time => (
//           <Col key={time} className="time-slot-col">
//             <TimeSlot
//               time={time}
//               onClick={() => onSlotSelect (selectedDate, time)}
//             />
//           </Col>
//         ))}
//       </Row>
//       <hr className="divider" />
//       <Row className="time-slot-row">
//         <Col className="time-slot-col">
//           <h3>Evening <FaMoon /></h3>
//         </Col>
//       </Row>
//       <Row className="time-slot-row">
//         {eveningSlots.map (time => (
//           <Col key={time} className="time-slot-col">
//             <TimeSlot
//               time={time}
//               onClick={() => onSlotSelect (selectedDate, time)}
//             />
//           </Col>
//         ))}
//       </Row>
//       <hr className="divider" />
//     </div>
//   );
// };

const DateSlider = ({dateSlots, selectedDate, onDateSelect}) => {
  const [sliderIndex, setSliderIndex] = useState (0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: <BsChevronLeft />,
    nextArrow: <BsChevronLeft />,

    afterChange: index => {
      setSliderIndex (index);
      onDateSelect (dateSlots[index].date);
    },
  };

  const handlePrev = () => {
    setSliderIndex (sliderIndex - 1);
  };

  const handleNext = () => {
    setSliderIndex (sliderIndex + 1);
  };

  return (
    <div className="date-slider-container ">
      <Slider {...settings} initialSlide={sliderIndex}>
        {dateSlots.map (date => (
          <div
            key={date.date}
            className={`date-item ${selectedDate === date.date ? 'selected' : ''}`}
          >
            <h2 className="date-label">{date.label}</h2>
            <p className="slots-count">Available Slots: {date.slots.length}</p>
          </div>
        ))}
      </Slider>
      <div className="arrow-icons">
        <BsChevronLeft onClick={handlePrev} className="arrow-icon" />
        <BsChevronRight onClick={handleNext} className="arrow-icon" />
      </div>
    </div>
  );
};

const Scheduler = () => {
  const [selectedAppointment, setSelectedAppointment] = useState (null);
  const [selectedDate, setSelectedDate] = useState (null);

  const handleSlotSelect = time => {
    setSelectedAppointment ({date: selectedDate, time});
  };

  // Function to generate time slots from 9:00 AM to 7:30 PM
  const timeSlots = Array.from ({length: 22}, (_, slotIndex) => {
    const hour = Math.floor (slotIndex / 2) + 9; // Start from 9 AM
    const minutes = slotIndex % 2 * 30; // Add half-hour slots

    // Adjust for 12-hour format and handle AM/PM
    const formattedHour = hour % 12 || 12;
    const amPm = hour < 12 ? 'AM' : 'PM';

    return `${formattedHour}:${minutes === 0 ? '00' : minutes} ${amPm}`;
  });

  // Sort timeSlots in ascending order
  const sortedTimeSlots = timeSlots.sort ((time1, time2) => {
    const [hour1, minutes1, period1] = time1
      .match (/(\d+):(\d+) (\w+)/)
      .slice (1);
    const [hour2, minutes2, period2] = time2
      .match (/(\d+):(\d+) (\w+)/)
      .slice (1);

    // Convert to 24-hour format for comparison
    const time1In24Hr =
      (period1 === 'PM' ? +hour1 + 12 : +hour1) * 60 + +minutes1;
    const time2In24Hr =
      (period2 === 'PM' ? +hour2 + 12 : +hour2) * 60 + +minutes2;

    return time1In24Hr - time2In24Hr;
  });

  console.log (sortedTimeSlots);

  const dateSlots = Array.from ({length: 30}, (_, index) => {
    const currentDate = new Date ();
    currentDate.setDate (currentDate.getDate () + index);

    const formattedDate = currentDate.toISOString ().split ('T')[0];
    const label = index === 0
      ? 'Today'
      : index === 1 ? 'Tomorrow' : formatDate (currentDate);

    return {
      date: formattedDate,
      label,
      slots: sortedTimeSlots,
    };
  });

  return (
    <div className="scheduler-container">
      <h1 className="scheduler-title">Book an Appointment</h1>

      <DateSlider
        dateSlots={dateSlots}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />

      {selectedDate &&
        <div className="selected-date-container">
          <TimeSlotRow
            slots={dateSlots.find (date => date.date === selectedDate).slots}
            onSlotSelect={handleSlotSelect}
            selectedDate={selectedDate}
          />
        </div>}
    </div>
  );
};

export default Scheduler;
