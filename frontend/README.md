# Flickr Search By Tag - Frontend React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

### Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version >= 14.x
- Install [Yarn](https://yarnpkg.com/getting-started/install)

### Run this project locally

- Clone the repository
```git
git clone https://github.com/DavidFengAu/flickr-search.git <project_name>
```
- Install dependencies
```yarn
cd <project_name>/frontend
yarn install
```
- Build and run the project
```yarn
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn lint`

Helps you find and fix problems with your code

## Project Structure

The folder structure of this project is explained below:

| Name                                     | Description                                                                                      |
|------------------------------------------|--------------------------------------------------------------------------------------------------|
| **build**                                | Contains the distributable (or output) from your TypeScript build. Run `yarn build`              |
| **node_modules**                         | Contains all dependencies. Run `yarn install`                                                    |
| **public**                      	       | Contains the static index.html file                                                              |
| **src**                                  | Contains source code that will be compiled to the build dir                                      |
| **src**/components**                     | React Components that build the App                                                              |
| **src**/services**            		   | Services that handle API requests and responses                                                  |
| **src**/util/config.ts                   | Configs for different environments                                                               |
| **src**/App.tsx                          | Constructre the grid system of the App                                                           |
| **src**/index.tsx                        | Entry point that creates and starts App                                                          |
| **src**/**/*.test.tsx                    | Contains test cases                                                                              |
| package.json                             | Contains dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped).    |
| tsconfig.json                            | Config settings for TypeScript compiling.                                                        |
| .eslintrc                                | Config settings for ESLint code style checking.                                                  |
