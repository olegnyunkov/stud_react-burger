import {TConstructorActions} from "../services/actions/constructor-actions";
import {TIngredientDetailsActions} from "../services/actions/ingredient-details-actions";
import {TIngredientsActions} from "../services/actions/ingredients-actions";
import {TModalActions} from "../services/actions/modal-actions";
import {TOrderActions} from "../services/actions/order-actions";
import {TUserActions} from "../services/actions/user-actions";
import {
  TWebSocketActions,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_START_TOKEN,
  WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE
} from "../services/actions/ws-actions";
import {TypedUseSelectorHook, useDispatch as useDispatchHook} from "react-redux";
import {useSelector as useSelectorHook} from "react-redux/es/hooks/useSelector";
import {AppDispatch, RootState} from "../services/store";

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorHook;
export const useDispatch: () => AppDispatch = useDispatchHook

//ingredients с сервера
export type TIngredientsData = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v?: number;
  _id: string;
  uId?: string;
}

export type TIngredientsDataExtended = TIngredientsData & {
  index: number;
}

export type TIngredients = {
  success: boolean;
  data: TIngredientsData[]
};

//order с сервера
export type TOrder = {
  name: string;
  order: {
    number: string;
  };
  success: boolean;
}

//user регистрация с сервера
export type TUserRegistration = {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}

export type TWsDataOrders = {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name?: string;
}

export type TWsData = {
  success: boolean;
  orders: TWsDataOrders[];
  total: number;
  totalToday: number;
}

//actions для Middleware
export type TWsActions = {
  readonly wsInit: typeof WS_CONNECTION_START;
  readonly wsInitToken: typeof WS_CONNECTION_START_TOKEN;
  readonly wsSendMessage: typeof WS_SEND_MESSAGE;
  readonly onOpen: typeof WS_CONNECTION_SUCCESS;
  readonly onClose: typeof WS_CONNECTION_CLOSED;
  readonly onError: typeof WS_CONNECTION_ERROR;
  readonly onMessage: typeof WS_GET_MESSAGE;
}

//union actions
export type TApplicationActions =
  TConstructorActions
  | TIngredientDetailsActions
  | TIngredientsActions
  | TModalActions
  | TOrderActions
  | TUserActions
  | TWebSocketActions;

//хук useLocation
export interface ILocationState {
  background: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: string | undefined;
  };
  from: {
    pathname: string;
  };
}