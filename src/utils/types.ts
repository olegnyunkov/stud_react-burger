import {rootReducer} from "../services/reducers/root-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {
    ADD_CONSTRUCTOR_ITEM, DELETE_CONSTRUCTOR_ITEM, MOVE_CONSTRUCTOR_ITEM, RESET_CONSTRUCTOR_ITEM,
} from "../services/actions/constructor-actions";
import {GET_DETAILS, REMOVE_DETAILS} from "../services/actions/ingredient-details-actions";
import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS
} from "../services/actions/ingredients-actions";
import {CLOSE_MODAL, OPEN_MODAL} from "../services/actions/modal-actions";
import {
    GET_ORDER_FAILED,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
} from "../services/actions/order-actions";
import {
    ADD_USER, CHECK_AUTH_FAILED,
    CHECK_AUTH_REQUEST, CHECK_AUTH_SUCCESS,
    FORGOT_PASS_FAILED,
    FORGOT_PASS_REQUEST,
    FORGOT_PASS_SUCCESS,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    NEW_PASS_FAILED,
    NEW_PASS_REQUEST,
    NEW_PASS_SUCCESS, REFRESH_TOKEN_FAILED, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS,
    REGISTRATION_FAILED,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REMOVE_USER,
    RESET_ERROR, UPDATE_USER_FAILED, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS,
} from "../services/actions/user-actions";
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_START_TOKEN,
    WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_GET_RESET, WS_SEND_MESSAGE
} from "../services/actions/ws-actions";


