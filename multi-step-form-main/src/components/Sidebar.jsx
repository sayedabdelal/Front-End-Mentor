import React from 'react';
 

// eslint-disable-next-line react/prop-types
const Sidebar = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Your Info' },
    { number: 2, label: 'Select Plan' },
    { number: 3, label: 'Add-ons' },
    { number: 4, label: 'Summary' },
  ];

  return (
    <aside className="banner">
      <ul className="steps">
        {steps.map((step) => (
          <li key={step.number}>
            <span className={`dot ${currentStep === step.number ? 'selected' : ''}`}>
              {step.number}
            </span>
            <p className="step">
              Step {step.number} <span className="details">{step.label}</span>
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
