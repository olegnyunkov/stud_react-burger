import { applyMiddleware, compose, createStore } from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import { rootReducer } from "./reducers/root-reducer";
import {socketMiddleware} from "../utils/middleware";
import {wsActions} from "./actions/ws-actions";
import {TApplicationActions} from "../utils/types";
import {composeWithDevTools} from "redux-devtools-extension";

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    TApplicationActions
    >;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

const wsUrl: string = 'wss://norma.nomoreparties.space/orders/all';
const enhancer = composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions)));
const store = createStore(rootReducer, enhancer);

export default store;