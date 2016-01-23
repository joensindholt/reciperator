var gulp = require('gulp');

require('./gulptasks/gulp.ts');

// define tasks here
gulp.task('default', ['ts'], function(done){
    done();
});

gulp.task('watch', ['default'], function() {
  gulp.watch('src/**/*.ts', ['ts']);
});
