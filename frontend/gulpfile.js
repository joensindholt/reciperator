var gulp = require('gulp-help')(require('gulp'));
var runSequence = require('run-sequence');

var settings = require('./gulp_tasks/gulp.settings')();
var config = require('./gulp_tasks/gulp.config');

// define global connet server
var browserSync = require('browser-sync');

require('./gulp_tasks/gulp.copy')(gulp, settings, config, browserSync);
require('./gulp_tasks/gulp.partials')(gulp, settings, config, browserSync);
require('./gulp_tasks/gulp.karma')(gulp, settings, config);
require('./gulp_tasks/gulp.libs.script')(gulp, settings, config);
require('./gulp_tasks/gulp.libs.css')(gulp, settings, config);
require('./gulp_tasks/gulp.app.css')(gulp, settings, config, browserSync);
require('./gulp_tasks/gulp.ts')(gulp, settings, config, browserSync);
require('./gulp_tasks/gulp.serve')(gulp, settings, config, browserSync);


// define tasks here
gulp.task('default', ['ts', 'libs.script', 'libs.css', 'copy', 'partials', 'app.css'], function(done) {
    done();
});

gulp.task('watch', function() {
    runSequence('default','serve','karma');
    gulp.watch('src/**/*.ts', ['ts']);
    gulp.watch('src/**/*.html', ['copy', 'partials']);
    gulp.watch('src/sass/**/*.scss', ['app.css']);
});
