export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const loginRequest = () => {
    return {type: LOGIN_REQUEST}
}

export const loginFailed = () => {
    return {type: LOGIN_FAILED}
}

export const logoutRequest = () => {
    return {type: LOGOUT_REQUEST}
}

export const logoutFailed = () => {
    return {type: LOGOUT_FAILED}
}

export const registrationRequest = () => {
    return {type: REGISTRATION_REQUEST}
}

export const registrationFailed = () => {
    return {type: REGISTRATION_FAILED}
}

export const addUser = (data) => {
    return {type: ADD_USER, payload: data}
}

export const removeUser = () => {
    return {type: REMOVE_USER}
}