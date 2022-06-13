import React from 'react';
import OverlayStyles from './modal-overlay.module.css';
import PropTypes from "prop-types";

const ModalOverlay = ({closeModal}) => {

  return (
    <div className={OverlayStyles.modal__overlay} onClick={closeModal}/>
  )
};

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default ModalOverlay;