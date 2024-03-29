import {GET_DETAILS, REMOVE_DETAILS, TIngredientDetailsActions} from "../actions/ingredient-details-actions";
import {TIngredientsData} from "../../utils/types";

const ingredientDetailsInitialState: TIngredientDetailsState = {
  ingredient: {}
};

export const ingredientDetailsReducer =
    (state = ingredientDetailsInitialState, action: TIngredientDetailsActions)
        : TIngredientDetailsState => {
  switch (action.type) {
    case GET_DETAILS: {
      return {
        ...state,
        ingredient: action.payload
      }
    }
    case REMOVE_DETAILS: {
      return {
        ...state,
        ingredient: {}
      }
    }
    default: {
      return state
    }
  }
};

//types
export type TIngredientDetailsState = {
  ingredient: TIngredientsData | {};
}