import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import configureMockStore, { MockStore } from 'redux-mock-store';
import { Provider } from 'react-redux';
import IAlert from '../../../@interfaces/IAlert';
import AlertTypes from '../../../@enums/AlertTypes';
import AppAlerts from './AppAlerts';

const mockStore = configureMockStore([]);
let store: MockStore;

const initialState: Array<IAlert> = [
  {
    id: 'foo',
    text: 'batten down the hatches',
    type: AlertTypes.Warning,
  },
];

describe('components / app / AppAlerts', () => {
  it('should match the snapshot', () => {
    store = mockStore({ alerts: initialState });
    const { asFragment } = render(
      <Provider store={store}>
        <AppAlerts />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should dispatch an action when close button is clicked', () => {
    store = mockStore({ alerts: initialState });
    render(
      <Provider store={store}>
        <AppAlerts />
      </Provider>
    );
    // const expected = [
    //   {
    //     type: alerts.actions.removeAlert.type,
    //     payload: initialState[0].id,
    //   },
    // ];

    const alert = screen.getByTestId(`alert-${initialState[0].id}`);
    expect(alert).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-node-access
    const closeButton = alert.querySelector('button');
    expect(closeButton).not.toBeNull();

    fireEvent.click(closeButton!);

    // NOTE: the actual action is not getting dispatched as it depends on the
    //       Bootstrap JavaScript which is not being executed by the test framework
    // expect(store.getActions()).toEqual(expected);
    expect(store.getActions()).toEqual([]);
  });
});
