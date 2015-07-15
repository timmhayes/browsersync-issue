var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  browserSync.init({
    browser: "google chrome",
    logLevel: "debug",
    server: {
      baseDir: "./app"
    },
    startPath: "index.html"
  });
});
