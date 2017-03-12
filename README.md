# generator-tslib-webpack

A [Yeoman](http://yeoman.io) generator for generating a UMD JavaScript library using TypeScript and Webpack

## Features

1. Scaffold a library module project written in TypeScript
2. Supports test driven development (TDD)
   - Choice of testing framework (Jasmine or Moha+Chai+Sinon)
   - Tests written in TypeScript
   - Code coverage on source TypeScript files
   - Tests and coverage run when code changes
3. Builds with Webpack
   - TypeScript linting
   - Minification
   - Webpack UMD packaging
       - Sourcemaps for both TypeScript and generated JavaScript 
       - TypeScript definitions for other TypeScript projects
4. Controlled with simple NPM commands
   - Test, lint, build, and release with built-in NPM shell scripts       

## Installation

### Prerequisites

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install Yeoman `npm install -g yo`

3. Install these NPM packages globally

    ```bash
    npm install -g webpack karma-cli
    ```

### Installing the Generator

```bash
npm install -g generator-tslib-webpack
```

## Running the Generator

Start the TypeScript Library Webpack Generator

```bash
yo tslib-webpack
```

You will be prompted for the following information
   - Project name (defaults to current folder name)
   - Choice of testing framework (Jasmine or Mocha/Chai)

## Working with the Generated Files

### Generated File Structure

```
    .
    |-- .editorconfig
    |-- .gitignore
    |-- karma.conf.js
    |-- node_modules
    |-- package.json
    |-- <source directory>
        |-- greeter.ts
        |-- index.ts
    |-- <test directory>
        |-- Greeter.spec.ts
    |-- tsconfig.json
    |-- tslint.json
    |-- webpack.config.js

```

### Generated Files

#### `.editorconfig`
The configuration for text editors. The default indentation is 2 spaces. Edit
this file if you want to use tabs or a different number of spaces.

#### `.gitignore`
The default list of project files that Git should not attempt to commit to the 
repository. Edit this if there are different files you add that you do not want
to commit (build directories, temp files, etc).

#### `karma.conf.js`
The configuration file for the Karma test runned used to execute the unit tests.
This file should be altered for changes to the overall testing process.

#### `node_modules`
The folder contains all of the required dependencies for the project. You should
not edit this file directly.

#### `package.json`
The NPM package file for the project containing the project's name, version,
and dependencies. Update this file to add or change dependencies.

#### `<source directory>`
The directory that will contain all of the TypeScript source files for your library.
Any new code meant to be distributed with the library should be placed in here.

#### `<source directory>/greeter.ts`
An example TypeScript class that writes a simple message to the console.
This file should be replaced with the actual functionality of your library.

#### `<source directory>/index.ts`
The main TypeScript file pulling together all of the parts of the library.
References to new TypeScript files should be placed in here.

#### `<test directory>/greeter.spec.ts`
An example set of test cases for the Greeter class. This should be replaced
with test cases specific to your library.

#### `tsconfig.json`
The configuration for the TypeScript compiler. Any changes to how the TypeScript
should be compiled should be made here.

#### `tslint.json`
The configuration for linting TypeScript code. Any changes to style rules or
coding conventions should be made in this file.

#### `webpack.config.js`
The configuration for the webpack build. Any changes to the build process
should be made in this file.
   
## NPM Scripts

### `npm run clean`
Removes the build artifacts and distributables.

### `npm run build`

### `npm run build:dev`

### `npm run build:prod`

### `npm run lint`

### `npm test`

### `npm run release:patch`

### `npm run release:minor`

### `npm run release:major`

## Development Workflow


    

