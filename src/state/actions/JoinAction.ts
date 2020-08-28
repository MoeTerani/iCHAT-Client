import { ActionTypes, LOG_IN, LOG_OUT } from '../types';

export const logInAction = (value: object): ActionTypes => ({
  type: LOG_IN,
  payload: value,
});

export const logOutAction = (): ActionTypes => ({
  type: LOG_OUT,
});
