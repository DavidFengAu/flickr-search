export type Config = {
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
