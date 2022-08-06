import {GET_DETAILS, REMOVE_DETAILS} from "../actions/ingredient-details-actions";
import {TIngredientDetailsActions, TIngredientDetailsState} from "../../utils/types";

const ingredientDetailsInitialState = {
  ingredient: {}
};

export const ingredientDetailsReducer = (state = ingredientDetailsInitialState, action: TIngredientDetailsActions): TIngredientDetailsState => {
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