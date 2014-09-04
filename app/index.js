'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FabricatorGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wonderful Fabricator generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What do you want to call your framework?',
      default: path.basename(process.cwd())
    }];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      done();
    }.bind(this));

  },

  writing: {
    app: function () {
      this.dest.mkdir('src');
      this.directory('fabricator/src', 'src');
      this.dest.mkdir('tasks');
      this.directory('fabricator/tasks', 'tasks');
    },

    projectfiles: function () {
      var ignores = [
        '.git',
        'LICENSE.md',
        'README.md'
      ];

      var files = this.expandFiles('*', {
        cwd: this.sourceRoot() + '/fabricator',
        dot: true
      });

      files.forEach(function (el) {
        if (ignores.indexOf(el) === -1) {
          this.copy('fabricator/' + el, el);
        }
      }, this);

      this.template("README.md", "README.md");
    }
  },

  end: function () {
    this.spawnCommand('npm', ['run', 'dev']);
  }
});

module.exports = FabricatorGenerator;
