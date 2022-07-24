import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from "../actions/ws-actions";

const wsInitialState = {
  wsRequest: false,
  wsConnected: false,
  wsError: false,
  wsData: {},
  wsGetMessage: false
}

export const wsReducer = (state = wsInitialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        wsRequest: true,
        wsConnected: false,
        wsError: false
      }
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsRequest: false,
        wsConnected: true,
        wsError: false
      }
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsRequest: false,
        wsConnected: false,
        wsError: true
      }
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsRequest: false,
        wsConnected: false,
        wsError: false
      }
    }
    case WS_GET_MESSAGE: {
      return {
        ...state,
        wsRequest: false,
        wsConnected: true,
        wsError: false,
        wsGetMessage: true,
        wsData: action.payload
      }
    }
    // case WS_SEND_MESSAGE: {
    //   return {
    //     ...state,
    //     wsRequest: false,
    //     wsConnected: false,
    //     wsError: false
    //   }
    // }
    default: {
      return state
    }
  }
}