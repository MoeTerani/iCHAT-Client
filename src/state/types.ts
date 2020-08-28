//SKIP BUTTON
export interface logInState {
  name: string;
  users: Array<object>;
  isAuthenticated: boolean;
}

// LOG IN
export const LOG_IN = 'LOG_IN';
export interface logInAction {
  type: typeof LOG_IN;
  payload: any;
}

// LOG OUT
export const LOG_OUT = 'LOG_OUT';
export interface logOutAction {
  type: typeof LOG_OUT;
}

// ALERT
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export type ActionTypes =  logInAction | logOutAction;
