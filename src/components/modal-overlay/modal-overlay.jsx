import React from 'react';
import OverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({handleCloseModal}) => {

  return (
    <div className={OverlayStyles.modal__overlay} onClick={handleCloseModal}/>
  )
};

export default ModalOverlay;