import '@aws-amplify/ui-react/styles.css'

import { Heading, useTheme, withAuthenticator } from "@aws-amplify/ui-react"
import { Amplify } from "aws-amplify"
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import config from "./util/config"

Amplify.configure({
  'aws_cognito_region': config.AWS_COGNITO_REGION,
  'aws_user_pools': 'enable',
  'aws_user_pools_id': config.AWS_USER_POOLS_ID,
  'aws_user_pools_web_client_id': config.AWS_USER_POOLS_WEB_CLIENT_ID,
  'authenticationFlowType': 'USER_SRP_AUTH'
})

const AuthApp = withAuthenticator(App, {
  hideSignUp: true,
  components: {
  SignIn: {
      Header() {
        const { tokens } = useTheme()
        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={4}>
            Sign in to Flickr Search By Tag
          </Heading>
        )
      }
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <AuthApp />
  </React.StrictMode>
)
