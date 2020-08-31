import { shallow } from 'enzyme';
import React from 'react';
import InputBar from './InputBar';

describe('InputBar components', () => {
  test('it renders without errors', () => {
    expect(shallow(<InputBar />)).toMatchSnapshot();
  });
});
