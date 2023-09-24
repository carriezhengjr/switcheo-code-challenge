// CurrencySwapForm.js

import React, { useState } from 'react';
import './styles.css';
import { RiExchangeFill } from "react-icons/ri";

function CurrencySwapForm() {
  const [sendAmount, setSendAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');

  // Function to handle changes in "Amount to send" input
  const handleSendAmountChange = (event) => {
    const value = event.target.value;
    setSendAmount(value);

    // Exchange rate calculations to be added later
  };

  // Function to handle changes in "Amount to receive" input
  const handleReceiveAmountChange = (event) => {
    const value = event.target.value;
    setReceiveAmount(value);

    // Exchange rate calculations to be added later
  };

  // Function to handle "Confirm swap" button click
  const handleConfirmSwap = () => {
    alert('Swap confirmed!');
  };

  return (
    <div className="form-container">
      <h2>Currency Swap Form</h2>
      <div>
        <label>Amount to send:</label>
        <input
          type="number"
          value={sendAmount}
          onChange={handleSendAmountChange}
          placeholder="0.00"
        />
      </div>
      <div className="exchange-icon">
        <RiExchangeFill size={40} style={{ transform: 'rotate(90deg)' }} />
      </div>
      <div>
        <label>Amount to receive:</label>
        <input
          type="number"
          value={receiveAmount}
          onChange={handleReceiveAmountChange}
          placeholder="0.00"
        />
      </div>
      <div className="button-container">
        <button onClick={handleConfirmSwap}>Confirm swap</button>
      </div>
    </div>
  );
}

export default CurrencySwapForm;
