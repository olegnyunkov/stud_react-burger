import {getUserInfo, sendRefreshTokenInfo} from "./api";
import {TIngredientsData} from "./types";
import {AppDispatch} from "../services/store";

export const ingredientsId = (ids: string[], allIng: TIngredientsData[]) => {
  return ids.map((id: string): TIngredientsData | undefined => {
      return allIng.find((ing): boolean => ing._id === id);
    }
  )
}

export const date = (info: string): string => {
  return new Date(info).toLocaleString();
}

export const checkAuth = (accessToken: string | undefined, refreshToken: string | null) => (dispatch: AppDispatch) => {
  if (accessToken === undefined) {
      return
    }
  try {
    dispatch(getUserInfo())
  } catch (err: any) {
    if (err.message === 'jwt expired') {
      dispatch(sendRefreshTokenInfo(refreshToken))
      dispatch(getUserInfo())
    }
  }
}