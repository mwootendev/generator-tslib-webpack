'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sensational ' + chalk.red('generator-tslib-webpack') + ' generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname
    },{
      type: 'list',
      name: 'testingFramework',
      message: 'Which testing framework would you like to use?',
      choices: ['Mocha+Chai+Sinon', 'Jasmine']
    },{
      type    : 'input',
      name    : 'sourceDir',
      message : 'Source directory (src, app, etc.)',
      default : 'src'
    },{
      type    : 'input',
      name    : 'testDir',
      message : 'Test directory (src, test, spec, etc.)',
      default : 'src'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.framework = (props.testingFramework === 'Jasmine') ? 'jasmine' : 'mocha';

      if (this.props.framework === 'jasmine') {
        this.props.testOptions = '{reporter: new require(\'jasmine-reporters\').TerminalReporter()}';
        this.props.testPackages =
          '"jasmine": "^2.5.3",' +
          '\n    "karma-jasmine": "^1.1.0",' +
          '\n    "@types/jasmine": "^2.5.43"';
      } else {
        this.props.testOptions = '{reporter: \'min\'}';
        this.props.testPackages =
          '"chai": "^3.5.0",' +
          '\n    "karma-chai-sinon": "^0.1.5",' +
          '\n    "karma-mocha": "^1.3.0",' +
          '\n    "mocha": "^3.2.0",' +
          '\n    "sinon": "^1.17.7",' +
          '\n    "sinon-chai": "^2.8.0"';
      }
    }.bind(this));
  },

  writing: function () {
    var generator = this;

    copy('.editorconfig');
    copy('.gitignore');
    copy('tsconfig.json');
    copy('tslint.json');
    copy('src/Greeter.ts', this.props.sourceDir + '/Greeter.ts');
    copy('src/Greeter.spec.ts.' + this.props.framework, this.props.testDir + '/Greeter.spec.ts');
    copy('src/index.ts', this.props.sourceDir + '/' + 'index.ts');

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
  },

  install: function () {
    this.installDependencies();
  }
});
