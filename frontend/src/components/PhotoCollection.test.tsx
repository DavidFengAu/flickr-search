import 'jsdom-worker'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import * as _ from 'lodash'
import React from 'react'

import type { FlickrPhoto } from "../services/requests/FlickrRequest"
import PhotoCollection from "./PhotoCollection"

describe('PhotoCollection Tests', () => {
  const aFlickrPhoto = (): FlickrPhoto => ({
    id: Math.random().toString(20).slice(2, 12),
    title: Math.random().toString(20).slice(2, 12),
    url: ""
  })

  it('renders loading icon if it is loading', () => {
    render(<PhotoCollection isLoading photos={[]} />)
    expect(screen.getByTestId('photo-loader')).toBeInTheDocument()
    expect(screen.queryByTestId('photo-collection')).not.toBeInTheDocument()
  })

  it('renders photo collection and photo cards if photos provided', () => {
    const photos = _.range(_.random(1, 10)).map(() => aFlickrPhoto())
    render(<PhotoCollection isLoading={false} photos={photos} />)
    expect(screen.queryByTestId('photo-loader')).not.toBeInTheDocument()
    expect(screen.getByTestId('photo-collection')).toBeInTheDocument()
    expect(screen.queryAllByTestId('photo-card')).toHaveLength(photos.length)
  })
})
