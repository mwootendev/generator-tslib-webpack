'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tslib-webpack:app', function () {
 before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'test-package',
        testingFramework: 'Jasmine'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.editorconfig',
      '.gitignore',
      'package.json',
      'tsconfig.json',
      'tslint.json',
      'src/Greeter.ts',
      'src/Greeter.spec.ts',
      'src/test-package.ts'
    ]);
  });
});
