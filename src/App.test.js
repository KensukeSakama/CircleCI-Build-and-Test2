import React from 'react';
import App from './App.js';

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test ('check if the new text is displayed when the button is clicked', () => {
  render (
    <App/>
  )

  userEvent.click(screen.getByText('Click me!'))
  let displayedTest = screen.getByText("Hello there!!!!");
  expect(displayedTest).toBeInTheDocument();

})