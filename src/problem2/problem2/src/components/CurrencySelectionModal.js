// CurrencySelectionModal.js

import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './CurrencySelectionModal.css';

function CurrencySelectionModal({ onSelect, field, options, onClose }) {
  const [selectedCurrency, setSelectedCurrency] = useState('');

  // Function to handle currency selection
  const handleCurrencySelection = () => {
    // Call the parent component's onSelect function to update the selected currency
    onSelect(selectedCurrency, field);
    onClose(); // Close the modal after selection
  };

  return (
    <div className="modal-overlay">
      <div className="currency-modal">
        <button className="close-button" onClick={onClose}>
          <AiOutlineClose />
        </button>
        <h3>Select Currency</h3>
        <input
          type="text"
          placeholder="Type currency..."
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        />
        <ul>
          {options.map((option) => (
            <li key={option.value} onClick={() => setSelectedCurrency(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
        <button className="select-button" onClick={handleCurrencySelection}>Select</button>
      </div>
    </div>
  );
}

export default CurrencySelectionModal;
