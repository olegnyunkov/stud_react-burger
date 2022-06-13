export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const GET_DETAILS = 'GET_DETAILS';
export const REMOVE_DETAILS = 'REMOVE_DETAILS';

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

export const getIngredientsSuccess = (data) => {
  return { type: GET_INGREDIENTS_SUCCESS, payload: data }
};

export const getIngredientsFailed = () => {
  return { type: GET_INGREDIENTS_FAILED }
};

export const getDetails = (data) => {
  return { type: GET_DETAILS, payload: data }
};

export const removeDetails = (data) => {
  return { type: REMOVE_DETAILS, payload: data }
};

export const addConstructorItem = (data) => {
  return { type: ADD_CONSTRUCTOR_ITEM, payload: data }
};

export const deleteConstructorItem = (data) => {
  return { type: DELETE_CONSTRUCTOR_ITEM, payload: data }
};

export const resetConstructorItem = () => {
  return { type: RESET_CONSTRUCTOR_ITEM }
};

export const getOrderRequest = () => {
  return { type: GET_ORDER_REQUEST }
};

export const getOrderSuccess = (data) => {
  return { type: GET_ORDER_SUCCESS, payload: data }
};

export const getOrderFailed = () => {
  return { type: GET_ORDER_FAILED }
};