var globalPath = {
    app : "./src/",
    bower : "./bower_components/"
};

module.exports = {
	app: {
        base: globalPath.app,
        html: [
            globalPath.app+"index.html"
        ],
        sass:[
            globalPath.app+'sass/app.scss'
        ],
        partials: [
            globalPath.app+"views/**/*.html",
            globalPath.app+"components/**/*.html"
        ],
        img: [
            globalPath.app+"img/**/*",
        ]
    },
    libs: {
        script:[
            globalPath.bower+'angular/angular.js',
            globalPath.bower+'angular-route/angular-route.js',
            globalPath.bower+'angular-ui-router/release/angular-ui-router.js',
            globalPath.bower+'angular-aria/angular-aria.js',
            globalPath.bower+'angular-media-queries/match-media.js',
            globalPath.bower+'lodash/dist/lodash.min.js',
            globalPath.bower+'foundation-apps/dist/js/foundation-apps.min.js',
            globalPath.bower+'foundation-apps/dist/js/foundation-apps-templates.min.js'
        ],
        css:[
        ],
        sass:[
            globalPath.bower+'foundation-apps/scss'
        ]
    },
    dist : "./dist/"
};
