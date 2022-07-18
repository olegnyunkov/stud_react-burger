export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const FORGOT_PASS_REQUEST = 'FORGOT_PASS_REQUEST';
export const FORGOT_PASS_FAILED = 'FORGOT_PASS_FAILED';
export const FORGOT_PASS_SUCCESS = 'FORGOT_PASS_SUCCESS';
export const NEW_PASS_REQUEST = 'NEW_PASS_REQUEST';
export const NEW_PASS_FAILED = 'NEW_PASS_FAILED';
export const NEW_PASS_SUCCESS = 'NEW_PASS_SUCCESS';
export const CHECK_AUTH_REQUEST = 'CHECK_AUTH_REQUEST';
export const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
export const CHECK_AUTH_FAILED = 'CHECK_AUTH_FAILED';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const RESET_ERROR = 'RESET_ERROR';
export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';

export const loginRequest = () => {
    return {type: LOGIN_REQUEST}
}

export const loginFailed = () => {
    return {type: LOGIN_FAILED}
}

export const loginSuccess = () => {
    return {type: LOGIN_SUCCESS}
}

export const logoutRequest = () => {
    return {type: LOGOUT_REQUEST}
}

export const logoutFailed = () => {
    return {type: LOGOUT_FAILED}
}

export const logoutSuccess = () => {
    return {type: LOGOUT_SUCCESS}
}

export const registrationRequest = () => {
    return {type: REGISTRATION_REQUEST}
}

export const registrationFailed = () => {
    return {type: REGISTRATION_FAILED}
}

export const registrationSuccess = () => {
    return {type: REGISTRATION_SUCCESS}
}

export const addUser = (data) => {
    return {type: ADD_USER, payload: data}
}

export const removeUser = () => {
    return {type: REMOVE_USER}
}

export const forgotPassRequest = () => {
    return {type: FORGOT_PASS_REQUEST}
}

export const forgotPassFailed = () => {
    return {type: FORGOT_PASS_FAILED}
}

export const forgotPassSuccess = () => {
    return {type: FORGOT_PASS_SUCCESS}
}

export const newPassRequest = () => {
    return {type: NEW_PASS_REQUEST}
}

export const newPassFailed = () => {
    return {type: NEW_PASS_FAILED}
}

export const newPassSuccess = () => {
    return {type: NEW_PASS_SUCCESS}
}

export const checkAuthRequest = () => {
    return {type: CHECK_AUTH_REQUEST}
}

export const checkAuthSuccess = () => {
    return {type: CHECK_AUTH_SUCCESS}
}

export const checkAuthFailed = () => {
    return {type: CHECK_AUTH_FAILED}
}

export const updateUserRequest = () => {
    return {type: UPDATE_USER_REQUEST}
}

export const updateUserFailed = () => {
    return {type: UPDATE_USER_FAILED}
}

export const updateUserSuccess = () => {
    return {type: UPDATE_USER_SUCCESS}
}

export const resetError = () => {
    return {type: RESET_ERROR}
}

export const refreshTokenRequest = () => {
    return {type: REFRESH_TOKEN_REQUEST}
}

export const refreshTokenFailed = () => {
    return {type: REFRESH_TOKEN_FAILED}
}

export const refreshTokenSuccess = () => {
    return {type: REFRESH_TOKEN_SUCCESS}
}