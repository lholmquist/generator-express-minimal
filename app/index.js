'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ExpressMinimalGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
      }
    });
  },

  // askFor: function () {
  //   var done = this.async();

  //   // have Yeoman greet the user
  //   console.log(this.yeoman);

  //   // replace it with a short and sweet description of your generator
  //   console.log(chalk.magenta('You\'re using the fantastic ExpressSimple generator.'));

  //   var prompts = [{
  //     type: 'confirm',
  //     name: 'someOption',
  //     message: 'Would you like to enable this option?',
  //     default: true
  //   }];

  //   this.prompt(prompts, function (props) {
  //     this.someOption = props.someOption;

  //     done();
  //   }.bind(this));
  // },

  app: function () {
    this.mkdir('public');
    this.mkdir('public/css');
    this.mkdir('public/js');

    this.copy('server.js', 'server.js');
    this.copy('public/index.html', 'public/index.html');
    this.copy('public/css/style.css', 'public/css/style.css');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('bowerrc', '.bowerrc');
  }
});

module.exports = ExpressMinimalGenerator;
