import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

afterEach(() => cleanup());

test('renders countries', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/Covid details/i);
  expect(linkElement).toBeInTheDocument();
});

const APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('App Renders test', () => {
  it('Renders App', () => {
    const app = renderer.create(APP).toJSON();
    expect(app).toMatchSnapshot();
  });
});
