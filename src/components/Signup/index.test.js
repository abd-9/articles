import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Signup from './index';

function renderWithProviders(ui, { reduxState } = {}) {
  const store = createStore(rootReducer, reduxState);
  return render(<Provider store={store}>{ui}</Provider>);
}
describe('signin component', () => {
  it('change values formik', async () => {
    const { container } = renderWithProviders(<Signup />, {
      reduxState: {
        auth: {
          firstName: '',
          lastName: '',
          userId: null,
          userName: '',
          id: '',
          creationDate: '',
          password: '',
        },
      },
    });
    const firstName = container.querySelector('input[name="firstName"]');
    const userName = container.querySelector('input[name="userName"]');
    const lastName = container.querySelector('input[name="lastName"]');
    const password = container.querySelector('input[type="password"]');

    await waitFor(() => {
      fireEvent.change(firstName, {
        target: {
          value: 'mockname',
        },
      });
    });
    await waitFor(() => {
      fireEvent.change(userName, {
        target: {
          value: 'user1',
        },
      });
    });

    await waitFor(() => {
      fireEvent.change(lastName, {
        target: {
          value: 'last',
        },
      });
    });
    await waitFor(() => {
      fireEvent.change(password, {
        target: {
          value: 'pass',
        },
      });
    });

    await waitFor(() => expect(firstName.getAttribute('value')).toBe('mockname'));
    await waitFor(() => expect(password.getAttribute('value')).toBe('pass'));
    await waitFor(() => expect(lastName.getAttribute('value')).toBe('last'));
    await waitFor(() => expect(userName.getAttribute('value')).toBe('user1'));
  });

  it('submit button', async () => {
    const { container } = renderWithProviders(<Signup />, {
      reduxState: {
        auth: {
          firstName: '',
          lastName: '',
          userId: null,
          userName: '',
          id: '',
          creationDate: '',
          password: '',
        },
      },
    });

    const submit = container.querySelector('button[type="submit"]');
    await waitFor(() => {
      fireEvent.click(submit);
    });

    await waitFor(() => expect(submit.getAttribute('type')).toBe('submit'));
  });
});
