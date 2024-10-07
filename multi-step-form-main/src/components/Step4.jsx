import React from 'react';
import Button from './Button';
 

const Step4 = ({ onPrev, onConfirm, formData }) => {
  const { plan, billing, addOns } = formData;

  const total = (() => {
    let totalPrice = billing === 'monthly' ? plan.price : plan.price * 10;
    addOns.forEach((addOn) => {
      totalPrice += billing === 'monthly' ? addOn.price : addOn.price * 10;
    });
    return billing === 'monthly' ? `$${totalPrice}/mo` : `$${totalPrice}/yr`;
  })();

  return (
    <article className="card-wrapper" id="step-4">
      <article className="card">
        <div className="content">
          <header>
            <h1>Finishing Up</h1>
            <p>Double-check everything looks OK before confirming.</p>
          </header>
          <ul className="finishing boxes">
            {/* Plan Summary */}
            <li className="boxe">
              <div>
                <p className="offer">
                  {plan.name} ({billing})
                  <button className="change" onClick={() => onPrev(2)}>
                    Change
                  </button>
                </p>
              </div>
              <span className="price">
                ${billing === 'monthly' ? plan.price + '/mo' : plan.price * 10 + '/yr'}
              </span>
            </li>
            {/* Add-ons */}
            {addOns.map((addOn) => (
              <li key={addOn.id} className="boxe">
                <p className="offer">{addOn.name}</p>
                <span className="price">
                  +${billing === 'monthly' ? addOn.price + '/mo' : addOn.price * 10 + '/yr'}
                </span>
              </li>
            ))}
            {/* Total */}
            <li className="boxe total">
              <p className="offer">Total ({billing})</p>
              <span className="price">{total}</span>
            </li>
          </ul>
        </div>
      </article>
      <footer>
        <div className="btn-container">
          <Button type="button" className="link-back prev" onClick={() => onPrev(3)}>
            Go Back
          </Button>
          <Button type="button" className="next confirm" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </footer>
    </article>
  );
};

export default Step4;
