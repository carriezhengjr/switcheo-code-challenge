import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './CurrencySelectionModal.css';

function CurrencySelectionModal({ onSelect, field, options, onClose }) {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [filterText, setFilterText] = useState(''); // State for filter text

  // Function to handle currency selection
  const handleCurrencySelection = (option) => {
    // Call the parent component's onSelect function to update the selected currency
    onSelect(option.value, field);
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

  // Filter options based on the filter text
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(filterText.toLowerCase())
  );

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
          value={filterText} // Bind input value to filterText
          onChange={(e) => setFilterText(e.target.value)} // Update filterText on input change
        />
        <ul>
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setSelectedCurrency(option.value);
                setFilterText(''); // Clear the filter text on selection
                handleCurrencySelection(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CurrencySelectionModal;
