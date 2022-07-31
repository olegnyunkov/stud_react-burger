import {getUserInfo, sendRefreshTokenInfo} from "./api";

export const ingredientsId = (ids, allIng) => {
  const data = ids.map((id) => {
      return allIng.find((ing) => ing._id === id);
    }
  );
  return data
}

export const date = (data) => {
  const orderDate = Number(
    data
      .split('T')[0]
      .split('-')[2]
      .split('')
      .filter((i) => i)
      .join('')
  );
  const time = data.split('T')[1].split('.')[0].split(':', 2).join(':');
  const newDate = new Date().getDate();
  let result = '';

  if (orderDate === newDate) {
    result = `Сегодня, ${time} i-GMT+3`;
  }
  if (orderDate === newDate - 1) {
    result = `Вчера, ${time} i-GMT+3`;
  }
  if (orderDate < newDate - 1 && orderDate > newDate - 5) {
    result = `${newDate - orderDate} дня назад, ${time} i-GMT+3`;
  }

  if (orderDate < newDate - 4) {
    result = `${newDate - orderDate} дней назад, ${time} i-GMT+3`;
  }

  return result;
};

export const checkAuth = (accessToken, refreshToken) => (dispatch) => {
  if (accessToken === undefined) {
      return
    }
  try {
    dispatch(getUserInfo())
  } catch (err) {
    if (err.message = 'jwt expired') {
      dispatch(sendRefreshTokenInfo(refreshToken))
      dispatch(getUserInfo())
    }
  }
}