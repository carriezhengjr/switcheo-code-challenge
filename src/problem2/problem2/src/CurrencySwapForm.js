// CurrencySwapForm.js

import React, { useState, useEffect } from 'react';
import { RiExchangeFill } from "react-icons/ri";
import './styles.css';
import CurrencySelectionModal from './components/CurrencySelectionModal';

function CurrencySwapForm() {
  const [sendAmount, setSendAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [selectedSendCurrency, setSelectedSendCurrency] = useState('');
  const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState('');
  const [isSendCurrencyModalOpen, setIsSendCurrencyModalOpen] = useState(false);
  const [isReceiveCurrencyModalOpen, setIsReceiveCurrencyModalOpen] = useState(false);
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    // Fetch JSON data.
    fetch('https://interview.switcheo.com/prices.json')
      .then((response) => response.json())
      .then((data) => {
        // Extract unique currency codes 
        const uniqueCurrencyCodes = [...new Set(data.map((item) => item.currency))];

        // Create currency options with code and label
        const options = uniqueCurrencyCodes.map((code) => ({
          value: code,
          label: code,
        }));

        setCurrencyOptions(options);
      })
      .catch((error) => {
        console.error('Error fetching currency data:', error);
      });
  }, []);

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

  // Function to open the currency selection modal for sending
  const openSendCurrencyModal = () => {
    setIsSendCurrencyModalOpen(true);
  };

  // Function to open the currency selection modal for receiving
  const openReceiveCurrencyModal = () => {
    setIsReceiveCurrencyModalOpen(true);
  };

  // Function to close the currency selection modal
  const closeCurrencyModal = () => {
    setIsSendCurrencyModalOpen(false);
    setIsReceiveCurrencyModalOpen(false);
  };

  // Function to handle currency selection for sending
  const handleSendCurrencySelect = (currency) => {
    setSelectedSendCurrency(currency);
    closeCurrencyModal();
  };

  // Function to handle currency selection for receiving
  const handleReceiveCurrencySelect = (currency) => {
    setSelectedReceiveCurrency(currency);
    closeCurrencyModal();
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
      <div className="currency-button-container">
        <button className="currency-button" onClick={openSendCurrencyModal}>
          {selectedSendCurrency || 'Select currency'}
        </button>
        <div className="exchange-icon">
          <RiExchangeFill size={40} style={{ transform: 'rotate(90deg)' }} />
        </div>
        <button className="currency-button" onClick={openReceiveCurrencyModal}>
          {selectedReceiveCurrency || 'Select currency'}
        </button>
        {isSendCurrencyModalOpen && (
          <CurrencySelectionModal onSelect={handleSendCurrencySelect} field="send" options={currencyOptions} onClose={closeCurrencyModal} />
        )}
        {isReceiveCurrencyModalOpen && (
          <CurrencySelectionModal onSelect={handleReceiveCurrencySelect} field="receive" options={currencyOptions} onClose={closeCurrencyModal} />
        )}
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
        <button onClick={handleConfirmSwap} className="confirm-swap-button">
          Confirm swap
        </button>
      </div>
    </div>
  );
}

export default CurrencySwapForm;
