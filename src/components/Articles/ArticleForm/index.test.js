import Article from './index';
import { shallow } from 'enzyme';
import React from 'react';
import { testStore } from '../../../config/Utils';
import '@testing-library/jest-dom/extend-expect';

import routeData from 'react-router';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Article store={store} />)
    .childAt(0)
    .dive();

  return wrapper;
};

describe('ArticleForm Component', () => {
  const mockLocation = {
    pathname: '/welcome',
    hash: '',
    search: '',
    state: '',
  };

  let wrapper;
  beforeEach(() => {
    jest.spyOn(routeData, 'useParams').mockReturnValue(mockLocation);

    const initialState = {
      auth: {
        firstName: 'ss',
        lastName: '',
        userId: null,
        userName: 'ss',
        id: 'id2225387',
        creationDate: '1/31/2021, 12:11:51 PM',
        isLoggedIn: true,
      },
      article: {
        article: {
          id: '1111',
          title: 'title 1',
          creationDate: 'today',
          content: 'contetn test',
          image: '',
          userName: 'ss',
        },
      },
    };
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = wrapper.find('#articleForm');
    expect(component).toBeTruthy();
  });

  it('initial values', () => {
    const inputTitle = wrapper.find({ name: 'title' });
    const inputContent = wrapper.find({ name: 'content' });

    expect(inputTitle.props().value).toContain('title 1');
    expect(inputContent.props().data).toContain('contetn test');
  });

  it('change formik values', () => {
    const inputTitle = wrapper.find({ name: 'title' });
    const inputContent = wrapper.find({ name: 'content' });

    inputTitle.simulate('change', { target: { name: 'title', value: 'Hello' } });
    inputContent.simulate('change', { target: { name: 'content', value: 'content new' } });

    const values = wrapper.find('#articleForm').props().value;

    expect(values.title).toContain('Hello');
    expect(values.content).toContain('content new');
  });

  it('submit formik', () => {
    const submitBtn = wrapper.find({ name: 'submitBtn' });
    submitBtn.simulate('submit');
  });
});
