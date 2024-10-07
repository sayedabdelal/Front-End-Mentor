import React, { useState } from 'react';
import Button from './Button';
 

const plans = [
  { id: 1, name: 'Arcade', price: 9, img: '/images/icon-arcade.svg' },
  { id: 2, name: 'Advanced', price: 12,img: '/images/icon-advanced.svg' },
  { id: 3, name: 'Pro', price: 15, img: '/images/icon-pro.svg' },
];

// eslint-disable-next-line react/prop-types
const Step2 = ({ onNext, onPrev, formData, setFormData }) => {
   
  // eslint-disable-next-line react/prop-types
  const [billing, setBilling] = useState(formData.billing || 'monthly');

  const handlePlanSelect = (plan) => {
    setFormData({ ...formData, plan, billing });
  };

  const handleNext = () => {
    if (formData.plan) {
      onNext();
    } else {
      alert('Please select a plan.');
    }
  };

  const toggleBilling = () => {
    const newBilling = billing === 'monthly' ? 'yearly' : 'monthly';
    setBilling(newBilling);
    setFormData({ ...formData, billing: newBilling });
  };

  return (
    <article className="card-wrapper" id="step-2">
      <article className="card">
        <div className="content">
          <header>
            <h1>Select Your Plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </header>
          <ul className="plans boxes">
            {plans.map((plan) => (
              <li
                key={plan.id}
                className={`plan ${formData.plan && formData.plan.id === plan.id ? 'selected' : ''}`}
                onClick={() => handlePlanSelect(plan)}
              >
                <img src={plan.img} alt={plan.name} />
                
                <h2>{plan.name}</h2>
                <p>
                  ${billing === 'monthly' ? plan.price + '/mo' : plan.price * 10 + '/yr'}
                </p>
              </li>
            ))}
          </ul>
          <div className="switch-box">
            <label className="switch">
              <input type="checkbox" checked={billing === 'yearly'} onChange={toggleBilling} />
              <span className="slider"></span>
            </label>
            <p>Monthly</p>
            <p>Yearly</p>
          </div>
        </div>
      </article>
      <footer>
        <div className="btn-container">
          <Button type="button" className="link-back prev" onClick={onPrev}>
            Go Back
          </Button>
          <Button type="button" className="next" onClick={handleNext}>
            Next Step
          </Button>
        </div>
      </footer>
    </article>
  );
};

export default Step2;
