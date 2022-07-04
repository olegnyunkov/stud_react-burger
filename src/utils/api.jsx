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
import {registrationRequest} from "../services/actions/registration-actions";

const baseUrl = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(new Error(res.status))
}

//запрос ингрединтов на сервер
export const getIngredients = () => {
  return function (dispatch) {
    dispatch(getIngredientsRequest());

    fetch(baseUrl + '/ingredients', {
      headers: {'Content-Type': 'application/json'}
    }).then(checkResponse).then(res => {
      res.success ? dispatch(getIngredientsSuccess(res.data)) : dispatch(getIngredientsFailed())
    }).catch(err => {
      dispatch(getIngredientsFailed())
      console.log(err)
    })
  }
}

//запрос номера заказа на сервер
export const getOrder = (orderDataId) => {
  return function (dispatch) {
    dispatch(getOrderRequest());

    fetch(baseUrl + '/orders', {
      method: 'POST',
      body: JSON.stringify({'ingredients': orderDataId}),
      headers: {'Content-Type': 'application/json'}
    }).then(checkResponse).then(res => {
      res.success ? dispatch(getOrderSuccess(res)) : dispatch(getOrderFailed())
    }).catch(err => {
      dispatch(getOrderFailed())
      console.log(err)
    })
  }
}

//регистрация нового пользователя
export const sendUserRegistrationInfo = (email, password, name) => {

  return fetch(baseUrl + '/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        'email': email,
        'password': password,
        'name': name
      }),
      headers: {'Content-Type': 'application/json'}
    }).then(checkResponse)
}

//запрос на восстановление пароля
export const sendResetPasswordRequest = (userEmail) => {

  return fetch(baseUrl + '/password-reset', {
    method: 'POST',
    body: JSON.stringify({'email': userEmail}),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse)
}

//сохранение нового пароля
export const setNewPassword = (newPass, token) => {

  return fetch(baseUrl + '/password-reset/reset', {
    method: 'POST',
    body: JSON.stringify({'password': newPass, 'token': token}),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse)
}

//авторизация пользователя
export const sendUserLoginInfo = (email, password) => {

  return fetch(baseUrl + '/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      'email': email,
      'password': password
    }),
    headers: {'Content-Type': 'application/json'}
  }).then(checkResponse)
}