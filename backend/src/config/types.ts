export type Config = {
  flickr: {
    apiKey: string,
    secretKey: string
  },
  aws: {
    region: string
    cognito: {
      userPoolId: string
    }
  },
  httpPort: string
}
