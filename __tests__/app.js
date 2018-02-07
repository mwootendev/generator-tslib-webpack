'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tslib-webpack:app', () => {
  describe('Jasmine w/ npm', () => {
    const installDependenciesMock = jest.fn();

    beforeAll(() => {
      return helpers
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          name: 'test-package',
          testingFramework: 'Jasmine',
          packageManager: 'npm'
        })
        .on('ready', generator => {
          generator.installDependencies = installDependenciesMock;
        })
        .toPromise();
    });

    it('creates files', () => {
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

    describe('package.json', () => {
      it('properly names the project', () => {
        assert.jsonFileContent('package.json', { name: 'test-package' });
      });

      it('is configured for Jasmine', () => {
        assert.fileContent('package.json', /jasmine/);
      });

      it('does not reference Mocha or Chai', () => {
        assert.noFileContent('package.json', /mocha/);
        assert.noFileContent('package.json', /chai/);
      });
    });

    describe('karma.conf.js', () => {
      it('is configured for Jasmine', () => {
        assert.fileContent('karma.conf.js', /karma-jasmine/);
      });

      it('does not reference Mocha or Chai', () => {
        assert.noFileContent('karma.conf.js', /mocha/);
        assert.noFileContent('karma.conf.js', /chai/);
      });
    });

    it('runs npm to install packages', () => {
      expect(installDependenciesMock).toHaveBeenCalledWith({
        bower: false,
        npm: true,
        yarn: false
      });
    });
  });

  describe('Mocha+Chai+Sinon w/ Yarn', () => {
    const installDependenciesMock = jest.fn();

    beforeAll(() => {
      return helpers
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          name: 'TestPackage',
          testingFramework: 'Mocha',
          packageManager: 'Yarn'
        })
        .on('ready', generator => {
          generator.installDependencies = installDependenciesMock;
        })
        .toPromise();
    });

    it('creates files', () => {
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

    describe('package.json', () => {
      it('properly names the project', () => {
        assert.jsonFileContent('package.json', { name: 'test-package' });
      });

      it('is configured for Mocha+Chai+Sinon', () => {
        assert.fileContent('package.json', /mocha/);
        assert.fileContent('package.json', /chai/);
        assert.fileContent('package.json', /sinon/);
        assert.fileContent('package.json', /sinon-chai/);
      });

      it('does not reference Jasmine', () => {
        assert.noFileContent('package.json', /jasmine/);
      });
    });

    describe('karma.conf.js', () => {
      it('is configured for Mocha+Chai+Sinon', () => {
        assert.fileContent('karma.conf.js', /karma-mocha/);
        assert.fileContent('karma.conf.js', /karma-sinon-chai/);
      });

      it('does not reference Jasmine', () => {
        assert.noFileContent('karma.conf.js', /jasmine/);
      });
    });

    it('runs Yarn to install packages', () => {
      expect(installDependenciesMock).toHaveBeenCalledWith({
        bower: false,
        npm: false,
        yarn: true
      });
    });
  });
});
