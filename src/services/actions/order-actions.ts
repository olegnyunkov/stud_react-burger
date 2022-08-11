import {TOrder} from "../../utils/types";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const getOrderRequest = (): IGetOrderRequest => {
  return { type: GET_ORDER_REQUEST }
};

export const getOrderSuccess = (data: TOrder): IGetOrderSuccess => {
  return { type: GET_ORDER_SUCCESS, payload: data }
};

export const getOrderFailed = (): IGetOrderFailed => {
  return { type: GET_ORDER_FAILED }
};

//types
export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  payload: TOrder;
}
export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
}

export type TOrderActions =
    IGetOrderRequest
    | IGetOrderSuccess
    | IGetOrderFailed;