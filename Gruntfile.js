module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      files:
        {'js/dest/index.js' : ['js/src/*.js']},
      },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
        },
      target: {
        files:
          {'css/dest/index.min.css' : ['css/src/*.css']}
        }
      },

    uglify: {
      files:
        {'js/dest/index.min.js' : 'js/dest/index.js'}
      }
    })

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);

};
