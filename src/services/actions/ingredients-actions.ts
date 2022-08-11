import {TIngredients} from "../../utils/types";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredientsRequest = (): IGetIngredientsRequest => {
  return { type: GET_INGREDIENTS_REQUEST }
};

export const getIngredientsSuccess = (data: TIngredients[]): IGetIngredientsSuccess => {
  return { type: GET_INGREDIENTS_SUCCESS, payload: data }
};

export const getIngredientsFailed = (): IGetIngredientsFailed => {
  return { type: GET_INGREDIENTS_FAILED }
};

//types
export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  payload: TIngredients[];
}
export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TIngredientsActions =
    IGetIngredientsRequest
    | IGetIngredientsSuccess
    | IGetIngredientsFailed;