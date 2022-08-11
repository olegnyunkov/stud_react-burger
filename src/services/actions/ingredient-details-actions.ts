import {TIngredients} from "../../utils/types";

export const GET_DETAILS = 'GET_DETAILS';
export const REMOVE_DETAILS = 'REMOVE_DETAILS';

export const getDetails = (data: TIngredients): IGetDetails => {
  return { type: GET_DETAILS, payload: data }
};

export const removeDetails = (data: TIngredients): IRemoveDetails => {
  return { type: REMOVE_DETAILS, payload: data }
};

//types
export interface IGetDetails {
  readonly type: typeof GET_DETAILS;
  payload: TIngredients;
}
export interface IRemoveDetails {
  readonly type: typeof REMOVE_DETAILS;
  payload: TIngredients;
}

export type TIngredientDetailsActions =
    IGetDetails
    | IRemoveDetails;