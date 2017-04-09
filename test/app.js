'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tslib-webpack:app', function () {

  describe('Jasmine', function() {

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
          'karma.conf.js',
          'package.json',
          'tsconfig.json',
          'tslint.json',
          'webpack.config.js',
          'src/greeter.ts',
          'src/greeter.spec.ts',
          'src/index.ts',
          '.vscode/settings.json',
          '.vscode/tasks.json'
        ]);
      });

      describe('package.json', function() {

        it('properly names the project', function() {
          assert.jsonFileContent('package.json', {name: 'test-package'});
        });

        it('is configured for Jasmine', function() {
          assert.fileContent('package.json', /jasmine/);
        });

        it('does not reference Mocha or Chai', function() {
          assert.noFileContent('package.json', /mocha/);
          assert.noFileContent('package.json', /chai/);
        });

      });

      describe('karma.conf.js', function() {

        it('is configured for Jasmine', function() {
          assert.fileContent('karma.conf.js', /karma-jasmine/);
        });

        it('does not reference Mocha or Chai', function() {
          assert.noFileContent('karma.conf.js', /mocha/);
          assert.noFileContent('karma.conf.js', /chai/);
        });

      });
  });

  describe('Mocha+Chai+Sinon', function() {

    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          name: 'TestPackage',
          testingFramework: 'Mocha'
        })
        .toPromise();
    });

    it('creates files', function () {
      assert.file([
        '.editorconfig',
        '.gitignore',
        'karma.conf.js',
        'package.json',
        'tsconfig.json',
        'tslint.json',
        'webpack.config.js',
        'src/greeter.ts',
        'src/greeter.spec.ts',
        'src/index.ts',
        '.vscode/settings.json',
        '.vscode/tasks.json'
      ]);
    });

    describe('package.json', function() {

      it('properly names the project', function() {
        assert.jsonFileContent('package.json', {name: 'test-package'});
      });

      it('is configured for Mocha+Chai+Sinon', function() {
        assert.fileContent('package.json', /mocha/);
        assert.fileContent('package.json', /chai/);
        assert.fileContent('package.json', /sinon/);
        assert.fileContent('package.json', /sinon-chai/);
      });

      it('does not reference Jasmine', function() {
        assert.noFileContent('package.json', /jasmine/);
      });

    });

    describe('karma.conf.js', function() {

      it('is configured for Mocha+Chai+Sinon', function() {
        assert.fileContent('karma.conf.js', /karma-mocha/);
        assert.fileContent('karma.conf.js', /karma-sinon-chai/);
      });

      it('does not reference Jasmine', function() {
        assert.noFileContent('karma.conf.js', /jasmine/);
      });

    });
  });
});
