import Ajv from "ajv"

const ajv = new Ajv({
  allowUnionTypes: true,
  keywords: [
    require("ajv-keywords/dist/definitions/anyRequired")()
  ]
})

export default ajv