import React from 'react';
import OverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({closeIngredientsModal}) => {

  return (
    <div className={OverlayStyles.modal__overlay} onClick={closeIngredientsModal}/>
  )
};

export default ModalOverlay;