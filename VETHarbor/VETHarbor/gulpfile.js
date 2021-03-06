//<binding BeforeBuild='copy-assets' />
//Note:  To view node_modules folder use the "Show All Files" option is visual studio

"use strict";

var _ = require('lodash'),
    gulp = require('gulp');

gulp.task('copy-assets', function () {
    var assets = {
        js: [
            './node_modules/material-kit/assets/js/bootstrap-material-design.js',
            './node_modules/material-kit/assets/js/material-kit.js'
        ],
        css: ['./node_modules/material-kit/assets/css/material-kit.css'],

        scss: ['./node_modules/material-kit/assets/scss/**/*.scss'],
        img: ['./node_modules/material-kit/assets/img/kit/**/*.jpg',
            './node_modules/material-kit/assets/img/kit/**/*.png']
    };
    _(assets).forEach(function (assets, type) {
        gulp.src(assets).pipe(gulp.dest('./wwwroot/' + type));
    });
});