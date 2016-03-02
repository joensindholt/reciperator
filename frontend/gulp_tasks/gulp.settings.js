module.exports = function(){

    var argv = require('yargs').argv;
    var _ = require('lodash');

    var settings_default = require('./gulp.settings.default.json');
    var settings = {};

    try {
    	settings = require('./gulp.settings.json');
    } catch (ex) {
    	console.log("INFO: gulp.settings.json is invalid or does not exist, so I am going to use gulp.settings.default");
    }

    _.merge(settings,settings_default, function(c,d,e) {
        if (argv[e]) {
            if (argv[e] === 'true') {
                return true;
            } else if (argv[e] === 'false') {
                return false;
            } else if (argv[e] !== '') {
                return argv[e];
            }
        } else {
            if (_.isBoolean(c)) {
                return c;
            } else {
                if (settings[e]) {
            		return c;
            	} else {
                    return d;
                }
            }
        }
    });

    return settings;
};
