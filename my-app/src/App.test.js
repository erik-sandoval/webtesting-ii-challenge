import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup, render } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

test('renders without creash', () => {
  const query = render(<App />);
  query.getByText(/hello World/i);
});
