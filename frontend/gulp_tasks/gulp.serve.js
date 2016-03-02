module.exports = function(gulp, settings, config, browserSync) {

    // EXPRESS server with compression enabled;
    if (settings.production) {
        var express = require('express');
        var serveStatic = require('serve-static');
        var compression = require('compression');

        gulp.task('serve', 'Run a static Node.js server for development on port ' + settings.port, function() {
            var app = express();
            app.use(compression());
            app.use(serveStatic(config.dist));
            app.listen(settings.port);

            console.log("Express server started on port", settings.port);
            return gulp.src(config.dist);
        });
    } else {
        gulp.task('serve', 'Run browserSync server for development on port ' + settings.port, function() {
            browserSync({
                server: {
                    baseDir: config.dist,
                },
                port: 8000,
                ui: {
                    port: 8001
                }
            });
        });
    }
};
