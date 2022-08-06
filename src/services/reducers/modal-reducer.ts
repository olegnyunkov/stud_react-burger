import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal-actions'
import {TModalActions, TModalState} from "../../utils/types";

const modalInitialState = {
    modalOpened: false,
    modalClosed: false
  };

export const modalReducer = (state = modalInitialState, action: TModalActions): TModalState => {
    switch (action.type) {
      case OPEN_MODAL: {
        return {
          ...state,
          modalOpened: true,
            modalClosed: false
        }
      }
      case CLOSE_MODAL: {
        return {
          ...state,
          modalOpened: false,
        modalClosed: true
        }
      }
      default: {
        return state
      }
    }
  };