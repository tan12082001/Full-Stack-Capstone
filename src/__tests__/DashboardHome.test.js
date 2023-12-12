import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Router from '../routes/routes';
import { USERS_DASHBOARD } from '../routes/routeConstants';

const mockStore = configureMockStore();

describe('DashboardHome Component', () => {
  it('renders cars present', () => {
    const store = mockStore({
      authentication: {
        authenticatedUser: {
          username: 'testuser',
        },
        status: 'succeeded',
      },
      cars: {
        cars: [
          {
            id: 1,
            name: 'Test Vehicle',
            description: 'Test Description',
            pricePerHr: 20,
            seating_capacity: 4,
            image: 'test_image.png',
          },
          {
            id: 2,
            name: 'Vehicle two',
            descrrption: 'Vehicle two Description',
            pricePerHr: 10,
            seating_capacity: 6,
            image: 'test_image.png',
          },
        ],
      },
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${USERS_DASHBOARD}`]}>
          <Router />
        </MemoryRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
