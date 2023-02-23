import type { NextFunction, Request, Response } from 'express'

const CognitoExpress = require("cognito-express")
export type CognitoAuthenticator = typeof CognitoExpress
export const CognitoTokenValidator = (authenticator: CognitoAuthenticator) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.split(' ')
    if (token && token[0] === 'Bearer') {
      authenticator.validate(token[1], (error?: string) => {
        if (error) {
          res.status(401).send({ error: error ?? 'No authenticated user' })
        } else {
          next()
        }
      })
    } else {
      res.status(400).send({ error: 'No token provided' })
    }
  }