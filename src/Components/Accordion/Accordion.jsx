import React, {useState} from 'react';
import './Accordin.css';

const Accordion = ({title, content}) => {
  const [isExpanded, setIsExpanded] = useState (false);

  const toggleAccordion = () => {
    setIsExpanded (!isExpanded);
  };

  return (
    <div className={`accordion main ${isExpanded ? 'expanded' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <span>{title}</span>
        <span className="arrow">{isExpanded ? '▼' : '▶'}</span>
      </div>
      <div className="accordion-content">
        {content}
      </div>
    </div>
  );
};

export default Accordion;
