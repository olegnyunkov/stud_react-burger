import React, {FC} from 'react';
import OverlayStyles from './modal-overlay.module.css';
import PropTypes from "prop-types";

interface IModalOverlay {
  closeModal: () => void
}

const ModalOverlay: FC<IModalOverlay> = (props) => {
  const {closeModal} = props;

  return (
    <div className={OverlayStyles.modal__overlay} onClick={closeModal}/>
  )
};

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default ModalOverlay;