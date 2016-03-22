var globalPath = {
    app : "./src/",
    bower : "./bower_components/"
};

module.exports = {
	app: {
        base: globalPath.app,
        html: [
            globalPath.app+"index.html",
            globalPath.bower+'foundation-apps/js/angular/**/popup.html',
            globalPath.bower+'foundation-apps/js/angular/**/actionsheet/*.html'
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
            globalPath.bower+'jquery/dist/jquery.min.js',
            globalPath.bower+'angular/angular.js',
            globalPath.bower+'angular-route/angular-route.js',
            globalPath.bower+'angular-ui-router/release/angular-ui-router.js',
            globalPath.bower+'angular-aria/angular-aria.js',
            globalPath.bower+'angular-media-queries/match-media.js',
            globalPath.bower+'lodash/dist/lodash.min.js',
            globalPath.bower+'tether/dist/js/tether.min.js',
            globalPath.bower+'foundation-apps/dist/js/foundation-apps.min.js',
            globalPath.bower+'foundation-apps/dist/js/foundation-apps-templates.min.js',
            globalPath.bower+'highlightjs/highlight.pack.min.js',
            globalPath.bower+'angular-highlightjs/angular-highlightjs.js',
            globalPath.bower+'js-quantities/src/quantities.js',
            globalPath.bower+'jssor-slider/js/jssor.slider.mini.js',
            globalPath.bower+'dang-jssor/build/dang-jssor-0.0.3/dang-jssor.min.js'
        ],
        css:[
            globalPath.bower+'highlightjs/styles/solarized-dark.css',
            globalPath.bower+'angular-coverflow/coverflow.css'
        ],
        sass:[
            globalPath.bower+'foundation-apps/scss'
        ]
    },
    dist : "./dist/"
};
