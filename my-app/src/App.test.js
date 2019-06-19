import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup, render, fireEvent } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

test('renders without creash', () => {
  const query = render(<App />);
  query.getByText(/scoreboard/i);
});

test('check if strike button resets after 4 clicks', () => {
  const query = render(<App />);

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 1')).toBeTruthy();

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 2')).toBeTruthy();

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 3')).toBeTruthy();

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 0')).toBeTruthy();
});

test('check if ball button resets after 4 clicks', () => {
  const query = render(<App />);

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 1')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 2')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 3')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 4')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 0')).toBeTruthy();
});

test('if foul button increments strike by 2 and 2 clicks resets to 0', () => {
  const query = render(<App />);

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 1')).toBeTruthy();

  fireEvent.click(query.getByText('Foul'), { button: 0 });
  expect(query.queryByText('Strikes: 2')).toBeTruthy();

  fireEvent.click(query.getByText('Foul'), { button: 0 });
  expect(query.queryByText('Strikes: 4')).toBeTruthy();

  fireEvent.click(query.getByText('Foul'), { button: 0 });
  expect(query.queryByText('Strikes: 0')).toBeTruthy();

  query.getByText('Balls: 0');
});

test('if ball clicked 4 times resets strikes', () => {
  const query = render(<App />);

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 1')).toBeTruthy();

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 2')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 1')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 2')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 3')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 4')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 0')).toBeTruthy();

  query.getByText('Strikes: 0');
});

test('if strike is clicked 3 times it resets ball', () => {
  const query = render(<App />);

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 1')).toBeTruthy();

  fireEvent.click(query.getByText('Ball'), { button: 0 });
  expect(query.queryByText('Balls: 2')).toBeTruthy();

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 1')).toBeTruthy();

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 2')).toBeTruthy();

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 3')).toBeTruthy();

  fireEvent.click(query.getByText('Strike'), { button: 0 });
  expect(query.queryByText('Strikes: 0')).toBeTruthy();

  query.getByText('Balls: 0');
});
