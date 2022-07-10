import {ADD_USER, REMOVE_USER} from '../actions/user-actions'

const userInitialState = {
  success: false,
  authorized: false,
  email: "",
  name: "",
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        success: true,
        authorized: true,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        success: false,
        authorized: false,
        email: '',
        name: '',
      };
    }
    default: {
      return state
    }
  }
};
