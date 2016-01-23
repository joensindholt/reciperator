var gulp = require('gulp-help')(require('gulp'));

var settings = require('./gulp_tasks/gulp.settings')();
var config = require('./gulp_tasks/gulp.config');

// define global connet server
var connect = require('gulp-connect');

require('./gulp_tasks/gulp.copy')(gulp, settings, config);
require('./gulp_tasks/gulp.karma')(gulp, settings, config);
require('./gulp_tasks/gulp.libs.script')(gulp, settings, config);
require('./gulp_tasks/gulp.ts')(gulp, settings, config);
require('./gulp_tasks/gulp.serve')(gulp, settings, config, connect);


// define tasks here
gulp.task('default', ['ts', 'libs.script', 'copy'], function(done){
    done();
});

gulp.task('watch', ['default', 'karma', 'serve'], function() {
  gulp.watch('src/**/*.ts', ['ts']);
});
