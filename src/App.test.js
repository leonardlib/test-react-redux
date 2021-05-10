import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

test('renders correctly', () => {
  const component = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
