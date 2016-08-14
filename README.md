# React Static Website Starter Project
This repo is an example of a React static weebsite.  The project has the following features:
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
git clone https://github.com/bobbrady/react-static-website.git
cd react-static-website
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
* The AirBnB eslint rules set it used.
* Override linting rules are used for tabs instead of spaces, etc.
