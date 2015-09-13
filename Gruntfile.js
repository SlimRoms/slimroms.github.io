module.exports = function(grunt) {

  grunt.initConfig({
    'bower-update': {
      options: {
        pickAll: true,
        forceLatest: true,
        filter: function(p, options) {
          var to_be_ignored = [];
          return to_be_ignored.indexOf(p.name) == -1;
        }
      }
    },
    minifyPolymer: {
      default: {
        files: {
          'vulcanized.min.html': 'vulcanized.html'
        }
      }
    },
    vulcanize: {
      options: {
        inlineScripts: true,
        inlineCss: true,
        stripComments: true
      },
      default: {
        files: {
          'vulcanized.html': 'elements.html'
        }
      }
    },
    copy: {
      default: {
        files: {
            'webcomponents-lite.min.js': 'bower_components/webcomponentsjs/webcomponents-lite.min.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-update');
  grunt.loadNpmTasks('grunt-minify-polymer');
  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', [
    'bower-update',
    'vulcanize',
    'minifyPolymer',
    'copy'
  ]);
};
