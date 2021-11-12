import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import LoginSubmission from './login-submission';

const server = setupServer(
  rest.post(
    'https://auth-provider.example.com/api/login',
    async (req, res, ctx) => {
      return res(
        ctx.json({
          username: req.body.username,
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('submitting the form calls onSubmit with username and password', async () => {
  render(<LoginSubmission />);
  const user = 'Suman Mahato';
  const pass = '123456';
  const username = screen.getByRole('textbox', { name: /username/i });
  const password = screen.getByLabelText(/password/i);
  const submit = screen.getByRole('button', { name: /submit/i });

  userEvent.type(username, user);
  userEvent.type(password, pass);
  userEvent.click(submit);
  //await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));
});
