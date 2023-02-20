import express from 'express'
import type http from "http"

import type { Config } from "../config/types"
import logger from "../utils/Logger"
import WebServer from "./WebServer"

class Bootstrap {
  private webServer?: http.Server

  constructor(private readonly config: Config) {
  }

  async boot(): Promise<void> {
    try {
      this.startWebServer()
    } catch (err) {
      logger.error({ EventType: 'UnhandledBootstrapError', Error: err?.message, Stack: err?.stack })
      this.terminate()
    }
  }

  private startWebServer(): void {
    const app = express()
    this.webServer = app.listen(this.config.httpPort, () => {
      logger.info({ EventType: 'WebServerStarted' })
    })
    new WebServer(app, this.config).start()
  }

  private terminate(): void {
    this.webServer?.close()
    logger.info({ EventType: 'WebServerTerminated' })
  }
}

export default Bootstrap