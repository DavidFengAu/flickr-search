import 'jsdom-worker'
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import * as _ from "lodash"
import React from 'react'

import TagCollection from "./TagCollection"

describe('TagCollection Tests', () => {
  it('readers search bar, and call setTags', () => {
    const setTags = jest.fn()
    const tags = _.range(_.random(1, 10)).map(() => Math.random().toString(20).slice(2, 12))
    render(<TagCollection tags={tags} setTags={setTags} />)

    const tagButtons = screen.queryAllByTestId('tag-button')
    expect(tagButtons).toHaveLength(tags.length)

    fireEvent.click(tagButtons[0])
    expect(setTags.mock.calls).toHaveLength(1)
  })
})