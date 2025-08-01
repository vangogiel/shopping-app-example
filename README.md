# shopping-app-example

This project is a React web application written in TypeScript. It can be run as a standalone web app or as an iOS app via a simulator.

The aim of the example is to represent how simple technology used for web applications could be used with Capacitor to build an ioS app.

The app consits of an example with browsable items with a state holder for the cart allowing to maintain the state when browsing through other pages.

## How to run locally

build the app

```
npm install
npm run build:full
```

start the app

```
npm run start
```

open your browser and go to http://localhost:3000

## How to run as an iOS app

build the app

```
npm install
```

build native iOS dependencies

```
cd ios/App
```

```
pod install
```

build the app

```
cd ../..
```

```
npm run build:full
```

copy web assets to native project

```
npx cap copy ios
```

open Xcode to build/run the app

```
npx cap open ios
```
