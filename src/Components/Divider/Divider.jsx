import React from 'react';

const WaveSectionDivider = () => {
  const waveStyles = {
    background: '#007ACC', // Background color
    height: '100px', // Adjust the height as needed
    position: 'relative',
    overflow: 'hidden',
  };

  const waveSvgStyles = {
    fill: 'white', // Wave color
  };

  return (
    <div style={waveStyles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={waveSvgStyles}
      >
        <path
          fillOpacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,181.3C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  );
};

export default WaveSectionDivider;
