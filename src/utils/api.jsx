const baseUrl = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error(res.status))
  }
}

export const getIngredients = () => {
  return fetch(baseUrl + '/ingredients', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse)
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

