import express, { Express } from 'express'
import type http from "http"

import type { Config } from "../config/types"
import logger from "../utils/Logger"
import { ExternalResources, ExternalResourcesBuilder } from "./ExternalResourcesBuilder"
import ServicesAssembler from "./ServicesAssembler"
import WebServer from "./WebServer"

class Bootstrap {
  private webServer?: http.Server
  private externalResources?: ExternalResources

  constructor(
    private readonly config: Config
  ) {
  }

  boot(): Express {
    this.externalResources = new ExternalResourcesBuilder(this.config).build()
    const servicesAssembler = new ServicesAssembler(this.externalResources)
    return this.startWebServer(servicesAssembler)
  }

  private startWebServer(servicesAssembler: ServicesAssembler): Express {
    const app = express()
    this.webServer = app.listen(this.config.httpPort, () => {
      logger.info({ EventType: 'WebServerStarted' })
    })
    process.on('SIGTERM', () => this.terminate())
    process.on('SIGINT', () => this.terminate())
    new WebServer(app, servicesAssembler).start()
    return app
  }

  private terminate(): void {
    this.webServer?.close()
    this.externalResources?.close()
    logger.info({ EventType: 'WebServerTerminated' })
  }
}

export default Bootstrap