import {
  IOnClose,
  IOnError,
  IOnMessage,
  IOnOpen,
  IWsInit,
  IWsInitToken,
  IWsReset,
  IWsSendMessage, TWsActions, TWsData
} from "../../utils/types";

export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_START_TOKEN = 'WS_CONNECTION_START_TOKEN';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';
export const WS_GET_RESET = 'WS_GET_RESET';

export const wsActions: TWsActions = {
  wsInit: WS_CONNECTION_START,
  wsInitToken: WS_CONNECTION_START_TOKEN,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

export const wsInit = (): IWsInit => {
  return {type: WS_CONNECTION_START}
}
export const wsInitToken = (data: string): IWsInitToken => {
  return {type: WS_CONNECTION_START_TOKEN, payload: data}
}
export const onOpen = (): IOnOpen => {
  return {type: WS_CONNECTION_SUCCESS}
}
export const onError = (): IOnError => {
  return {type: WS_CONNECTION_ERROR}
}
export const onClose = (): IOnClose => {
  return {type: WS_CONNECTION_CLOSED}
}
export const onMessage = (data: TWsData): IOnMessage => {
  return {type: WS_GET_MESSAGE, payload: data}
}
export const wsSendMessage = (): IWsSendMessage => {
  return {type: WS_SEND_MESSAGE}
}
export const wsReset = (): IWsReset => {
  return {type: WS_GET_RESET}
}