import React, {FC} from 'react';
import OverlayStyles from './modal-overlay.module.css';

interface IModalOverlay {
  closeModal: () => void
}

const ModalOverlay: FC<IModalOverlay> = (props) => {
  const {closeModal} = props;

  return (
    <div className={OverlayStyles.modal__overlay} onClick={closeModal}/>
  )
};

export default ModalOverlay;