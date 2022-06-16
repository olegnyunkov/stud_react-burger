import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

const modalRoot = document.getElementById('modals');

const Modal = (props) => {
  const {modalOpened, closeModal, title, children} = props;

  useEffect(() => {
    const closeEscBtn = (evt) => {
      evt.key === 'Escape' && closeModal()
    }

    if (modalOpened) {
      document.addEventListener('keydown', closeEscBtn)
    }
    return () => {
      document.removeEventListener('keydown', closeEscBtn)
    }
  })

  return ReactDOM.createPortal(
    <>
      <div className={modalOpened ? ModalStyles.modal__opened : ModalStyles.modal__closed}>
        <div className={`${ModalStyles.modal} pt-10 pl-10 pr-10 pb-15`}>
          <div className={ModalStyles.modal__title}>
            <p className="text text_type_main-large">{title}</p>
            <CloseIcon type={"primary"} onClick={closeModal}/>
          </div>
          {children}
        </div>
        <ModalOverlay closeModal={closeModal}/>
      </div>
    </>,
    modalRoot
  )
};

Modal.propTypes = {
  modalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
}

export default Modal;

