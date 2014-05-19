'use strict';

module.exports = function(grunt) {
  require('matchdep')['filterAll']('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    bower: {
      options: {
        targetDir: 'components',
        cleanup: true,
        layout: 'byComponent'
      },
      install: {
        //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
      }
    }
  });

  grunt.registerTask('install', [
    'bower:install'
  ]);

  grunt.registerTask('default', [
    'install'
  ]);
};