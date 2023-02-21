export type Config = {
  flickr: {
    apiKey: string,
    secretKey: string
  },
  aws: {
    profile?: string
    region: string
    accountId: string
    cognito: {
      userPoolId: string
    }
  },
  httpPort: string
}
