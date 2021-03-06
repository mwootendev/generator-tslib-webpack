{
  "name": "<%= name %>",
  "files": [
    "lib/"
  ],
  "main": "lib/<%= name %>.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "build:dev": "webpack",
    "build:prod": "webpack --env=production",
    "build": "npm run build:dev && npm run build:prod",
    "clean": "rimraf lib coverage",
    "lint": "tslint \"src/**/*.ts\"",
    "preversion": "npm test -- --single-run",
    "version": "npm run build && git add -A -f lib",
    "postversion": "git push --tags origin",
    "release:patch": "npm run clean && npm version patch",
    "release:minor": "npm run clean && npm version minor",
    "release:major": "npm run clean && npm version major",
    "test": "karma start"
  },
  "version": "0.0.1",
  "dependencies": {},
  "devDependencies": {
    "istanbul": "^0.4.5",
    "istanbul-instrumenter-loader": "^2.0.0",
    "karma": "^1.7.1",
    "karma-coverage": "^1.1.1",
    "karma-coverage-istanbul-reporter": "^0.3.1",
    "karma-phantomjs-launcher": "^1.0.4",
    "karma-remap-istanbul": "^0.6.0",
    "karma-webpack": "^2.0.9",
    "phantomjs-prebuilt": "^2.1.16",
    "ts-loader": "^2.3.7",
    "tslint": "^4.5.1",
    "tslint-loader": "^3.5.3",
    "typescript": "^2.6.2",
    "webpack": "^3.10.0",
    <%- testPackages %>
  }
}
