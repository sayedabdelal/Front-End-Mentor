import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import './App.css'; // Import your main CSS

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: null,
    billing: 'monthly',
    addOns: [],
  });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = (step = null) => {
    if (step) {
      setCurrentStep(step);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const handleConfirm = () => setCurrentStep(5);

  return (
    <div className="App">
      <main>
        <section className="wrapper step-form">
          <Sidebar currentStep={currentStep} />
          {currentStep === 1 && (
            <Step1 onNext={handleNext} formData={formData} setFormData={setFormData} />
          )}
          {currentStep === 2 && (
            <Step2
              onNext={handleNext}
              onPrev={() => handlePrev()}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {currentStep === 3 && (
            <Step3
              onNext={handleNext}
              onPrev={() => handlePrev()}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {currentStep === 4 && (
            <Step4
              onPrev={(step) => handlePrev(step)}
              onConfirm={handleConfirm}
              formData={formData}
            />
          )}
          {currentStep === 5 && <Step5 />}
        </section>
      </main>
    </div>
  );
}

export default App;
