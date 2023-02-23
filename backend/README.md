# Flickr Search By Tag - Backend NodeJs

This project is using nodejs and the framework [Express](https://expressjs.com/).

## Getting started

### Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version >= 14.x
- Install [Yarn](https://yarnpkg.com/getting-started/install)
- Use Amazon Cognito Service

### Run this project locally
- Clone the repository
```git
git clone https://github.com/DavidFengAu/flickr-search.git <project_name>
```
- Install dependencies
```yarn
cd <project_name>/backend
yarn install
```
- Update configs

  1. Copy local.json to local-development.json and local-test.json
  2. Fill in your flickr apikey
  

- Build and run the project
```yarn
yarn start
```

## API Documents

- http://localhost:8000/api-docs/

## Available Scripts

In the project directory, you can run:

| Yarn Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`           | Runs full build and runs node on src/app.ts. |
| `build     `      | Runs full build. |
| `test`            | Runs build in watch mode and runs node in watch mode. |                                         |
| `lint`            | Runs ESLint for code style checking. |


## Project Structure

The folder structure of this project is explained below:

| Name | Description |
| ------------------------      | --------------------------------------------------------------------------------------------- |
| **dist**                      | Contains the distributable (or output) from your TypeScript build. Run `yarn build` |
| **node_modules**              | Contains all dependencies. Run `yarn install` |
| **src**                       | Contains source code that will be compiled to the dist dir. |
| **src/controllers**           | Controllers that define and apply routes. |
| **src/controllers/requests**  | Request interfaces and JSONSchema that define request body. |
| **src/main**/Bootstrap.ts     | Bootstrap that creates and starts web server. |
| **src/main**/WebServer.ts     | WebServer that applies middlewares and assembles resources. |
| **src/main**/ExternalResourcesBuilder.ts | Builder that creates third party clients. |
| **src/main**/ServicesAssembler.ts | Assembler that creates services from config and clients. |
| **src/main/apiDocs**          | API document that defines by OpenAPI Specification in JSON format. |
| **src/main/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes. |
| **src/services**              | Services that handle requests. |
| **src**/app.ts                | Entry point that creates and starts Express App. |
| **test**                      | Contains test cases. |
| jest.config.js                | Config settings for Jest testing. |
| package.json                  | Contains dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped). |
| tsconfig.json                 | Config settings for TypeScript compiling. |
| .eslintrc                     | Config settings for ESLint code style checking. |

