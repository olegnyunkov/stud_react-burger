import {TUserRegistration} from "../../utils/types";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const FORGOT_PASS_REQUEST = 'FORGOT_PASS_REQUEST';
export const FORGOT_PASS_FAILED = 'FORGOT_PASS_FAILED';
export const FORGOT_PASS_SUCCESS = 'FORGOT_PASS_SUCCESS';
export const NEW_PASS_REQUEST = 'NEW_PASS_REQUEST';
export const NEW_PASS_FAILED = 'NEW_PASS_FAILED';
export const NEW_PASS_SUCCESS = 'NEW_PASS_SUCCESS';
export const CHECK_AUTH_REQUEST = 'CHECK_AUTH_REQUEST';
export const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
export const CHECK_AUTH_FAILED = 'CHECK_AUTH_FAILED';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const RESET_ERROR = 'RESET_ERROR';
export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';

export const loginRequest = (): ILoginRequest => {
    return {type: LOGIN_REQUEST}
}

export const loginFailed = (): ILoginFailed => {
    return {type: LOGIN_FAILED}
}

export const loginSuccess = (): ILoginSuccess => {
    return {type: LOGIN_SUCCESS}
}

export const logoutRequest = (): ILogoutRequest => {
    return {type: LOGOUT_REQUEST}
}

export const logoutFailed = (): ILogoutFailed => {
    return {type: LOGOUT_FAILED}
}

export const logoutSuccess = (): ILogoutSuccess => {
    return {type: LOGOUT_SUCCESS}
}

export const registrationRequest = (): IRegistrationRequest => {
    return {type: REGISTRATION_REQUEST}
}

export const registrationFailed = (): IRegistrationFailed => {
    return {type: REGISTRATION_FAILED}
}

export const registrationSuccess = (): IRegistrationSuccess => {
    return {type: REGISTRATION_SUCCESS}
}

export const addUser = (data: TUserRegistration): IAddUser => {
    return {type: ADD_USER, payload: data}
}

export const removeUser = (): IRemoveUser => {
    return {type: REMOVE_USER}
}

export const forgotPassRequest = (): IForgotPassRequest => {
    return {type: FORGOT_PASS_REQUEST}
}

export const forgotPassFailed = (): IForgotPassFailed => {
    return {type: FORGOT_PASS_FAILED}
}

export const forgotPassSuccess = (): IForgotPassSuccess => {
    return {type: FORGOT_PASS_SUCCESS}
}

export const newPassRequest = (): INewPassRequest => {
    return {type: NEW_PASS_REQUEST}
}

export const newPassFailed = (): INewPassFailed => {
    return {type: NEW_PASS_FAILED}
}

export const newPassSuccess = (): INewPassSuccess => {
    return {type: NEW_PASS_SUCCESS}
}

export const checkAuthRequest = (): ICheckAuthRequest => {
    return {type: CHECK_AUTH_REQUEST}
}

export const checkAuthSuccess = (): ICheckAuthSuccess => {
    return {type: CHECK_AUTH_SUCCESS}
}

export const checkAuthFailed = (): ICheckAuthFailed => {
    return {type: CHECK_AUTH_FAILED}
}

export const updateUserRequest = (): IUpdateUserRequest => {
    return {type: UPDATE_USER_REQUEST}
}

export const updateUserFailed = (): IUpdateUserFailed => {
    return {type: UPDATE_USER_FAILED}
}

export const updateUserSuccess = (): IUpdateUserSuccess => {
    return {type: UPDATE_USER_SUCCESS}
}

export const resetError = (): IResetError => {
    return {type: RESET_ERROR}
}

export const refreshTokenRequest = (): IRefreshTokenRequest => {
    return {type: REFRESH_TOKEN_REQUEST}
}

export const refreshTokenFailed = (): IRefreshTokenFailed => {
    return {type: REFRESH_TOKEN_FAILED}
}

export const refreshTokenSuccess = (): IRefreshTokenSuccess => {
    return {type: REFRESH_TOKEN_SUCCESS}
}

//types
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