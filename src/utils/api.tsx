import {
  getOrderRequest,
  getOrderSuccess,
  getOrderFailed
} from "../services/actions/order-actions";

import {
  getIngredientsFailed,
  getIngredientsRequest,
  getIngredientsSuccess,
} from '../services/actions/ingredients-actions';
import {deleteCookie, getCookie, setCookie} from "./cookie";
import {
  addUser,
  loginFailed,
  loginRequest,
  loginSuccess,
  logoutFailed,
  logoutRequest,
  logoutSuccess,
  removeUser,
  registrationRequest,
  registrationFailed,
  forgotPassRequest,
  forgotPassSuccess,
  forgotPassFailed,
  newPassRequest,
  newPassSuccess,
  newPassFailed,
  checkAuthRequest,
  checkAuthSuccess,
  checkAuthFailed,
  updateUserRequest,
  updateUserFailed,
  updateUserSuccess,
  registrationSuccess,
  refreshTokenRequest,
  refreshTokenFailed,
  refreshTokenSuccess
} from "../services/actions/user-actions";
import {AppThunk} from "../services/store";

const baseUrl: string = 'https://norma.nomoreparties.space/api';

const checkResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject({res})
}

//запрос ингрединтов на сервер
export const getIngredients = (): AppThunk<Promise<unknown>> => (dispatch) => {
    dispatch(getIngredientsRequest());

    return fetch(baseUrl + '/ingredients', {
      headers: {'Content-Type': 'application/json'}
    }).then(checkResponse).then((res) => {
      res.success
        ? dispatch(getIngredientsSuccess(res.data))
        : dispatch(getIngredientsFailed())
    }).catch(err => {
      dispatch(getIngredientsFailed())
      console.log(err)
    })
}

//запрос номера заказа на сервер
export const getOrder = (orderDataId: string[]): AppThunk<Promise<unknown>> => (dispatch) => {
    dispatch(getOrderRequest());

    return fetch(baseUrl + '/orders', {
      method: 'POST',
      body: JSON.stringify({'ingredients': orderDataId}),
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + getCookie('accessToken')
      }
    }).then(checkResponse).then(res => {
      res.success
        ? dispatch(getOrderSuccess(res))
        : dispatch(getOrderFailed())
    }).catch(err => {
      dispatch(getOrderFailed())
      console.log(err)
    })
}

//регистрация нового пользователя
export const sendUserRegistrationInfo = (email: string, password: string, name: string): AppThunk<Promise<unknown>> => (dispatch) => {
  dispatch(registrationRequest())

  return fetch(baseUrl + '/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name
      }),
      headers: {'Content-Type': 'application/json'}
    }).then(checkResponse).then(res => {
      if(res.success) {
        dispatch(addUser(res));
        dispatch(registrationSuccess());
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        localStorage.setItem('refreshToken', res.refreshToken)
      } else {
        dispatch(registrationFailed())
      }
    }).catch(err => {
      dispatch(registrationFailed())
      console.log(err)
    })
}

//запрос на восстановление пароля
export const sendResetPasswordRequest = (email: string): AppThunk<Promise<unknown>> => (dispatch) => {
  dispatch(forgotPassRequest())

  return fetch(baseUrl + '/password-reset', {
    method: 'POST',
    body: JSON.stringify({
      email
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse).then(res => {
    res.success
      ? dispatch(forgotPassSuccess())
      : dispatch(forgotPassFailed())
  }).catch((err) => {
    dispatch(forgotPassFailed())
    console.log(err)
  })
}

//сохранение нового пароля
export const setNewPassword = (password: string, token: string): AppThunk<Promise<unknown>> => (dispatch) => {
  dispatch(newPassRequest())

  return fetch(baseUrl + '/password-reset/reset', {
    method: 'POST',
    body: JSON.stringify({
      password,
      token
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse).then(res => {
    res.success
      ? dispatch(newPassSuccess())
      : dispatch(newPassFailed())
  }).catch(err => {
    dispatch(newPassFailed())
    console.log(err)
  })
}

//авторизация пользователя
export const sendUserLoginInfo = (email: string, password: string): AppThunk<Promise<unknown>> => (dispatch) => {
  dispatch(loginRequest())

  return fetch(baseUrl + '/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse).then(res => {
    if(res.success) {
      setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
      dispatch(loginSuccess());
      dispatch(addUser(res));
      localStorage.setItem('refreshToken', res.refreshToken)
    } else {
      dispatch(loginFailed())
    }
  }).catch(err => {
    dispatch(loginFailed())
    console.log(err)
  })
}

//выход пользователя
export const sendUserLogoutInfo = (token: string | null): AppThunk<Promise<unknown>> => (dispatch) => {
  dispatch(logoutRequest())

  return fetch(baseUrl + '/auth/logout', {
    method: 'POST',
    body: JSON.stringify({
      token
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse).then(res => {
    if(res.success) {
      dispatch(removeUser());
      dispatch(logoutSuccess());
      deleteCookie('accessToken')
    } else {
      dispatch(logoutFailed())
    }    
  })
    .catch(err => {
      dispatch(logoutFailed())
      console.log(err)
    })
}

//обновление токена
export const sendRefreshTokenInfo = (token: string | null): AppThunk<Promise<unknown>> => (dispatch) => {
  dispatch(refreshTokenRequest())

  return fetch(baseUrl + '/auth/token', {
    method: 'POST',
    body: JSON.stringify({
      "token": token
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse).then(res => {
    if(res.success) {
      dispatch(refreshTokenSuccess());
      setCookie('accessToken', res.accessToken.split('Bearer ')[1])
    } else {
      dispatch(refreshTokenFailed())
    }
  }).catch(err => {
    dispatch(refreshTokenFailed())
    console.log(err)
  })
}

//получение данных о пользователе
export const getUserInfo = (): AppThunk<Promise<unknown>> => (dispatch) => {
  dispatch(checkAuthRequest())

  return fetch(baseUrl + '/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + getCookie('accessToken')
    }
  })
    .then(checkResponse)
    .then(res => {
      if(res.success) {
        dispatch(checkAuthSuccess());
        dispatch(addUser(res))
      } else {
        dispatch(checkAuthFailed())
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(checkAuthFailed())
      if(err) {
        dispatch(sendRefreshTokenInfo(localStorage.getItem('refreshToken')))
      }
    })
}

//обновление данных о пользователе
export const refreshUserInfo = (email: string, name: string, password: string): AppThunk<Promise<unknown>> => (dispatch) => {
  dispatch(updateUserRequest())

  return fetch(baseUrl + '/auth/user', {
    method: 'PATCH',
    body: JSON.stringify({
      email,
      name,
      password
    }),
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + getCookie('accessToken')
    }
  }).then(checkResponse)
    .then(res => {
      if(res.success) {
        dispatch(addUser(res));
        dispatch(updateUserSuccess())
      } else {
        dispatch(updateUserFailed())
      }
    })
    .catch(err => {
      dispatch(updateUserFailed())
      console.log(err)
    })
}
