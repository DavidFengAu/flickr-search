type Config = {
  FLICKR_SEARCH_WEB_URL: string
  AWS_COGNITO_REGION: string
  AWS_USER_POOLS_ID: string
  AWS_USER_POOLS_WEB_CLIENT_ID: string
}

enum Env {
  DEV = 'DEV',
  UAT = 'UAT'
}

const config: { [key in Env]: Config } = {
  [Env.DEV]: {
    FLICKR_SEARCH_WEB_URL: "http://localhost:8000",
    AWS_COGNITO_REGION: "us-east-1",
    AWS_USER_POOLS_ID: "us-east-1_WOnY9KfjD",
    AWS_USER_POOLS_WEB_CLIENT_ID: "4qam1jvpr79en3rb8u8ldko6t0"
  },
  [Env.UAT]: {
    FLICKR_SEARCH_WEB_URL: "",
    AWS_COGNITO_REGION: "",
    AWS_USER_POOLS_ID: "",
    AWS_USER_POOLS_WEB_CLIENT_ID: ""
  }
}

const domain = window.location.origin
const isLocalhost =
  domain.indexOf('localhost') > -1 ||
  domain.indexOf('192.168') > -1 ||
  domain.indexOf('0.0.0.0') > -1
const env = isLocalhost ? Env.DEV : Env.UAT

export default config[env]