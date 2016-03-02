module.exports = function(gulp, settings, config, browserSync) {

    gulp.task('copy', function() {
        return gulp.src(config.app.html)
            .pipe(gulp.dest('.', {
                cwd: config.dist
            }))
            .pipe(browserSync.reload({
                stream: true
            }));
    });
};
