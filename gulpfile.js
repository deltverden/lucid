'use strict'

let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let bsReload = browserSync.reload;

let paths = {
    html:['**/*.html'],
    js:['assets/js/*.js'],
    scss:['assets/styles/scss/*.scss']
}

gulp.task('sass', function(){
    gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/styles/css'))
        .pipe(bsReload({stream: true}));
});

gulp.task('html', function(){
    gulp.src(paths.html)
        .pipe(bsReload({stream: true}));
});

gulp.task('js', function(){
    gulp.src(paths.html)
        .pipe(bsReload({stream: true}));
});

gulp.task('brSync', function(){
    browserSync({
        server:{
            baseDir: "./"
        },
        port: 8080,
        open: 'local',
        notify: false
    });
});

gulp.task('watcher', function(){
    gulp.watch(paths.scss, ['sass']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watcher', 'brSync']);