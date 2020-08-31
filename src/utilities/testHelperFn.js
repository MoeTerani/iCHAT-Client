import React from 'react';
import { shallow } from 'enzyme';

export const getWrapperShallow = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);
  return wrapper;
};

export const getWrapperComponent = (Component, attr) => {
  const wrapper = Component.find(`[id='${attr}']`);
  return wrapper;
};
