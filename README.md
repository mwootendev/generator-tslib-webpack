# generator-tslib-webpack

A [Yeoman](http://yeoman.io) generator for generating a UMD JavaScript library using TypeScript and Webpack

## Features

1. Scaffold a library module project written in TypeScript
2. Supports test driven development (TDD)
   - Choice of testing framework (Jasmine or Mocha+Chai+Sinon)
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
   - Test, lint, build, and release with built-in NPM scripts       

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
   - Choice of testing framework (Jasmine or Mocha/Chai/Sinon)

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
        |-- greeter.spec.ts
        |-- index.ts
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

#### `<source directory>/greeter.spec.ts`
An example set of test cases for the Greeter class. This should be replaced
with test cases specific to your library.

#### `<source directory>/index.ts`
The main TypeScript file pulling together all of the parts of the library.
References to new TypeScript files should be placed in here.

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
Builds both the uncompressed and minified versions of the library, as well as type defintiions and source maps.

### `npm run build:dev`
Builds the uncompressed development version of the library, type definitions, and TypeScript to JavaScript sourcemap.

### `npm run build:prod`
Builds the minified production version of the library, type definiitions, and a TypeScript to minified JavaScript source map.

### `npm run lint`
Run the tslint utility on the TypeScript source and reports any errors or warnings.

### `npm test`
Runs the unit tests and reports test status and code coverage. By default, this will automatically watch for changes and re-execute the tests when a change is detected.

### `npm run release:patch`
Cleans, tests, and rebuilds the project, bumps the version by one patch version (0.0.1 -> 0.0.2) and tags
it. Pushes the tag back to the Git repository.

### `npm run release:minor`
Cleans, tests, and rebuilds the project, bumps the version by one minor version (0.0.1 -> 0.1.0) and tags
it. Pushes the tag back to the Git repository.

### `npm run release:major`
Cleans, tests, and rebuilds the project, bumps the version by one major version (0.0.1 -> 1.0.0) and tags
it. Pushes the tag back to the Git repository.

## Editor Support

### [Visual Studio Code](https://code.visualstudio.com/)

Microsoft's Visual Studio Code editor provides great support out of the box for TypeScript projects.
The library project that is generated will have a default .vscode folder with several settings
pre-configured. The default project also includes several tasks so that the commands "Tasks: Run Test Task" and
"Tasks: Run Build Task" will run the unit tests and build from within Visual Studio Code.

#### Recommended Plugins

* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) by EditorConfig
* [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) by Joel Day
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) by egamma
* [VSCode LCOV](https://marketplace.visualstudio.com/items?itemName=alexdima.vscode-lcov) by alexdima
* [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) by Roberto Huertas

### [Atom](https://atom.io/)

Github's Atom is another free text editor with good support for TypeScript via the Atom TypeScript plugin.

#### Recommended Plugins

* [Atom TypeScript](https://atom.io/packages/atom-typescript) by TypeStrong
* [Docblockr](https://atom.io/packages/docblockr) by nikhilkalige
* [editorconfig](https://atom.io/packages/editorconfig) by sindresorhus
* [file-icons](https://atom.io/packages/file-icons) by file-icons
* [lcov-info](https://atom.io/packages/lcov-info) by jacogr
* [linter-tslint](https://atom.io/packages/linter-tslint) by AtomLinter

## Development Workflow

### Setting Up The Project

1. Initialize a new, empty Git repository on Github.
2. Clone the new repository to your development environment.
3. Use "```yo tslib-webpack```" to generate the project.

### Making Changes

I would recommend having a terminal open running "```npm test```" or using the "Tasks: Run Test Task" in Visual Studio Code to output the linter warnings, test results, and code coverage.

You are now free to do whatever you want with the code base. Install some additional NPM libraries or types. Replace the greeter.ts file with something meaningful. Add additional Webpack plugins. 

### Preparing for Distribution

The generated project contains several NPM scripts for preparing a release. The "release:patch", "release:minor", and "release:major" scripts all clean and rebuild the project and run the unit tests prior to updating the version and tagging it. 

### Publishing

After a version is tagged in your repository, you may use the "```npm publish```" command to publicly expose
your library to NPM.
