import 'jsdom-worker'
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import SearchBar from "./SearchBar"

describe('SearchBar Tests', () => {
  it('readers search bar, and call setTags', () => {
    const setTags = jest.fn()
    render(<SearchBar isLoading={false} setTags={setTags} />)
    const searchInputEl = screen.getByTestId('search-bar')
    const searchButton = screen.getByRole('button')
    fireEvent.change(searchInputEl, { target: { value: "test" } })
    fireEvent.click(searchButton)
    expect(setTags.mock.calls).toHaveLength(1)
  })
})