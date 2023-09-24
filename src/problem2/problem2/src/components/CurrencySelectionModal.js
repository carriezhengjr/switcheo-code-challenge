// CurrencySelectionModal.js

import React, { useState, useEffect } from 'react';
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

  // Function to handle a click outside of the modal
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the modal
    window.addEventListener('click', handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

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
