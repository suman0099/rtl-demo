import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './counter';

test('counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />);
  const decrementBtn = screen.getByRole('button', { name: /decrement/i });
  const incrementBtn = screen.getByRole('button', { name: /increment/i });
  const message = screen.getByText(/current count/i);

  expect(message).toHaveTextContent('Current count: 0');

  userEvent.click(incrementBtn);
  expect(message).toHaveTextContent('Current count: 1');

  userEvent.click(decrementBtn);
  expect(message).toHaveTextContent('Current count: 0');
});
