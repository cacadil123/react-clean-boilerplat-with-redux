import { createAction } from 'redux-actions';

export const loginUser = createAction('LOGIN_LOAD');
export const loginUserSuccess = createAction('LOGIN_LOADED');
export const loginUserError = createAction('LOGIN_ERROR');
export const loginUserClear = createAction('LOGIN_CLEAR');
