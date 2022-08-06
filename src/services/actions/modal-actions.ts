import {ICloseModal, IOpenModal} from "../../utils/types";

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (): IOpenModal => {
  return { type: OPEN_MODAL }
};

export const closeModal = (): ICloseModal => {
  return { type: CLOSE_MODAL }
};