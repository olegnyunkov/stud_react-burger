import {TWsActions, TWsData} from "./types";
import {Middleware, MiddlewareAPI} from "redux";
import { AppDispatch, RootState } from "../services/store";

export const socketMiddleware = (wsUrl: string, wsActions: TWsActions): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload }: {type: string, payload: string} = action;
      const {wsInit, wsInitToken, wsSendMessage, onOpen, onClose, onError, onMessage} = wsActions;

      if (type === wsInit) {
        socket = new WebSocket(wsUrl);
      }

      if (type === wsInitToken) {
        socket = new WebSocket(payload);
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData: TWsData = JSON.parse(data)
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          socket.send(JSON.stringify(payload));
        }
      }

      next(action);
    };
  };
};