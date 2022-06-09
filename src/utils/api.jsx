import {
  getIngredientsFailed,
  getIngredientsRequest,
  getIngredientsSuccess,
  getOrderRequest,
  getOrderSuccess,
  getOrderFailed
} from "../services/actions/actions";

const baseUrl = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error(res.status))
  }
}


export const getIngredients = () => {

  return function (dispatch) {
    dispatch(getIngredientsRequest());

    fetch(baseUrl + '/ingredients', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(checkResponse).then(res => {
      if (res.success) {
        dispatch(getIngredientsSuccess(res.data))
      } else {
        dispatch(getIngredientsFailed())
      }
    }).catch(err => {
      dispatch(getIngredientsFailed())
      console.log(err)
    })
  }
}

export const getOrder = (orderDataId) => {

  return function (dispatch) {
    dispatch(getOrderRequest());

    fetch(baseUrl + '/orders', {
      method: 'POST',
      body: JSON.stringify({'ingredients': orderDataId}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(checkResponse).then(res => {
      if (res.success) {
        dispatch(getOrderSuccess(res))
      } else {
        dispatch(getOrderFailed())
      }
    }).catch(err => {
      dispatch(getOrderFailed())
      console.log(err)
    })
  }
}
