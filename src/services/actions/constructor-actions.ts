import {
  IAddConstructorItem,
  IDeleteConstructorItem,
  IMoveConstructorItem,
  IResetConstructorItem,
  TIngredients
} from "../../utils/types";

export const ADD_CONSTRUCTOR_ITEM = 'ADD_CONSTRUCTOR_ITEM';
export const DELETE_CONSTRUCTOR_ITEM = 'DELETE_CONSTRUCTOR_ITEM';
export const RESET_CONSTRUCTOR_ITEM = 'RESET_CONSTRUCTOR_ITEM';
export const MOVE_CONSTRUCTOR_ITEM = 'MOVE_CONSTRUCTOR_ITEM';

export const addConstructorItem = (data: TIngredients, uId: string): IAddConstructorItem => {
  return { type: ADD_CONSTRUCTOR_ITEM, payload: data, uId: uId }
};

export const deleteConstructorItem = (data: TIngredients): IDeleteConstructorItem => {
  return { type: DELETE_CONSTRUCTOR_ITEM, payload: data }
};

export const resetConstructorItem = (): IResetConstructorItem => {
  return { type: RESET_CONSTRUCTOR_ITEM }
};

export const moveConstructorItem = (drag: number, hover: number): IMoveConstructorItem => {
  return { type: MOVE_CONSTRUCTOR_ITEM, dragIndex: drag, hoverIndex: hover }
};