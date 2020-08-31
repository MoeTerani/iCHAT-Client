import { shallow } from 'enzyme';
import React from 'react';
import NavBar from './NavBar';

describe('NavBar components', () => {
  test('it renders without errors', () => {
    expect(shallow(<NavBar />)).toMatchSnapshot();
  });
});
