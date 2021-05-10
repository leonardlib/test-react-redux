import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from '../../app/store';

test('renders increment and decrement buttons', () => {
  render(
    <Provider store={store}>
        <Counter />
    </Provider>
  );
  const increment = screen.getByText('Increment');
  const decrement = screen.getByText('Decrement');
  expect(increment).toBeInTheDocument();
  expect(decrement).toBeInTheDocument();
});
