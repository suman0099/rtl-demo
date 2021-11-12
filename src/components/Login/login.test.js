import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from './login';

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn();
  render(<Login onSubmit={handleSubmit} />);
  const user = 'Suman Mahato';
  const pass = '123456';
  const username = screen.getByRole('textbox', { name: /username/i });
  const password = screen.getByLabelText(/password/i);
  const submit = screen.getByRole('button', { name: /submit/i });

  userEvent.type(username, user);
  userEvent.type(password, pass);
  userEvent.click(submit);

  expect(handleSubmit).toHaveBeenCalledWith({
    username: user,
    password: pass,
  });

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
