import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';
import { findByTestAtrr } from '../../config/Utils';

const setUp = (props = {}) => {
  const component = shallow(<NotFound {...props} />);
  return component;
};

describe('Not found page', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'item');
    expect(wrapper.length).toBe(3);
  });
});
