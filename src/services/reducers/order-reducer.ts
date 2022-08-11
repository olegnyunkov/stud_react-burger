import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, TOrderActions} from "../actions/order-actions";
import {TOrder} from "../../utils/types";

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

export const orderReducer = (state = orderInitialState, action: TOrderActions): TOrderState => {
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

//types
export type TOrderState = {
  order: TOrder;
  isLoading: boolean;
  errorLoading: boolean;
}