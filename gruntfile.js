module.exports = function(grunt) {
  'use strict';
  var pkg = grunt.file.readJSON('package.json');

  var libDirs = ["<%= srcDir %>", "node_modules/*/src"];
  grunt.initConfig({
    sampleDir: "samples",
    srcDir: "src",
    testDir: "test",
    docDir: "doc",

    watch: {
      sample: {
        files: ['<%= sampleDir %>/*.jsx', '<%= srcDir %>/*.jsx'],
        tasks: ['jsx:build']
      },
      test: {
        files: ['<%= testDir %>/buildtest.jsx', '<%= srcDir %>'],
        tasks: ['jsx:test']
      }
    },

    jsx: {
      build: {
        src: ['<%= sampleDir %>/analog.jsx'],
        output: 'main.js',
        add_search_path: libDirs,
        dest: '<%= sampleDir %>/',
        executable: 'node'
      },

      test: {
        src: ['<%= testDir %>/buildtest.jsx'],
        add_search_path: libDirs,
        test: true
      },

      doc: {
        src: ['<%= srcDir %>/*.jsx'],
        add_search_path: libDirs,
        dest: '<%= docDir %>',
        mode: 'doc'
      }
    }
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jsx:test']);
  grunt.registerTask('build', ['jsx:build']);
  grunt.registerTask('test', ['jsx:test']);
  grunt.registerTask('doc', ['jsx:doc']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:
