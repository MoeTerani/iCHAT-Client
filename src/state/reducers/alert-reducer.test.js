import reducers from './alert-reducer';

describe('Alert reducer', () => {
  test('should return the intestinal state', () => {
    expect(reducers(undefined, {})).toEqual([]);
  });

  test('at least 3 character ALERT REDUCER', () => {
    let state;
    state = reducers(
      [],

      {
        type: 'SET_ALERT',
        payload: {
          id: 'ac35b00d-5a0f-49c8-9987-5b2f0a827c59',
          msg: '"username" length must be at least 3 characters long',
          alertType: 'danger',
        },
      }
    );
    expect(state).toEqual([
      {
        id: 'ac35b00d-5a0f-49c8-9987-5b2f0a827c59',
        msg: '"username" length must be at least 3 characters long',
        alertType: 'danger',
      },
    ]);
  });
});
