export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REGISTRATION_NAME = 'REGISTRATION_NAME';
export const REGISTRATION_EMAIL = 'REGISTRATION_EMAIL';
export const REGISTRATION_PASSWORD = 'REGISTRATION_PASSWORD';

export const registrationRequest = () => {
  return {type: REGISTRATION_REQUEST}
}

export const registrationSuccess = (data) => {
  return {type: REGISTRATION_SUCCESS, payload: data}
}

export const registrationFailed = () => {
  return {type: REGISTRATION_FAILED}
}

export const registrationName = (data) => {
  return {type: REGISTRATION_NAME, payload: data}
}

export const registrationEmail = (data) => {
  return {type: REGISTRATION_EMAIL, payload: data}
}

export const registrationPassword = (data) => {
  return {type: REGISTRATION_PASSWORD, payload: data}
}