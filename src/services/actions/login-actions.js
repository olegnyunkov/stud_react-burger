export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const LOGIN_PASSWORD = 'LOGIN_PASSWORD';

export const loginRequest = () => {
  return {type: LOGIN_REQUEST}
}

export const loginSuccess = (data) => {
  return {type: LOGIN_SUCCESS, payload: data}
}

export const loginFailed = () => {
  return {type: LOGIN_FAILED}
}

export const loginEmail = (data) => {
  return {type: LOGIN_EMAIL, payload: data}
}

export const loginPassword = (data) => {
  return {type: LOGIN_PASSWORD, payload: data}
}