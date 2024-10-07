import React, { useState } from 'react';
import Button from './Button';
 

const availableAddOns = [
  { id: 1, name: 'Online Service', description: 'Access to multiplayer games', price: 1 },
  { id: 2, name: 'Larger Storage', description: 'Extra 1TB of cloud save', price: 2 },
  { id: 3, name: 'Customizable Profile', description: 'Custom theme on your profile', price: 2 },
];

// eslint-disable-next-line react/prop-types
const Step3 = ({ onNext, onPrev, formData, setFormData }) => {
  const [selectedAddOns, setSelectedAddOns] = useState(formData.addOns || []);

  const handleAddOnToggle = (addOn) => {
    if (selectedAddOns.find((item) => item.id === addOn.id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item.id !== addOn.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  const handleNext = () => {
    setFormData({ ...formData, addOns: selectedAddOns });
    onNext();
  };

  return (
    <article className="card-wrapper" id="step-3">
      <article className="card">
        <div className="content">
          <header>
            <h1>Pick Add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
          </header>
          <ul className="add-ons boxes">
            {availableAddOns.map((addOn) => (
              <li
                key={addOn.id}
                className={`add-on-box ${
                  selectedAddOns.find((item) => item.id === addOn.id) ? 'selected' : ''
                }`}
                onClick={() => handleAddOnToggle(addOn)}
              >
                <input
                  type="checkbox"
                  checked={!!selectedAddOns.find((item) => item.id === addOn.id)}
                  onChange={() => handleAddOnToggle(addOn)}
                />
                <div>
                  <h2>{addOn.name}</h2>
                  <p>{addOn.description}</p>
                </div>
                <span className="price">
                  +${formData.billing === 'monthly' ? addOn.price + '/mo' : addOn.price * 10 + '/yr'}
                </span>
              </li>
            ))}
          </ul>
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

export default Step3;
