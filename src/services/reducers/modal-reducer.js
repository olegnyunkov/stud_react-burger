import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal-actions'

const modalInitialState = {
    modalOpened: false,
    modalClosed: false
  };

export const modalReducer = (state = modalInitialState, action) => {
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