import {getUserInfo, sendRefreshTokenInfo} from "./api";
import {AppDispatch, TIngredients} from "./types";

export const ingredientsId = (ids: string[], allIng: TIngredients[]) => {
  const data = ids.map((id) => {
      return allIng.find((ing) => ing._id === id);
    }
  );
  return data
}

export const date = (info: string) => {
  return new Date(info).toLocaleString();
}

export const checkAuth = (accessToken: string, refreshToken: string) => (dispatch: AppDispatch) => {
  if (accessToken === undefined) {
      return
    }
  try {
    dispatch(getUserInfo())
  } catch (err: any) {
    if (err.message = 'jwt expired') {
      dispatch(sendRefreshTokenInfo(refreshToken))
      dispatch(getUserInfo())
    }
  }
}