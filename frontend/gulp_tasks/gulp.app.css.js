var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function(gulp, settings, config, browserSync) {

    gulp.task('app.css', 'Process the app scss', function() {
        return gulp.src(config.app.sass)
            .pipe(sourcemaps.init())
            .pipe(sass({
				includePaths: config.libs.sass,
				outputStyle: (settings.production ? 'compressed' : 'nested'),
				errLogToConsole: true
			}).on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('css/', {
                cwd: config.dist
            }))
            .pipe(browserSync.reload({
                stream: true
            }));
    });
};
