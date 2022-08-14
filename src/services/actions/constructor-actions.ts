import {TIngredientsData} from "../../utils/types";

export const ADD_CONSTRUCTOR_ITEM = 'ADD_CONSTRUCTOR_ITEM';
export const DELETE_CONSTRUCTOR_ITEM = 'DELETE_CONSTRUCTOR_ITEM';
export const RESET_CONSTRUCTOR_ITEM = 'RESET_CONSTRUCTOR_ITEM';
export const MOVE_CONSTRUCTOR_ITEM = 'MOVE_CONSTRUCTOR_ITEM';

export const addConstructorItem = (data: TIngredientsData, uId: string): IAddConstructorItem => {
  return { type: ADD_CONSTRUCTOR_ITEM, payload: data, uId: uId }
};

export const deleteConstructorItem = (data: number): IDeleteConstructorItem => {
  return { type: DELETE_CONSTRUCTOR_ITEM, payload: data }
};

export const resetConstructorItem = (): IResetConstructorItem => {
  return { type: RESET_CONSTRUCTOR_ITEM }
};

export const moveConstructorItem = (drag: number | undefined, hover: number): IMoveConstructorItem => {
  return { type: MOVE_CONSTRUCTOR_ITEM, dragIndex: drag, hoverIndex: hover }
};

//types
export interface IAddConstructorItem {
  readonly type: typeof ADD_CONSTRUCTOR_ITEM;
  payload: TIngredientsData;
  uId: string;
}
export interface IDeleteConstructorItem {
  readonly type: typeof DELETE_CONSTRUCTOR_ITEM;
  payload: number;
}
export interface IResetConstructorItem {
  readonly type: typeof RESET_CONSTRUCTOR_ITEM;
}
export interface IMoveConstructorItem {
  readonly type: typeof MOVE_CONSTRUCTOR_ITEM;
  dragIndex: number | undefined;
  hoverIndex: number;
}

export type TConstructorActions =
    IAddConstructorItem
    | IDeleteConstructorItem
    | IResetConstructorItem
    | IMoveConstructorItem;