import React, {FC, ReactNode, useEffect} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModalStyles from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useSelector} from "../../utils/types";

interface IModal {
  closeModal: () => void;
  title: string;
  children: ReactNode;
}
//появилась ошибка что key это undefined, при нажатии на любую клавишу, расширил интерфейс
interface IEscButton extends KeyboardEvent {
  key: string
}

const modalRoot = document.getElementById('modals');

const Modal: FC<IModal> = (props) => {
  const {closeModal, title, children} = props;
  const {modalOpened} = useSelector(state => state.modal)

  useEffect(() => {
    const closeEscBtn = (evt: IEscButton): void => {
      evt.key === 'Escape' && closeModal()
    }

    if (modalOpened) {
      document.addEventListener('keydown', closeEscBtn)
    }
    return () => {
      document.removeEventListener('keydown', closeEscBtn)
    }
  }, [modalOpened])

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
    modalRoot!
  )
};

export default Modal;

