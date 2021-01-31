import ArticlesList from './index';
import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAtrr, testStore } from '../../../config/Utils';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<ArticlesList store={store} />)
    .childAt(0)
    .dive();

  return wrapper;
};

describe('ListItem Component', () => {
  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        article: {
          articlesList: [
            {
              id: 'sss',
              title: 'ssssss',
              creationDate: 'creationDate',
              content: 'content 1 ',
              image: null,
              userName: 'abd',
            },
            {
              id: 'ss22s',
              title: 'titel2',
              creationDate: 'creationDate',
              content: 'content 2 ',
              image: null,
              userName: 'abd',
            },
          ],
        },
      };
      wrapper = setUp(initialState);
    });

    it('Should renders without error', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(2);
    });
  });

  describe('Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        article: {
          articlesList: [],
        },
      };
      wrapper = setUp(initialState);
    });

    it('Component is not rendered', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
