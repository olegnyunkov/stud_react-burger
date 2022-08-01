import {getUserInfo, sendRefreshTokenInfo} from "./api";

export const ingredientsId = (ids, allIng) => {
  const data = ids.map((id) => {
      return allIng.find((ing) => ing._id === id);
    }
  );
  return data
}

export const date = (info) => {
  return new Date(info).toLocaleString();
}

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