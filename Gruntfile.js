module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        implementation: require("sass"), // Utiliza la implementación JavaScript del compilador Sass
        sourceMap: true, // Genera source maps para el CSS resultante
        outputStyle: "compressed", // Establece el estilo de salida (nested, expanded, compact, compressed)
      },
      dist: {
        files: {
          "assets/css/admision.min.css": "assets/build/scss/admision.scss",
          "assets/css/formHubspot.min.css":
            "assets/build/scss/formHubspot.scss",
        },
      },
    },
    watch: {
      css: {
        files: "**/*.scss",
        tasks: ["sass"],
      },
      js: {
        files: ["assets/build/js/*.js"],
        tasks: ["js"],
      },
    },
    // Uglify task info. Compress the js files.
    uglify: {
      production: {
        files: {
          "assets/js/main.min.js": ["assets/js/main.js"],
        },
      },
    },
    concat: {
      options: {
        separator: ";",
      },
      dist: {
        src: [
          "node_modules/jquery/dist/jquery.js",
          "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
          "node_modules/lightgallery/lightgallery.umd.js",
          "assets/build/js/main.js",
        ],
        dest: "assets/js/main.js",
      },
    },
    // Validate JS code
    jshint: {
      beforeconcat: ["Gruntfile.js", "assets/build/js/*.js"],
      afterconcat: ["assets/js/main.js"],
    },
  });

  grunt.loadNpmTasks("grunt-sass");
  grunt.registerTask("default", ["sass"]);

  grunt.loadNpmTasks("grunt-contrib-watch");

  // Concat JS code
  grunt.loadNpmTasks("grunt-contrib-concat");
  // Validate JS code
  grunt.loadNpmTasks("grunt-contrib-jshint");
  // Compress JS Files
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Linting task
  grunt.registerTask("lint", ["jshint"]);
  // JS task
  grunt.registerTask("js", ["concat", "uglify"]);

  grunt.registerTask("default", ["watch"]);
};
