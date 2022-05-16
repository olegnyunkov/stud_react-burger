import React, {useState} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from './modal.module.css';
import {CloseIcon, CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('modals');

const Modal = ({isOpened, handleCloseModal, modalInfo}) => {
  
  return ReactDOM.createPortal(
    <>
      <div className={isOpened ? ModalStyles.modal__closed : ModalStyles.modal__opened}>
        <div className={`${ModalStyles.modal} pt-10 pl-10 pr-10 pb-15`}>
          <div className={ModalStyles.modal__title}>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <CloseIcon type={"primary"} onClick={handleCloseModal}/>
          </div>
          <IngredientDetails modalInfo={modalInfo}/>
        </div>
        <ModalOverlay handleCloseModal={handleCloseModal}/>
      </div>
    </>,
    modalRoot
  )
};

export default Modal;

const IngredientDetails = ({modalInfo}) => {
  return (
    <>
      <div className={ModalStyles.ingredient__list}>
        <img src={modalInfo.image_large} alt={modalInfo.name}/>
        <p className={`${ModalStyles.ingredient__title} text text_type_main-medium mt-4`}>{modalInfo.name}</p>
        <div className={`${ModalStyles.ingredient__description} mt-8`}>
          <div className={'mr-5'}>
            <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
            <p className="text text_type_digits-default text_color_inactive">{modalInfo.calories}</p>
          </div>
          <div className={'mr-5'}>
            <p className="text text_type_main-default text_color_inactive">Белки, г</p>
            <p className="text text_type_digits-default text_color_inactive">{modalInfo.proteins}</p>
          </div>
          <div className={'mr-5'}>
            <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
            <p className="text text_type_digits-default text_color_inactive">{modalInfo.fat}</p>
          </div>
          <div>
            <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
            <p className="text text_type_digits-default text_color_inactive">{modalInfo.carbohydrates}</p>
          </div>
        </div>
      </div>
    </>
  )
};

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