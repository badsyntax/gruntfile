module.exports = function(grunt) {
  return {
    pkg: grunt.file.readJSON('package.json'),
    jshint: require('./jshint')
  };
};
