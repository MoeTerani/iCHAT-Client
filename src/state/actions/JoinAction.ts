import { ActionTypes, JOIN_DATA } from '../types';

export const joinDataAction = (value: object): ActionTypes => ({
  type: JOIN_DATA,
  payload: value,
});
