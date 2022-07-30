import {wsActions} from "../services/actions/ws-actions";

export const socketMiddleware = wsUrl => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
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
          const parsedData = JSON.parse(data)
          dispatch({ type: onMessage, payload: parsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};