'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var changeCase = require('change-case');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the sensational ' +
          chalk.red('generator-tslib-webpack') +
          ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: changeCase.paramCase(this.appname)
      },
      {
        type: 'list',
        name: 'testingFramework',
        message: 'Which testing framework would you like to use?',
        choices: ['Mocha+Chai+Sinon', 'Jasmine']
      }
      /*
      {
        type    : 'input',
        name    : 'sourceDir',
        message : 'Source directory (src, app, etc.)',
        default : 'src'
      },
      {
        type    : 'input',
        name    : 'testDir',
        message : 'Test directory (src, test, spec, etc.)',
        default : 'src'
      }
      */
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.name = changeCase.paramCase(this.props.name);
      this.props.sourceDir = 'src';
      this.props.testDir = 'src';
      this.props.framework = props.testingFramework === 'Jasmine' ? 'jasmine' : 'mocha';

      if (this.props.framework === 'jasmine') {
        this.props.karma = {
          frameworks: "'jasmine'",
          plugins: "require('karma-jasmine'),"
        };
        this.props.testPackages =
          '"jasmine": "^2.5.3",' +
          '\n    "karma-jasmine": "^1.1.0",' +
          '\n    "@types/jasmine": "^2.5.43"';
      } else {
        this.props.karma = {
          frameworks: "'mocha', 'sinon-chai'",
          plugins: "require('karma-mocha'),\n      require('karma-sinon-chai'),"
        };
        this.props.testPackages =
          '"chai": "^3.5.0",' +
          '\n    "karma-sinon-chai": "^1.3.1",' +
          '\n    "karma-mocha": "^1.3.0",' +
          '\n    "mocha": "^3.2.0",' +
          '\n    "sinon": "^2.1.0",' +
          '\n    "sinon-chai": "^2.9.0",' +
          '\n    "@types/chai": "^3.4.35",' +
          '\n    "@types/mocha": "^2.2.39",' +
          '\n    "@types/sinon": "^2.1.2",' +
          '\n    "@types/sinon-chai": "^2.7.27"';
      }
    });
  }

  writing() {
    var generator = this;

    copy('_editorconfig', '.editorconfig');
    copy('_gitignore', '.gitignore');
    copy('tsconfig.json');
    copy('tslint.json');
    copy('src/greeter.ts', this.props.sourceDir + '/greeter.ts');
    copy(
      'src/greeter.spec.ts.' + this.props.framework,
      this.props.testDir + '/greeter.spec.ts'
    );
    copy('src/index.ts', this.props.sourceDir + '/index.ts');
    copy('.vscode/settings.json');
    copy('.vscode/tasks.json');

    copyTemplate('karma.conf.js.tpl', 'karma.conf.js');
    copyTemplate('webpack.config.js.tpl', 'webpack.config.js');
    copyTemplate('package.json.tpl', 'package.json');

    function copy(template, destination) {
      destination = destination || template;
      generator.fs.copy(
        generator.templatePath(template),
        generator.destinationPath(destination)
      );
    }

    function copyTemplate(template, destination) {
      generator.fs.copyTpl(
        generator.templatePath(template),
        generator.destinationPath(destination),
        generator.props
      );
    }
  }

  install() {
    this.installDependencies({ bower: false });
  }
};
