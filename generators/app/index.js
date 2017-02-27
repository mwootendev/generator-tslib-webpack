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
          '"gulp-jasmine": "^2.3.0",' +
          '\n    "jasmine": "^2.4.1",' +
          '\n    "jasmine-reporters": "^2.1.1"';
      } else {
        this.props.testOptions = '{reporter: \'min\'}';
        this.props.testPackages =
          '"chai": "^3.5.0",' +
          '\n    "mocha": "^2.4.5",' +
          '\n    "gulp-mocha": "^2.2.0",' +
          '\n    "sinon": "^1.17.3",' +
          '\n    "sinon-chai": "^2.8.0"';
      }
    }.bind(this));
  },

  writing: function () {
    var generator = this;

    copy('.editorconfig');
    copy('.gitignore');
    copy('karma.conf.js')
    copy('tsconfig.json');
    copy('tslint.json');
    copy('src/Greeter.ts', this.props.sourceDir + '/Greeter.ts');
    copy('src/Greeter.spec.ts.' + this.props.framework, this.props.testDir + '/Greeter.spec.ts');
    copy('src/main.ts', this.props.sourceDir + '/' + this.props.name + '.ts');
    
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
