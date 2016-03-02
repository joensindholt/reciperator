var gulp = require('gulp');
var ts = require('gulp-typescript');


module.exports = function(gulp, settings, config, browserSync) {

    gulp.task('ts', function() {

        var tsProject = ts.createProject('src/tsconfig.json');

        var tsResult = tsProject.src()
            .pipe(ts(tsProject));

        return tsResult.js.pipe(gulp.dest('.'))
            .pipe(browserSync.reload({
                stream: true
            }));
    });
}
