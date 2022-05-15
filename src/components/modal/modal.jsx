import React, {useState} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('modals');

const Modal = ({isOpened, handleCloseModal}) => {
  return ReactDOM.createPortal(
    <>
      <div className={isOpened ? ModalStyles.modal__closed : ModalStyles.modal__opened}>
        <div className={`${ModalStyles.modal} pt-10 pl-10 pr-10 pb-15`}>
          <div className={ModalStyles.modal__title}>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <CloseIcon type={"primary"} onClick={handleCloseModal}/>
          </div>
          <IngredientDetails/>
        </div>
        <ModalOverlay handleCloseModal={handleCloseModal}/>
      </div>
    </>,
    modalRoot
  )
};

export default Modal;

const IngredientDetails = () => {
  return (
    <>
      <div className={ModalStyles.ingredient__list}>
        <img src="https://code.s3.yandex.net/react/code/bun-02-large.png" alt="Краторная булка N-200i"/>
        <p className={`${ModalStyles.ingredient__title} text text_type_main-medium mt-4`}>Биокотлета из марсианской
          Магнолии</p>
        <div className={`${ModalStyles.ingredient__description} mt-8`}>
          <div className={'mr-5'}>
            <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
            <p className="text text_type_digits-default text_color_inactive">244,4</p>
          </div>
          <div className={'mr-5'}>
            <p className="text text_type_main-default text_color_inactive">Белки, г</p>
            <p className="text text_type_digits-default text_color_inactive">12,2</p>
          </div>
          <div className={'mr-5'}>
            <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
            <p className="text text_type_digits-default text_color_inactive">17,2</p>
          </div>
          <div>
            <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
            <p className="text text_type_digits-default text_color_inactive">10,2</p>
          </div>
        </div>
      </div>
    </>
  )
};

const OrderDetails = () => {

};