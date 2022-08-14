import {
  ADD_CONSTRUCTOR_ITEM,
  DELETE_CONSTRUCTOR_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
  RESET_CONSTRUCTOR_ITEM, TConstructorActions
} from "../actions/constructor-actions";
import update from "immutability-helper";
import {TIngredientsData} from "../../utils/types";

const constructorInitialState: TConstructorState = {
  bun: null,
  filling: []
};

export const constructorReducer =
    (state = constructorInitialState, action: TConstructorActions)
    : TConstructorState => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_ITEM: {
      const fillingItem: TIngredientsData = action.payload
      const uId: string = action.uId
      return {
        ...state,
        bun: action.payload.type === 'bun' ? action.payload : state.bun,
        filling: action.payload.type !== 'bun' ? [...state.filling, {...fillingItem, uId}] : [...state.filling]
      }
    }
    case DELETE_CONSTRUCTOR_ITEM: {
      const deleteItem = (data: number): TIngredientsData[] => {
        state.filling.splice(data, 1)
        return state.filling
      }
      return {
        ...state,
        bun: state.bun,
        filling: deleteItem(action.payload)
      }
    }
    case RESET_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        bun: null,
        filling: []
      }
    }
    case MOVE_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        bun: state.bun,
        filling: update(state.filling, {
          $splice: [[action.dragIndex, 1], [action.hoverIndex, 0, state.filling[action.dragIndex]]],
        }),
      }
    }
    default: {
      return state
    }
  }
};

//types
export type TConstructorState = {
  bun: TIngredientsData | null;
  filling: TIngredientsData[];
}