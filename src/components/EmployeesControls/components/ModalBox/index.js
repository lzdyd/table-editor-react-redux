import React from 'react';

export default function ({ show, onClose, modalboxName }) {
  if (!show) {
    return null;
  }

  const ModalBoxHTML = require('../' + modalboxName + '/index').default;

  // The gray background
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
    zIndex: 1000
  };

  // The modal "window"
  const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30
  };

  const onModalBoxClick = (e) => {
    if (e.target.classList.contains('backdrop') || e.target.classList.contains('close-button')) onClose(modalboxName);
  };

  return (
    <div className="backdrop" style={ backdropStyle } onClick={ onModalBoxClick }>
      <div className="modal" style={ modalStyle }>
        <ModalBoxHTML />
        <button className="close-button">Close</button>
      </div>
    </div>
  );
}
