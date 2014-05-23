'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var BblmGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      var msg = 'Scaffolding complete!';
       
      if (!this.options['skip-install'] && this.options['auto-install']) {
        this.installDependencies();
      } else {
        msg += '\
        ** DON’T FORGET **\
        Run bower and npm install to download all dev dependencies!';
      }

      this.log(yosay(msg));

    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the Backbone layoutmanager generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'auto-install',
      message: 'Would you like to install dependencies (run bower & npm) automatically?',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');

    // Deeps / Build
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');

    // Structure
    this.mkdir('app/src');
    this.mkdir('app/assets');
    this.mkdir('app/assets/data');
    this.mkdir('app/assets/images');
    this.mkdir('app/assets/scripts'); 
    this.mkdir('app/assets/styles');
    this.mkdir('app/includes');

    // Front
    this.copy('index.php', 'app/index.php');

    // htaccess
    this.copy('htaccess', '.htaccess');

    // BB router / vent / startup
    this.copy('src/router.js', 'app/src/router.js');
    this.copy('src/main.js', 'app/src/main.js');
    this.copy('src/vent.js', 'app/src/vent.js');

    // BB starting views
    this.copy('src/views/baseview.js', 'app/src/views/baseview.js');
    this.copy('src/views/error.js', 'app/src/views/error.js');
    this.copy('src/views/home.js', 'app/src/views/home.js');

    // Adt'l modules
    this.copy('src/components/plugins.js', 'app/src/components/plugins.js');
    this.copy('src/components/share.js', 'app/src/components/share.js');
    this.copy('src/components/tracking.js', 'app/src/components/tracking.js');

    // Non-Bower resources
    this.copy('scripts/css3-mediaqueries.js', 'app/assets/scripts/css3-mediaqueries.js');
    this.copy('scripts/jquery.velocity.js', 'app/assets/scripts/jquery.velocity.js');

    // PHP Helper
    this.copy('includes/init.php', 'app/includes/init.php');
    this.copy('includes/lib/Mobile_Detect.php', 'app/includes/lib/Mobile_Detect.php');
    this.copy('includes/lib/util.php', 'app/includes/lib/util.php');

    // Data
    this.copy('data/data.json', 'app/assets/data/data.json');

    // sass files
    this.copy('styles/main.scss', 'app/assets/styles/main.scss');
    this.copy('styles/_print.scss', 'app/assets/styles/_print.scss');
    this.copy('styles/_mixins.scss', 'app/assets/styles/_mixins.scss');
    this.copy('styles/_queries.scss', 'app/assets/styles/_queries.scss');
    this.copy('styles/_normalize.scss', 'app/assets/styles/_normalize.scss');
    this.copy('styles/_application.scss', 'app/assets/styles/_application.scss');

    // Data
    this.copy('images/loading.gif', 'app/assets/images/loading.gif');

  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
    this.copy('README.md', 'README.md');
  }
});

module.exports = BblmGenerator;
