export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const getOrderRequest = () => {
  return { type: GET_ORDER_REQUEST }
};

export const getOrderSuccess = (data) => {
  return { type: GET_ORDER_SUCCESS, payload: data }
};

export const getOrderFailed = () => {
  return { type: GET_ORDER_FAILED }
};