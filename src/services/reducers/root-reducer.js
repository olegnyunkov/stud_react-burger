import {combineReducers} from "redux";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_DETAILS,
  REMOVE_DETAILS,
  ADD_CONSTRUCTOR_ITEM,
  DELETE_CONSTRUCTOR_ITEM,
  RESET_CONSTRUCTOR_ITEM,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED
} from '../actions/actions';

// начальные состояния
const ingredientsInitialState = {
  ingredients: [],
  isLoading: false,
  errorLoading: false
};

const ingredientDetailsInitialState = {
  ingredient: {}
};

const constructorInitialState = {
  ingredients: []
};

const orderInitialState = {
  order: {
    "name": "",
    "order": {
      "number": ""
    },
    "success": false
  },
  isLoading: false,
  errorLoading: false
};

// редьюсеры
const ingredientsReducer = (state = ingredientsInitialState, action) => {
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

const ingredientDetailsReducer = (state = ingredientDetailsInitialState, action) => {
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

const constructorReducer = (state = constructorInitialState, action) => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        ingredients: action.payload
      }
    }
    case DELETE_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        ingredients: []
      }
    }
    case RESET_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        ingredients: []
      }
    }
    default: {
      return state
    }
  }
};

const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorLoading: false
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.payload,
        isLoading: false,
        errorLoading: false
      }
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorLoading: true
      }
    }
    default: {
      return state
    }
  }
};

// корневой редьюсер
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  details: ingredientDetailsReducer,
  constructor: constructorReducer,
  order: orderReducer
})