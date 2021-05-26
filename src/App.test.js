import React from 'react';
import App from './App.js';

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test ('new text should not be present without a click', () => {
  render (<App/>)

  // checking if the text is not present before a click
  let displayedTest = screen.getByTestId('testing-text-display');
  expect(displayedTest).not.toHaveTextContent("Hello there!!!!");

})

test ('new text should be displayed when the button is clicked', () => {
  render (<App/>)

  // mocking a click to display new test
  userEvent.click(screen.getByText('Click me!'))

  // checking if the text is present after the click
  let displayedTest = screen.getByText("Hello there!!!!");
  expect(displayedTest).toBeInTheDocument();

})