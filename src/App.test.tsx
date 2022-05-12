import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Init', () => {
  test('App render', async () => {
    render(<App />);

    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  });
});
