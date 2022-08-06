import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_GET_RESET
} from "../actions/ws-actions";
import {TWebSocketActions, TWsState} from "../../utils/types";

const wsInitialState = {
  wsRequest: false,
  wsConnected: false,
  wsError: false,
  wsData: null,
  wsGetMessage: false
}

export const wsReducer = (state = wsInitialState, action: TWebSocketActions): TWsState => {
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
    case WS_GET_RESET: {
      return {
        ...state,
        wsRequest: false,
        wsConnected: false,
        wsError: false,
        wsGetMessage: false,
        wsData: null
      }
    }
    default: {
      return state
    }
  }
}