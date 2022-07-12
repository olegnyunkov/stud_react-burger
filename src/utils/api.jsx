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
  logoutFailed,
  logoutRequest,
  removeUser,
  registrationRequest,
  registrationFailed
} from "../services/actions/user-actions";

const baseUrl = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(new Error(res.status))
}

//запрос ингрединтов на сервер
export const getIngredients = () => (dispatch) => {
    dispatch(getIngredientsRequest());

    fetch(baseUrl + '/ingredients', {
      headers: {'Content-Type': 'application/json'}
    }).then(checkResponse).then(res => {
      res.success
        ? dispatch(getIngredientsSuccess(res.data))
        : dispatch(getIngredientsFailed())
    }).catch(err => {
      dispatch(getIngredientsFailed())
      console.log(err)
    })
}

//запрос номера заказа на сервер
export const getOrder = (orderDataId) => (dispatch) => {
    dispatch(getOrderRequest());

    fetch(baseUrl + '/orders', {
      method: 'POST',
      body: JSON.stringify({'ingredients': orderDataId}),
      headers: {'Content-Type': 'application/json'}
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
export const sendUserRegistrationInfo = (email, password, name) => (dispatch) => {
  dispatch(registrationRequest())

  fetch(baseUrl + '/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name
      }),
      headers: {'Content-Type': 'application/json'}
    }).then(checkResponse).then(res => {
      res.success
        ? dispatch(addUser(res))
        && setCookie('accessToken', res.accessToken.split('Bearer ')[1])
        && localStorage.setItem('refreshToken', res.refreshToken)
        : dispatch(registrationFailed())
    })
    .catch(err => console.log(err))
}

//запрос на восстановление пароля
export const sendResetPasswordRequest = (email) => {

  return fetch(baseUrl + '/password-reset', {
    method: 'POST',
    body: JSON.stringify({
      email
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse)
}

//сохранение нового пароля
export const setNewPassword = (password, token) => {

  return fetch(baseUrl + '/password-reset/reset', {
    method: 'POST',
    body: JSON.stringify({
      password,
      token
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse)
}

//авторизация пользователя
export const sendUserLoginInfo = (email, password) => (dispatch) => {
  dispatch(loginRequest())

  fetch(baseUrl + '/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse).then(res => {
    res.success
      ? dispatch(addUser(res))
      && setCookie('accessToken', res.accessToken.split('Bearer ')[1])
      && localStorage.setItem('refreshToken', res.refreshToken)
      : dispatch(loginFailed())
  }).catch(err => console.log(err))
}

//выход пользователя
export const sendUserLogoutInfo = (token) => (dispatch) => {
  dispatch(logoutRequest())

  fetch(baseUrl + '/auth/logout', {
    method: 'POST',
    body: JSON.stringify({
      token
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse).then(res => {
    res.success
      ? dispatch(removeUser())
      && deleteCookie('accessToken')
      : dispatch(logoutFailed())
  })
    .catch(err => console.log(err))
}

//обновление токена
export const sendRefreshTokenInfo = (token) => {

  return fetch(baseUrl + '/auth/token', {
    method: 'POST',
    body: JSON.stringify({
      token
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse)
}

//получение данных о пользователе
export const getUserInfo = (token) => {

  return fetch(baseUrl + '/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + getCookie('accessToken')
    }
  }).then(checkResponse)
}

//обновление данных о пользователе
export const refreshUserInfo = (token, email, name, password) => {

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
}
