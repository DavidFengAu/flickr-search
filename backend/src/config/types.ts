export type Config = {
  flickr: {
    apiKey: string
  },
  aws: {
    region: string
    cognito: {
      userPoolId: string
    }
  },
  httpPort: string
}
