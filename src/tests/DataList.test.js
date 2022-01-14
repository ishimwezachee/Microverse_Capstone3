import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DataList from '../components/DataList';

describe('Country Component test', () => {
  it('Renders Deatils', () => {
    const app = renderer.create(
      <Provider store={store}>
        <DataList />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
