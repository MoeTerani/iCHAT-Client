/* eslint-disable no-restricted-globals */
import * as actions from './JoinAction';
import { ActionTypes, LOG_IN, LOG_OUT } from '../types';

describe('actions', () => {
  test('Log in Action ', () => {
    const expectedAction = {
      type: LOG_IN,
      payload: { name: { name }, socket: 1, avatar: 'http' },
    };
    expect(
      actions.logInAction({ name: { name }, socket: 1, avatar: 'http' })
    ).toEqual(expectedAction);
  });
});
