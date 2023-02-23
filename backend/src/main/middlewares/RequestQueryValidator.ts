import type { ValidateFunction } from 'ajv'
import type { NextFunction, Request, Response } from 'express'

export const RequestQueryValidator = (validate: ValidateFunction) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const isValid = validate(req.query)
    if (!isValid) {
      res.status(400).send({ error: validate.errors })
    } else {
      next()
    }
  }