//ingredients с сервера
export type TIngredients = {
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
    __v: number;
    _id: string;
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

export type TWsData = {
    success: boolean;
    orders: {
        ingredients: string[];
        _id: string;
        status: string;
        number: number;
        createdAt: string;
        updatedAt: string;
    }[];
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

//redux-thunk
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    TApplicationActions
    >;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export type TApplicationActions =
    TConstructorActions
    | TIngredientDetailsActions
    | TIngredientsActions
    | TModalActions
    | TOrderActions
    | TUserActions
    | TWebSocketActions;

//constructor-actions
export interface IAddConstructorItem {
    readonly type: typeof ADD_CONSTRUCTOR_ITEM;
    payload: TIngredients;
    uId: string;
}
export interface IDeleteConstructorItem {
    readonly type: typeof DELETE_CONSTRUCTOR_ITEM;
    payload: TIngredients;
}
export interface IResetConstructorItem {
    readonly type: typeof RESET_CONSTRUCTOR_ITEM;
}
export interface IMoveConstructorItem {
    readonly type: typeof MOVE_CONSTRUCTOR_ITEM;
    dragIndex: number;
    hoverIndex: number;
}

export type TConstructorActions =
    IAddConstructorItem
    | IDeleteConstructorItem
    | IResetConstructorItem
    | IMoveConstructorItem;

//ingredient-details-actions
export interface IGetDetails {
    readonly type: typeof GET_DETAILS;
    payload: TIngredients;
}
export interface IRemoveDetails {
    readonly type: typeof REMOVE_DETAILS;
    payload: TIngredients;
}

export type TIngredientDetailsActions =
    IGetDetails
    | IRemoveDetails;

//ingredients-actions
export interface IGetIngredientsRequest {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    payload: TIngredients[];
}
export interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TIngredientsActions =
    IGetIngredientsRequest
    | IGetIngredientsSuccess
    | IGetIngredientsFailed;

//modal-actions
export interface IOpenModal {
    readonly type: typeof OPEN_MODAL;
}
export interface ICloseModal {
    readonly type: typeof CLOSE_MODAL;
}

export type TModalActions =
    IOpenModal
    | ICloseModal;

//order-actions
export interface IGetOrderRequest {
    readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS;
    payload: TOrder;
}
export interface IGetOrderFailed {
    readonly type: typeof GET_ORDER_FAILED;
}

export type TOrderActions =
    IGetOrderRequest
    | IGetOrderSuccess
    | IGetOrderFailed;

//user-actions
export interface ILoginRequest {
    readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginFailed {
    readonly type: typeof LOGIN_FAILED;
}
export interface ILoginSuccess {
    readonly type: typeof LOGIN_SUCCESS;
}
export interface ILogoutRequest {
    readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutFailed {
    readonly type: typeof LOGOUT_FAILED;
}
export interface ILogoutSuccess {
    readonly type: typeof LOGOUT_SUCCESS;
}
export interface IRegistrationRequest {
    readonly type: typeof REGISTRATION_REQUEST;
}
export interface IRegistrationFailed {
    readonly type: typeof REGISTRATION_FAILED;
}
export interface IRegistrationSuccess {
    readonly type: typeof REGISTRATION_SUCCESS;
}
export interface IAddUser {
    readonly type: typeof ADD_USER;
    payload: TUserRegistration;
}
export interface IRemoveUser {
    readonly type: typeof REMOVE_USER;
}
export interface IForgotPassRequest {
    readonly type: typeof FORGOT_PASS_REQUEST;
}
export interface IForgotPassFailed {
    readonly type: typeof FORGOT_PASS_FAILED;
}
export interface IForgotPassSuccess {
    readonly type: typeof FORGOT_PASS_SUCCESS;
}
export interface INewPassRequest {
    readonly type: typeof NEW_PASS_REQUEST;
}
export interface INewPassFailed {
    readonly type: typeof NEW_PASS_FAILED;
}
export interface INewPassSuccess {
    readonly type: typeof NEW_PASS_SUCCESS;
}
export interface ICheckAuthRequest {
    readonly type: typeof CHECK_AUTH_REQUEST;
}
export interface ICheckAuthSuccess {
    readonly type: typeof CHECK_AUTH_SUCCESS;
}
export interface ICheckAuthFailed {
    readonly type: typeof CHECK_AUTH_FAILED;
}
export interface IUpdateUserRequest {
    readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserFailed {
    readonly type: typeof UPDATE_USER_FAILED;
}
export interface IUpdateUserSuccess {
    readonly type: typeof UPDATE_USER_SUCCESS;
}
export interface IResetError {
    readonly type: typeof RESET_ERROR;
}
export interface IRefreshTokenRequest {
    readonly type: typeof REFRESH_TOKEN_REQUEST;
}
export interface IRefreshTokenFailed {
    readonly type: typeof REFRESH_TOKEN_FAILED;
}
export interface IRefreshTokenSuccess {
    readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export type TUserActions =
    ILoginRequest
    | ILoginFailed
    | ILoginSuccess
    | ILogoutRequest
    | ILogoutFailed
    | ILogoutSuccess
    | IRegistrationRequest
    | IRegistrationFailed
    | IRegistrationSuccess
    | IAddUser
    | IRemoveUser
    | IForgotPassRequest
    | IForgotPassFailed
    | IForgotPassSuccess
    | INewPassRequest
    | INewPassFailed
    | INewPassSuccess
    | ICheckAuthRequest
    | ICheckAuthSuccess
    | ICheckAuthFailed
    | IUpdateUserRequest
    | IUpdateUserFailed
    | IUpdateUserSuccess
    | IResetError
    | IRefreshTokenRequest
    | IRefreshTokenFailed
    | IRefreshTokenSuccess;

//ws-actions
export interface IWsInit {
    readonly type: typeof WS_CONNECTION_START;
}
export interface IWsInitToken {
    readonly type: typeof WS_CONNECTION_START_TOKEN;
    payload: string;
}
export interface IOnOpen {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IOnError {
    readonly type: typeof WS_CONNECTION_ERROR;
}
export interface IOnClose {
    readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IOnMessage {
    readonly type: typeof WS_GET_MESSAGE;
    payload: TWsData;
}
export interface IWsSendMessage {
    readonly type: typeof WS_SEND_MESSAGE;
}
export interface IWsReset {
    readonly type: typeof WS_GET_RESET;
}

export type TWebSocketActions =
    IWsInit
    | IWsInitToken
    | IOnOpen
    | IOnError
    | IOnClose
    | IOnMessage
    | IWsSendMessage
    | IWsReset;

//reducer types
export type TConstructorState = {
    bun: TIngredients[] | null;
    filling: TIngredients[];
}

export type TIngredientDetailsState = {
    ingredient: TIngredients | object;
}

export type TIngredientsState = {
    ingredients: TIngredients[] | [];
    isLoading: boolean;
    errorLoading: boolean;
}

export type TModalState = {
    modalOpened: boolean;
    modalClosed: boolean;
}

export type TOrderState = {
    order: TOrder;
    isLoading: boolean;
    errorLoading: boolean;
}

export type TUserState = {
    name: string;
    email: string;
    password: string;
    loginRequest: boolean;
    loginError: boolean;
    logoutRequest: boolean;
    logoutError: boolean;
    registrationRequest: boolean;
    registrationFailed: boolean;
    forgotPassRequest: boolean;
    forgotPassFailed: boolean;
    forgotPassSuccess: boolean;
    newPassRequest: boolean;
    newPassFailed: boolean;
    newPassSuccess: boolean;
    authorized: boolean;
    updateUserRequest: boolean;
    updateUserFailed: boolean;
    updateUserSuccess: boolean;
    refreshTokenRequest: boolean;
    refreshTokenFailed: boolean;
    refreshTokenSuccess: boolean;
}

export type TWsState = {
    wsRequest: boolean;
    wsConnected: boolean;
    wsError: boolean;
    wsData: TWsData | null;
    wsGetMessage: boolean;
}
