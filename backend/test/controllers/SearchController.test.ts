import { expect } from "chai"
import * as _ from 'lodash'
import supertest from "supertest"

import app from '../../src/app'

describe('GET /search endpoint', () => {
  it('GET /search endpoint failed returns 400, because of search text over 1024 characters', () => {
    return supertest(app)
      .get(`/search?text=${_.repeat('a', 1025)}`)
      .then(response => {
        expect(response.statusCode).to.equal(400)
        expect(response.body.error[0].keyword).to.equal("maxLength")
      })
  })

  it('GET /search endpoint failed returns 400, because of duplicated values in tags', () => {
    const tag = 'SameTag'
    return supertest(app)
      .get(`/search?tags=${tag}&tags=${tag}`)
      .then(response => {
        expect(response.statusCode).to.equal(400)
        expect(response.body.error[0].keyword).to.equal("uniqueItems")
      })
  })

  it('GET /search endpoint failed returns 400, because of invalid tag mode', () => {
    return supertest(app)
      .get('/search?tag_mode=invalid')
      .then(response => {
        expect(response.statusCode).to.equal(400)
        expect(response.body.error[0].keyword).to.equal("enum")
      })
  })

  it('GET /search endpoint successfully returns photos', () => {
    return supertest(app)
      .get('/search?tags=David')
      .then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.have.property("photos")
        expect(response.body.stat).to.equal("ok")
      })
  })
})