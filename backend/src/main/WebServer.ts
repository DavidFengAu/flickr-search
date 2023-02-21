import compression from 'compression'
import type { Application } from "express"
import express, { Router } from "express"
import helmet from "helmet"
import morgan from "morgan"

import SearchController from "../controllers/SearchController"
import { clientErrorHandler, errorHandler, logErrors } from "./middlewares/ErrorHandlers"
import type ServicesAssembler from "./ServicesAssembler"

class WebServer {
  constructor(
    private readonly app: Application,
    private readonly servicesAssembler: ServicesAssembler
  ) {
  }

  start(): void {
    // Middleware that parses string into json
    this.app.use(express.json())

    // Middleware that greatly decreases the size of the response body
    this.app.use(compression())

    // Middleware that secures the Express app by setting various HTTP headers
    this.app.use(helmet())
    this.app.use(helmet.frameguard({ action: 'deny' }))

    // Middleware that provides access log
    this.app.use(morgan('combined'))

    // Serve Welcome Message
    this.app.get('/', (_req, res) => {
      res.send('Welcome to Flickr Search Server.')
    })

    this.app.use("/", this.buildRoutes())

    // Middlewares that log and handle errors
    this.app.use(logErrors)
    this.app.use(clientErrorHandler)
    this.app.use(errorHandler)
  }

  private buildRoutes(): Router {
    const router = Router()

    const searchController = new SearchController(this.servicesAssembler.getFlickrService())
    searchController.applyRoutes(router)

    return router
  }
}

export default WebServer