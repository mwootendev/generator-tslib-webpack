{
  "name": "<%= name %>",
  "version": "0.0.1",
  "dependencies": {},
  "devDependencies": {
    "codelyzer": "0.0.20",
    "istanbul": "^0.4.5",
    "istanbul-instrumenter-loader": "^2.0.0",
    "karma": "^1.5.0",
    "karma-coverage": "^1.1.1",
    "karma-phantomjs-launcher": "^1.0.2",
    "karma-remap-istanbul": "^0.6.0",
    "karma-webpack": "^2.0.2",
    "phantomjs-prebuilt": "^2.1.14",
    "ts-loader": "^2.0.1",
    "tslint": "^4.5.1",
    "tslint-loader": "^3.4.2",
    "typescript": "^2.2.1",
    "webpack": "^2.2.1",
    <%- testPackages %>
  }
}
