# React Static Website Starter Project
This repo is an example of a React static website.  The project has the following features:

* ES6 code
* Babel v6 transpilation
* ESLint integration
* Hot loading of changes during development

The goal is to evolve this project into a simple Markdown-driven static website with a Bootstrap responsive theme.. The idea is to keep things simple.

You can watch this repo for the coming changes as it evolves into a simple
static website.

Usage
-----

Clone, install, and run.  Webpack will run the ES6 code through eslint during start.
```
git clone https://github.com/joaqperalta/Static-Website.git
cd Static-Website
npm install
npm start
// browse to http://localhost:8080
```
Currently, the landing page will show a simple list of future website pages, as shown below

![React Static Website Landing Page](https://cloud.githubusercontent.com/assets/9534794/17646320/752403f0-6192-11e6-839c-af483d68967e.png)

ESLint, Hot Loading, and Webpack Integration
-----
Webpack is configured to hot load changes during development via its entry points and loaders.  Webpack will run all *.js files through the Babel transpiler and then the es6 linter.
```
...
entry: [
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server',
	'./src/index.js'
],
module: {
	loaders: [
		{test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot!babel'},
		{test: /\.js$/, exclude: /node_modules/, loader: 'babel!eslint'}
	]
}
...
```

Odds 'N Ends
-----
### Linting
* The AirBnB eslint rules set is used for linting.
* Rule exceptions of allowing jsx in js and a few more are allowed.

### Webpack
ES6 code is used in the webpack config JS file.  In order to run the config through the Babel transpiler, it had to be named with the convention _webpack.config.[LOADER].js_.  So in this case, it had to be named _webpack.config.babel.js_ in order for it to run without error.

The reason for using ES6 code in the webpack config was to use the built-in path module of node.  Concatenation of the build dir to the current dir variable caused an eslint error that recommended fixing with use of the path module API.

See [Webpack Issue 1403](https://github.com/webpack/webpack/issues/1403) for discussion about the _webpack.config.[LOADER]js_ config.
