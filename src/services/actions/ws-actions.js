export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

export const wsConnectionStart = () => {
  return {type: WS_CONNECTION_START}
}
export const wsConnectionSuccess = () => {
  return {type: WS_CONNECTION_SUCCESS}
}
export const wsConnectionError = () => {
  return {type: WS_CONNECTION_ERROR}
}
export const wsConnectionClosed = () => {
  return {type: WS_CONNECTION_CLOSED}
}
export const wsGetMessage = () => {
  return {type: WS_GET_MESSAGE}
}
export const wsSendMessage = () => {
  return {type: WS_SEND_MESSAGE}
}