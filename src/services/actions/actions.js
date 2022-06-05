export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_DETAILS_REQUEST = 'GET_DETAILS_REQUEST';
export const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS';
export const GET_DETAILS_FAILED = 'GET_DETAILS_FAILED';

export const ADD_CONSTRUCTOR_ITEM = 'ADD_CONSTRUCTOR_ITEM';
export const DELETE_CONSTRUCTOR_ITEM = 'DELETE_CONSTRUCTOR_ITEM';
export const RESET_CONSTRUCTOR_ITEM = 'RESET_CONSTRUCTOR_ITEM';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

//action creators
export const getIngredientsRequest = () => {
  return { type: GET_INGREDIENTS_REQUEST }
};

export const getIngredientsSuccess = () => {
  return { type: GET_INGREDIENTS_SUCCESS }
};

export const getIngredientsFailed = () => {
  return { type: GET_INGREDIENTS_FAILED }
}

export const getDetailsRequest = () => {
  return { type: GET_DETAILS_REQUEST }
};

export const getDetailsSuccess = () => {
  return { type: GET_DETAILS_SUCCESS }
};

export const addConstructorItem = () => {
  return { type: ADD_CONSTRUCTOR_ITEM }
};

export const deleteConstructorItem = () => {
  return { type: DELETE_CONSTRUCTOR_ITEM }
};

export const resetConstructorItem = () => {
  return { type: RESET_CONSTRUCTOR_ITEM }
};

export const getOrderRequest = () => {
  return { type: GET_ORDER_REQUEST }
};

export const getOrderSuccess = () => {
  return { type: GET_ORDER_SUCCESS }
};