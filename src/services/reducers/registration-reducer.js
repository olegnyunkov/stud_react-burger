import {
  REGISTRATION_EMAIL,
  REGISTRATION_FAILED, REGISTRATION_NAME, REGISTRATION_PASSWORD,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS
} from "../actions/registration-actions";

const registrationInitialState = {
  email: '',
  password: '',
  name: '',
  isLoading: false,
  errorLoading: false
};

export const registrationReducer = (state = registrationInitialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorLoading: false
      }
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
        errorLoading: false,
        isLoading: false
      }
    }
    case REGISTRATION_NAME: {
      return {
        ...state,
        name: action.payload,
        errorLoading: false,
        isLoading: false
      }
    }
    case REGISTRATION_EMAIL: {
      return {
        ...state,
        email: action.payload,
        errorLoading: false,
        isLoading: false
      }
    }
    case REGISTRATION_PASSWORD: {
      return {
        ...state,
        password: action.payload,
        errorLoading: false,
        isLoading: false
      }
    }
    case REGISTRATION_FAILED: {
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