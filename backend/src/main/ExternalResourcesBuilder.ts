import type { Config } from "../config/types"
import type { CognitoAuthenticator } from "./middlewares/CognitoTokenValidator"

const Flickr = require("flickr-sdk")
const CognitoExpress = require("cognito-express")

export class ExternalResources {
  constructor(
    readonly flicker: typeof Flickr,
    readonly cognitoAuthenticator: CognitoAuthenticator
  ) {
  }
}

export class ExternalResourcesBuilder {
  constructor(
    private readonly config: Config
  ) {
  }

  build() {
    const flicker = new Flickr(this.config.flickr.apiKey)
    const cognitoAuthenticator = new CognitoExpress({
      region: this.config.aws.region,
      cognitoUserPoolId: this.config.aws.cognito.userPoolId,
      tokenUse: "id"
    })

    return new ExternalResources(
      flicker,
      cognitoAuthenticator
    )
  }
}