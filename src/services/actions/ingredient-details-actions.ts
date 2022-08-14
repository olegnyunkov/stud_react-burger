import {TIngredientsData} from "../../utils/types";

export const GET_DETAILS = 'GET_DETAILS';
export const REMOVE_DETAILS = 'REMOVE_DETAILS';

export const getDetails = (data: TIngredientsData): IGetDetails => {
  return { type: GET_DETAILS, payload: data }
};

export const removeDetails = (): IRemoveDetails => {
  return { type: REMOVE_DETAILS }
};

//types
export interface IGetDetails {
  readonly type: typeof GET_DETAILS;
  payload: TIngredientsData;
}
export interface IRemoveDetails {
  readonly type: typeof REMOVE_DETAILS;
}

export type TIngredientDetailsActions =
    IGetDetails
    | IRemoveDetails;