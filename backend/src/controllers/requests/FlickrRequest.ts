import type { ValidateFunction } from 'ajv'
import Ajv from "ajv"

export type SearchPhotosRequest = {
  text?: string
  tags?: string[]
  tag_mode?: 'any' | 'all',
  page?: number
}

export const SearchPhotosRequestValidate: ValidateFunction<SearchPhotosRequest> = new Ajv().compile({
  type: 'object',
  properties: {
    text: {
      type: 'string',
      maxLength: 1024,
      nullable: true
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 128
      },
      minItems: 1,
      maxItems: 20,
      uniqueItems: true
    },
    tag_mode: {
      type: 'string',
      enum: ['any', 'all']
    },
    page: {
      type: 'number'
    }
  },
  additionalProperties: false
})