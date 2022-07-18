import {
  ADD_USER,
  REMOVE_USER,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
  REGISTRATION_REQUEST,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  FORGOT_PASS_REQUEST,
  FORGOT_PASS_FAILED,
  FORGOT_PASS_SUCCESS,
  NEW_PASS_REQUEST,
  NEW_PASS_FAILED,
  NEW_PASS_SUCCESS,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  RESET_ERROR,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_SUCCESS
} from '../actions/user-actions';

const userInitialState = {
  name: '',
  email: '',
  password: '',
  loginRequest: false,
  loginError: false,
  logoutRequest: false,
  logoutError: false,
  registrationRequest: false,
  registrationFailed: false,
  forgotPassRequest: false,
  forgotPassFailed: false,
  forgotPassSuccess: false,
  newPassRequest: false,
  newPassFailed: false,
  newPassSuccess: false,
  authorized: false,
  updateUserRequest: false,
  updateUserFailed: false,
  updateUserSuccess: false,
  refreshTokenRequest: false,
  refreshTokenFailed: false,
  refreshTokenSuccess: false
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginError: false
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginError: true
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginError: false
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutError: false
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutError: true
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        logoutError: false
      }
    }
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        registrationRequest: true,
        registrationFailed: false
      }
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationFailed: true
      }
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        registrationRequest: false,
        registrationFailed: false
      }
    }
    case ADD_USER: {
      return {
        ...state,
        authorized: true,
        email: action.payload.user.email,
        name: action.payload.user.name,
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        authorized: false,
        email: '',
        name: '',
      };
    }
    case FORGOT_PASS_REQUEST: {
      return {
        ...state,
        forgotPassRequest: true,
        forgotPassFailed: false,
        forgotPassSuccess: false
      }
    }
    case FORGOT_PASS_FAILED: {
      return {
        ...state,
        forgotPassRequest: false,
        forgotPassFailed: true,
        forgotPassSuccess: false
      }
    }
    case FORGOT_PASS_SUCCESS: {
      return {
        ...state,
        forgotPassRequest: false,
        forgotPassFailed: false,
        forgotPassSuccess: true
      }
    }
    case NEW_PASS_REQUEST: {
      return {
        ...state,
        newPassRequest: true,
        newPassFailed: false,
        newPassSuccess: false
      }
    }
    case NEW_PASS_FAILED: {
      return {
        ...state,
        newPassRequest: false,
        newPassFailed: true,
        newPassSuccess: false
      }
    }
    case NEW_PASS_SUCCESS: {
      return {
        ...state,
        newPassRequest: false,
        newPassFailed: false,
        newPassSuccess: true
      }
    }
    case CHECK_AUTH_REQUEST: {
      return {
        ...state,
        authorized: false,
      }
    }
    case CHECK_AUTH_SUCCESS: {
      return {
        ...state,
        authorized: true,
      }
    }
    case CHECK_AUTH_FAILED: {
      return {
        ...state,
        authorized: false,
      }
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserFailed: false,
        updateUserSuccess: false,
      }
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: true,
        updateUserSuccess: false,
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: false,
        updateUserSuccess: true,
      }
    }
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenFailed: false,
        refreshTokenSuccess: false
      }
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenFailed: true,
        refreshTokenSuccess: false
      }
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenFailed: false,
        refreshTokenSuccess: true
      }
    }
    case RESET_ERROR: {
      return {
        name: '',
        email: '',
        password: '',
        loginRequest: false,
        loginError: false,
        logoutRequest: false,
        logoutError: false,
        registrationRequest: false,
        registrationFailed: false,
        forgotPassRequest: false,
        forgotPassFailed: false,
        forgotPassSuccess: false,
        newPassRequest: false,
        newPassFailed: false,
        newPassSuccess: false,
        authorized: false,
        updateUserRequest: false,
        updateUserFailed: false,
        updateUserSuccess: false,
        refreshTokenRequest: false,
        refreshTokenFailed: false,
        refreshTokenSuccess: false
      }
    }
    default: {
      return state
    }
  }
};
