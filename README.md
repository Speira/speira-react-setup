# Speira React Setup

Welcome to the Speira React Setup. A clean architecture example using Typescript and Styled-Components, with an Eslint/Prettier optimized configuration.

## Todo

### Bash Script

A bash script will be added soon. The script will be able to boostrap an already set project.

### Test

Test are going to be pushed.

### Style guides

A styleguidist setup will be pushed

## Available scripts

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Updated package.json

### Add jest resolver

Add a jest config resolver in the package.json

```json
  "jest": {
    "moduleNameMapper": {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      "^~(.+)Module(.*)$": "<rootDir>/src/modules/$1Module$2",
      "^~(.+)$": "<rootDir>/src/$1"
    }
  }
```
