// src/components/Button/Button.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom/extend-expect';

describe('Button component', () => {
  test('renders the Button component with correct text', () => {
    render(<Button />);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies the correct CSS class', () => {
    render(<Button />);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toHaveClass('button');
  });
});
