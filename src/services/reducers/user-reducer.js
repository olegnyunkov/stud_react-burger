import {
  ADD_USER,
  REMOVE_USER,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_FAILED
} from '../actions/user-actions';

const userInitialState = {
  name: "",
  email: '',
  password: '',
  isLoading: false,
  errorLoading: false,
  success: false,
  authorized: false
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorLoading: false
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        errorLoading: true,
        isLoading: false
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorLoading: false
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorLoading: true
      }
    }
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorLoading: false
      }
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorLoading: true
      }
    }
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
        isLoading: false,
        errorLoading: false,
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
