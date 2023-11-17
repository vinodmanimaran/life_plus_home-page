import React from 'react';
import './BeforePayment.css';

const BeforePayment = () => {
  const containerStyles = {
    width: '60rem',
    height: '50rem',
    borderRadius: '37px',
    border: '1px solid rgba(41, 41, 41, 0.15)',
    background: 'var(--White, #f2f3f2)',
    boxShadow: '6px 6px 15px 0px rgba(206, 207, 206, 0.9), ' +
      '-6px -6px 12px 0px rgba(255, 255, 255, 0.9), ' +
      '6px -6px 12px 0px rgba(206, 207, 206, 0.2), ' +
      '-6px 6px 12px 0px rgba(206, 207, 206, 0.2), ' +
      '-1px -1px 2px 0px rgba(206, 207, 206, 0.5) inset, ' +
      '1px 1px 2px 0px rgba(255, 255, 255, 0.3) inset',
    margin: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center the content vertically
  };

  const handleKeyPress = event => {
    const keyCode = event.which || event.keyCode;
    const isNumeric = /^[0-9\b]+$/.test (String.fromCharCode (keyCode));

    if (!isNumeric) {
      event.preventDefault ();
    }
  };

  return (
    <div style={containerStyles}>
      <div className="main-field">
        <label className="label">Enter your Consultation Fees</label><br />
        <input
          type="text"
          onKeyPress={handleKeyPress}
          placeholder="Enter your consultation Fees"
          style={{width: '500px'}}
        />
        <br />

        <label className="label">Enter your Doctor Fees</label><br />
        <input
          type="text"
          onKeyPress={handleKeyPress}
          placeholder="Enter your Doctor Fees"
                    style={{width: '500px'}}

        />
        <br />
      </div>
      <button className="submit">Submit</button>
    </div>
  );
};

export default BeforePayment;
