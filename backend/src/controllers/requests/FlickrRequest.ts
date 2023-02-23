import type { ValidateFunction } from 'ajv'

import ajv from "../../utils/Ajv"

export type SearchPhotosRequest = {
  text?: string
  tags?: string[] | string
  tag_mode?: 'any' | 'all'
  page?: number
}

export const SearchPhotosRequestValidate: ValidateFunction<SearchPhotosRequest> = ajv.compile({
  type: 'object',
  properties: {
    text: {
      type: 'string',
      minLength: 1,
      maxLength: 1024
    },
    tags: {
      anyOf: [{
        type: 'array',
        items: {
          type: 'string',
          minLength: 1,
          maxLength: 128
        },
        minItems: 1,
        maxItems: 20,
        uniqueItems: true
      }, {
        type: 'string',
        minLength: 1,
        maxLength: 128
      }]
    },
    tag_mode: {
      type: 'string',
      enum: ['any', 'all']
    },
    page: {
      type: 'number'
    }
  },
  anyRequired: ['text', 'tags'],
  additionalProperties: false
})

export type FlickrPhotoProps = {
  farm: number
  id: string
  isfamily: number
  isfriend: number
  ispublic: number
  owner: string
  secret: string
  server: string
  title: string
}

export type FlickrPhotosSearchResponse = {
  photos: {
    page: number,
    pages: number,
    perpage: number,
    total: number
    photo: FlickrPhotoProps[]
  },
  stat: string
}

export type PhotosSearchResponse = {
  photos: {
    page: number,
    pages: number,
    perpage: number,
    total: number
    photo: (FlickrPhotoProps & { url: string })[]
  },
  stat: string
}

