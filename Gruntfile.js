module.exports = function (grunt) {

    grunt.initConfig({
        env: {
          coverage: {
            APP_DIR_FOR_CODE_COVERAGE: './app/server/coverage/instrument/app/server/js/'
          }
        },
        clean:{
          coverage: {
            src: ['app/server/coverage']
          }
        },
        instrument: {
          files: 'app/server/js/*.js',
          options: {
            lazy: true,
            basePath: 'app/server/coverage/instrument'
          }
        },
        copy: {
          main:{
          files:[{expand:true,flatten:true,src: ['app/server/js/certificates/**'], dest: 'app/server/coverage/instrument/app/server/js/certificates/', filter: 'isFile'}]
          }
        },
        mochaTest: {
          options: {
            reporter: 'spec'
          },
          src: ['app/server/spec/*.js']
        },
        storeCoverage: {
          options: {
            dir: 'app/server/coverage/reports'
          }
        },
        makeReport: {
          src: 'app/server/coverage/reports/**/*.json',
          options: {
            type: 'lcov',
            dir: 'app/server/coverage/reports',
            print: 'detail'
          }
        }
      });
      grunt.loadNpmTasks('grunt-env');
      grunt.loadNpmTasks('grunt-istanbul');
      grunt.loadNpmTasks('grunt-mocha-test');
      grunt.loadNpmTasks('grunt-contrib-clean');
      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.registerTask('coverage', ['env:coverage', 'clean', 'instrument', 'copy', 'mochaTest',
        'storeCoverage', 'makeReport']);
    };
  