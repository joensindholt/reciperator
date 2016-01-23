// Import modules
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

// Import config
var config = require('./gulp.config.js');

module.exports = function(gulp, settings){

	gulp.task('libs.script', 'Process the scripts from the external libs' , function() {
		return gulp.src(config.libs.script)
			.pipe(concat('libs.js'))
			.pipe(gulpif(settings.production, uglify()))
			.pipe(gulp.dest('js/', { cwd: config.dist }));
	});
};
