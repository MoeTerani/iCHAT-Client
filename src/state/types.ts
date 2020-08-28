//SKIP BUTTON
export interface joinState {
  name: string;
  users: Array<object>;
}


export const JOIN_DATA = 'JOIN_DATA';

export interface joinDataAction {
  type: typeof JOIN_DATA;
  payload: any;
}

export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export type ActionTypes = joinDataAction;