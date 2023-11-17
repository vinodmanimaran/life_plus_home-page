import React from 'react';
import CoreValue from '../../Assets/about_assets/corevalue_bg.jpg';
import {
  FaHospital,
  FaUserMd,
  FaDollarSign,
  FaHeartbeat,
  FaHandsHelping,
  FaHands,
} from 'react-icons/fa';
import './CoreValues.css';

const CoreValues = () => {
  const corevalues = [
    {icon: <FaHospital />, value: 'Medicine'},
    {icon: <FaHeartbeat />, value: 'Quality'},
    {icon: <FaHandsHelping />, value: 'Service'},
    {icon: <FaDollarSign />, value: 'Low Price'},
    {icon: <FaUserMd />, value: 'People'},
    {icon: <FaHands />, value: 'Goodwill'},
  ];

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '-10%',
  };

  const itemStyle = {
    textAlign: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '200px',
    height: '200px',
    margin: '50px',
    backgroundColor:"white"
  };

  return (
    <div className="corevalue_container">
      <div className="core_value_parent">
        <h1 className="core_value_heading">Our Core Values</h1>
        <p className="core_paragraph">
          At our core, we value compassion, excellence, and a commitment to your well-being. Here, healing is not just a process; it's a personalized journey. Experience the CoreValue; where your health is our priority, and your smile is the ultimate reward. LifePlus Hospital, where every heartbeat counts, and every life matters.
        </p>
        {/* <img src={CoreValue} alt="Core_Value" className="core_value_img" /> */}
        <h2 className="core_value_icon_heading" style={{margin:"60px"}}>Pillars of Hospital</h2>

        <div style={containerStyle}>
          {corevalues.map ((corevalue, index) => (
            <div key={index} style={itemStyle}>
              <div className="cards">
                <span className="icon">{corevalue.icon}</span>
              </div>
              <div className="value_square">
                <h5>{corevalue.value}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
