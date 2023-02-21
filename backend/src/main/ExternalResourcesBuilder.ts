import type { Config } from "../config/types"

const Flickr = require("flickr-sdk")

export class ExternalResources {
  constructor(
    readonly flicker: typeof Flickr
  ) {
  }

  close(): void {

  }
}

export class ExternalResourcesBuilder {
  constructor(
    private readonly config: Config
  ) {
  }

  build() {
    const flicker = new Flickr(this.config.flickr.apiKey)

    return new ExternalResources(
      flicker
    )
  }
}