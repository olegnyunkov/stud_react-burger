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

export const orderApi = () => {
  return fetch(orderApiUrl, {
    headers: {
      'Content-Type': 'application/json',
      'ingredients': ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
    }
  })
    .then(checkResponse)
}