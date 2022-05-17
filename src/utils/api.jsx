import React from 'react';

const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';
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