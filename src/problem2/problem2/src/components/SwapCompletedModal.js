import React from 'react';
import { MdCelebration } from "react-icons/md";
import './SwapCompletedModal.css';

function SwapCompletedModal({ onClose }) {
  // Function to handle modal closure
  const closeModal = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="swap-completed-modal">
        <MdCelebration className="celebration-icon" />
        <h3>Swap completed!</h3>
        <p>Click anywhere to close.</p>
      </div>
    </div>
  );
}

export default SwapCompletedModal;
