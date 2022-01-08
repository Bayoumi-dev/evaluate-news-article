# Evaluate a News Article with Natural Language Processing
## Table of Contents

- [Overview](#overview)
- [Built with](#-built-with)
- [Install](#install) (How it works)
- [Development mode](#development-mode)
- [Production  mode](#production-mode)
- [Testing](#testing)
- [The Project Structure](#the-project-structure)

## Overview

Evaluate a News Article is the third project in Advance track (Egypt FWD initiative & Udacity).

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then displays sentiment analysis returned from meaningcloud API, based on the contents of the article.

## ⚙ Built with

#### Languages & Dependencies

- HTML
- SCSS
- JS
- NodeJS
- ExpressJS
- CORS
- Node-fetch
- Dotenv
- Webpack
- Jest

## Install

### How it works
###### After clone the project or download ZIP
```bash
git clone https://github.com/Bayoumi-dev/evaluate-news-article.git
```
###### Create an account with [MeaningCloud](https://www.meaningcloud.com/), you will be given a license key to start using the API
###### You must install `Node js` on the local machine, then install the [`dependencies`](package.json) used in this project. Run the command in the root
```bash
npm install
```
###### Create a new `.env` file in the root of this project, then Fill the .env file with your API keys like this:
```
API_KEY=7e3b37*************
```
###### Start the server with:
```bash
npm start
```
This app starts a server and listens on `port: 3001`

## Development mode
###### Start webpack dev server with:
```bash
npm run dev
```
The webpack dev server listening on `port: 3000`

## Production mode
If you want to generate the `dist` folder and link it to the server
you need to active `line:23` in server/index.js\
`// app.use(express.static("dist"));`

and deactivate the `line:27` in the same path to disable webpack-dev-middleware\
`app.use(webpackDevMiddleware(compiler));`
###### after that run `npm run build` to build the project in prod mode, then start the server with `npm start`
## Testing
###### Testing the functionality with Jest. Start test:
```bash
npm run test
```


## The Project Structure
```bash
├── babel.config.json
├── jest.config.js
├── package.json
├── postcss.config.js
├── README.md
├── webpack.dev.js
├── webpack.prod.js
└── src
    ├── client
    │   ├── __test__
    │   │   ├── analysisResult.test.js
    │   │   ├── handleForm.test.js
    │   │   └── isValidUrl.test.js
    │   ├── images 
    │   │   ├── error.svg
    │   │   ├── github.svg
    │   │   ├── instagram.svg
    │   │   ├── linkedin.svg
    │   │   └── logo.svg
    │   ├── js
    │   │   ├── analysisResult.js
    │   │   ├── components.js
    │   │   ├── handleForm.js
    │   │   └── isValidUrl.js
    │   ├── styles
    │   │   ├── abstracts
    │   │   │   ├── colors.scss
    │   │   │   ├── fonts.scss
    │   │   │   ├── index.scss
    │   │   │   └── mixins.scss
    │   │   ├── base
    │   │   │   └── reset.scss
    │   │   ├── components
    │   │   │   ├── form.scss
    │   │   │   ├── loading.scss
    │   │   │   └── result.scss
    │   │   ├── layout
    │   │   │   ├── container.scss
    │   │   │   ├── footer.scss
    │   │   │   ├── header.scss
    │   │   │   └── index.scss
    │   │   ├── pages
    │   │   │   └── index.scss
    │   │   └── index.scss
    │   ├── views
    │   │   ├── favicon.ico
    │   │   └── index.html
    │   └── index.js
    └── server
        ├── dataRequest.js
        ├── index.js
        └── mockAPI.js
```
