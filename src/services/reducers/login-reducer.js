import {LOGIN_EMAIL, LOGIN_FAILED, LOGIN_PASSWORD, LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions/login-actions";

const loginInitialState = {
  email: '',
  password: '',
  isLoading: false,
  errorLoading: false
};

export const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorLoading: false
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        errorLoading: false,
        isLoading: false
      }
    }
    case LOGIN_EMAIL: {
      return {
        ...state,
        email: action.payload,
        errorLoading: false,
        isLoading: false
      }
    }
    case LOGIN_PASSWORD: {
      return {
        ...state,
        password: action.payload,
        errorLoading: false,
        isLoading: false
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        errorLoading: true,
        isLoading: false
      }
    }
    default: {
      return state
    }
  }
};