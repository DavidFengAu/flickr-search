import { expect } from "chai"
import * as _ from 'lodash'
import supertest from "supertest"

import app from '../../src/app'

describe('POST /search endpoint', () => {
  it('POST /search endpoint failed returns 400, because of search text over 1024 characters', () => {
    return supertest(app)
      .post('/search')
      .send({ text: _.repeat('a', 1025) })
      .then(response => {
        expect(response.statusCode).to.equal(400)
        expect(response.body.error[0].keyword).to.equal("maxLength")
      })
  })

  it('POST /search endpoint failed returns 400, because of duplicated values in tags', () => {
    return supertest(app)
      .post('/search')
      .send({ tags: ['david', 'david'] })
      .then(response => {
        expect(response.statusCode).to.equal(400)
        expect(response.body.error[0].keyword).to.equal("uniqueItems")
      })
  })

  it('POST /search endpoint failed returns 400, because of invalid tag mode', () => {
    return supertest(app)
      .post('/search')
      .send({ tag_mode: "invalid" })
      .then(response => {
        expect(response.statusCode).to.equal(400)
        expect(response.body.error[0].keyword).to.equal("enum")
      })
  })

  it('POST /search endpoint successfully returns photos', () => {
    return supertest(app)
      .post('/search')
      .send({ tags: ["David"] })
      .then(response => {
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.have.property("photos")
        expect(response.body.stat).to.equal("ok")
      })
  })
})