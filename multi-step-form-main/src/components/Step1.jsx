import React, { useState } from 'react';
import Button from './Button';
 

// eslint-disable-next-line react/prop-types
const Step1 = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    } 
  };

  return (
    <article className="card-wrapper" id="step-1">
      <article className="card">
        <div className="content">
          <header>
            <h1>Personal Info</h1>
            <p>Please provide your name, email, address, and phone number.</p>
          </header>
          <form className="form">
            {/* Name Field */}
            <div className="form-row">
              <div className="input-header">
                <label htmlFor="name">Name</label>
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Stephen King"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            {/* Email Field */}
            <div className= "form-row" >
              <div className="input-header">
                <label htmlFor="email">Email Address</label>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e.g. stephenking@lorem.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            {/* Phone Field */}
            <div className="form-row">
              <div className="input-header">
                <label htmlFor="phone">Phone Number</label>
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="e.g. +1 234 567 890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </form>
        </div>
      </article>
      <footer>
        <div className="btn-container">
          <Button type="button" className="next" onClick={handleNext}>
            Next Step
          </Button>
        </div>
      </footer>
    </article>
  );
};

export default Step1;
