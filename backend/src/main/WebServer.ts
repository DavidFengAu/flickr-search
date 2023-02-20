import compression from 'compression'
import type { Application } from "express"
import helmet from "helmet"
import morgan from "morgan"

import type { Config } from "../config/types"

class WebServer {
  constructor(
    private readonly app: Application,
    private readonly config: Config
  ) {
  }

  start(): void {

    // Middleware that greatly decreases the size of the response body
    this.app.use(compression())

    // Middleware that secures the Express app by setting various HTTP headers
    this.app.use(helmet())
    this.app.use(helmet.frameguard({ action: 'deny' }))

    // Middleware that provides access log
    this.app.use(morgan('combined'))

    // Serve Welcome Message
    this.app.get('/', (_req, res) => {
      res.send(`Welcome to Flickr Search Server.`)
    })
  }
}

export default WebServer