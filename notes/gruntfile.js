module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify"]
               ]
            },
            files: {
               './js/build/bundle.js': ['./js/src/**/*.jsx']
            }
         }
      },
    uglify: {
      options: {
        mangle:false
      },
      dist: {
        files: {
          'js/build/bundle-min.js': ['js/src/hamsa.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          react: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['browserify','jshint', 'uglify']);
};