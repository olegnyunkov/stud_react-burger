import React, {useState} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from './modal.module.css';
import {CloseIcon, CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('modals');

const Modal = ({isOpened, closeIngredientsModal, modalInfo}) => {
  
  return ReactDOM.createPortal(
    <>
      <div className={isOpened ? ModalStyles.modal__closed : ModalStyles.modal__opened}>
        <div className={`${ModalStyles.modal} pt-10 pl-10 pr-10 pb-15`}>
          <div className={ModalStyles.modal__title}>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <CloseIcon type={"primary"} onClick={closeIngredientsModal}/>
          </div>
        </div>
        <ModalOverlay closeIngredientsModal={closeIngredientsModal}/>
      </div>
    </>,
    modalRoot
  )
};

export default Modal;

const OrderDetails = () => {
  return (
    <>
      <p className="text text_type_digits-medium">034536</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <CheckMarkIcon type="primary" />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </>
  )
};