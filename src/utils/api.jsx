import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../services/actions/actions";

const baseUrl = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error(res.status))
  }
}

export const sendOrder = (orderDataId) => {
  return fetch(baseUrl + '/orders', {
    method: 'POST',
    body: JSON.stringify({'ingredients': orderDataId}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse)
}

export const getIngredients = () => {

  return function (dispatch) {
    dispatch({type: GET_INGREDIENTS_REQUEST});

    fetch(baseUrl + '/ingredients', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(checkResponse).then(res => {
      if (res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data
        })
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
      }
    }).catch(err => {
      dispatch({
        type: GET_INGREDIENTS_FAILED
      })
      console.log(err)
    })
  }
}
