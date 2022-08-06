import {
  ADD_CONSTRUCTOR_ITEM,
  DELETE_CONSTRUCTOR_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
  RESET_CONSTRUCTOR_ITEM
} from "../actions/constructor-actions";
import update from "immutability-helper";
import {TConstructorActions, TConstructorState} from "../../utils/types";

const constructorInitialState = {
  bun: null,
  filling: []
};

export const constructorReducer = (state = constructorInitialState, action: TConstructorActions): TConstructorState => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_ITEM: {
      const fillingItem = action.payload.item
      const uId = action.uId
      return {
        ...state,
        bun: action.payload.item.type === 'bun' ? action.payload.item : state.bun,
        filling: action.payload.item.type !== 'bun' ? [...state.filling, {...fillingItem, uId}] : [...state.filling]
      }
    }
    case DELETE_CONSTRUCTOR_ITEM: {
      // const deleteItem = () => {
      //   state.filling.splice(action.payload, 1)
      //   return state.filling
      // }
      return {
        ...state,
        bun: state.bun,
        // filling: deleteItem()
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