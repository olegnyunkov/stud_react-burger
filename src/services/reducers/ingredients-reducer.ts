import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  TIngredientsActions
} from "../actions/ingredients-actions";
import {TIngredientsData} from "../../utils/types";

const ingredientsInitialState: TIngredientsState = {
  ingredients: [],
  isLoading: false,
  errorLoading: false
};

export const ingredientsReducer =
    (state = ingredientsInitialState, action: TIngredientsActions)
        : TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorLoading: false
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.payload,
        errorLoading: false,
        isLoading: false
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        errorLoading: true,
        isLoading: false
      }
    }
    default: {
      return state
    }
  }
};

//types
export type TIngredientsState = {
  ingredients: TIngredientsData[];
  isLoading: boolean;
  errorLoading: boolean;
}