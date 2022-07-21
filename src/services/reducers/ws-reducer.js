import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from "../actions/ws-actions";

const wsInitialState = {
  wsConnected: false,
  wsData: null,
  error: null
}

export const wsReducer = (state = wsInitialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        wsConnected: false,
        wsData: null
      }
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        wsConnected: false,
        wsData: null
      }
    }
    case WS_CONNECTION_ERROR: {
      return {
        wsConnected: false,
        wsData: null
      }
    }
    case WS_CONNECTION_CLOSED: {
      return {
        wsConnected: false,
        wsData: null
      }
    }
    case WS_GET_MESSAGE: {
      return {
        wsConnected: false,
        wsData: null
      }
    }
    case WS_SEND_MESSAGE: {
      return {
        wsConnected: false,
        wsData: null
      }
    }
    default: {
      return state
    }
  }
}