import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../actions/ingredients-actions";

const ingredientsInitialState = {
  ingredients: [],
  isLoading: false,
  errorLoading: false
};

export const ingredientsReducer = (state = ingredientsInitialState, action) => {
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