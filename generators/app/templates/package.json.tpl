{
  "name": "<%= name %>",
  "version": "0.0.1",
  "dependencies": {},
  "devDependencies": {
    "del": "^2.2.0",
    "gulp": "^3.9.1",
    "gulp-browserify": "^0.5.1",
    "gulp-istanbul": "^0.10.4",
    "gulp-load-plugins": "^1.2.4",
    "gulp-rename": "^1.2.2",
    "gulp-sourcemaps": "^2.0.0-alpha",
    "gulp-tslint": "^5.0.0",
    "gulp-typescript": "^2.13.0",
    "gulp-uglify": "^1.5.3",
    "remap-istanbul": "^0.6.4",
    "tslint": "^3.8.1",
    "typescript": "^1.8.10",
    "typings": "^1.3.0",
    <%- testPackages %>
  },
  "scripts": {
    "postinstall": "./node_modules/.bin/typings install"
  }
}
