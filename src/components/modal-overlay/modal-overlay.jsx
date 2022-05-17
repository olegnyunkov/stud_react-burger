import React from 'react';
import OverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({closeModal}) => {

  return (
    <div className={OverlayStyles.modal__overlay} onClick={closeModal}/>
  )
};

export default ModalOverlay;