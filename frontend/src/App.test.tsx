import 'jsdom-worker'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'

import App from './App'

describe('App Tests', () => {
  it('renders the grid component', () => {
    render(<App />)
    expect(screen.getByTestId('app-grid')).toBeInTheDocument()
  })
})
