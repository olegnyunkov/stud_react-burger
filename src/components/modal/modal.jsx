import React from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes, {func} from "prop-types";

const modalRoot = document.getElementById('modals');

const Modal = ({ isOpened, orderIsOpened, closeModal, closeEscBtn, title, children }) => {
  React.useEffect(() => {
    if(isOpened || orderIsOpened) {
      document.addEventListener('keydown', closeEscBtn)
    }
    return () => {
      document.removeEventListener('keydown', closeEscBtn)
    }
  })

  return ReactDOM.createPortal(
    <>
      <div className={isOpened || orderIsOpened ? ModalStyles.modal__opened : ModalStyles.modal__closed}>
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
  closeModal: PropTypes.func.isRequired,
  closeEscBtn: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
}

export default Modal;

