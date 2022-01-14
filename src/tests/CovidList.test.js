import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CovidList from '../components/CovidList';

describe('Country Component test', () => {
  it('Renders Deatils', () => {
    const app = renderer.create(
      <Provider store={store}>
        <CovidList />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
