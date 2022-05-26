import React from 'react';

const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';
const orderApiUrl = 'https://norma.nomoreparties.space/api/orders';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error(res.status))
  }
}

export const api = () => {
  return fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse)
}

// return fetch(orderApiUrl, {
//   method: 'POST',
//   body: JSON.stringify({'ingredients': orderDataId}),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(checkResponse)

export const orderApi = (orderData) => {
  const orderDataId = orderData.items.map(item => return item._id);
  return fetch(orderApiUrl, {
    method: 'POST',
    body: JSON.stringify({'ingredients': orderDataId}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse)
}

