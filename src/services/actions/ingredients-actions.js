export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredientsRequest = () => {
  return { type: GET_INGREDIENTS_REQUEST }
};

export const getIngredientsSuccess = (data) => {
  return { type: GET_INGREDIENTS_SUCCESS, payload: data }
};

export const getIngredientsFailed = () => {
  return { type: GET_INGREDIENTS_FAILED }
};